<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MovieController extends Controller
{
    // to obtain dataset of movies
    public function fetchMovies()
    {
        $apikey = env('TMDB_API_KEY');

        $client = new Client();


        $result = [];

        for ($i = 47; $i <= 50; $i++) {
            $response = $client->request('GET', "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=$i", [
                'headers' => [
                    'Authorization' => "Bearer $apikey",
                    'accept' => 'application/json',
                ],
            ]);

            $movies = json_decode($response->getBody()->__toString(), true)['results'];

            foreach($movies as $movie) {

                // details
                $response = $client->request('GET', "https://api.themoviedb.org/3/movie/" .  $movie['id'] . "?language=en-US", [
                    'headers' => [
                        'Authorization' => "Bearer $apikey",
                        'accept' => 'application/json',
                    ],
                ]);

                $details = json_decode($response->getBody()->__toString(), true);

                
               
                $response = $client->request('GET', "https://api.themoviedb.org/3/movie/". $movie['id'] . "/credits?language=en-US", [
                    'headers' => [
                        'Authorization' => "Bearer $apikey",
                        'accept' => 'application/json',
                    ],
                ]);

                $cast = json_decode($response->getBody()->__toString(), true)['cast'];
                $cast_sliced = array_slice($cast ?? [], 0, 10);
                $cast_names = array_map(fn($actor) => [$actor['id'], $actor['name']], $cast_sliced);
                $director = json_decode($response->getBody()->__toString(), true)['crew'][0];


                $result[$movie['id']] = [
                    'id' => $movie['id'],
                    'title' => $movie['title'],
                    'bg_path' => $movie['backdrop_path'],
                    'language' => $movie['original_language'],
                    'overview' => $movie['overview'],
                    'poster_path' => $movie['poster_path'],
                    'release_date' => $movie['release_date'],
                    'rating' => $movie['vote_average'],
                    'genres' => $details['genres'],
                    'budget' => $details['budget'],
                    'duration' => $details['runtime'],
                    'tagline' => $details['tagline'],
                    'cast' => $cast_names,
                    'director' => ['id' => $director['id'], 'name' => $director['name']]
                ];

            }
        }
       
        return response()->json($result, 200, [], JSON_PRETTY_PRINT);
    }
}
