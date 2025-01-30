<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MovieController extends Controller
{

    public function fetchMovies()
    {
        $apikey = env('TMDB_API_KEY');

        $client = new Client();

        $response = $client->request('GET', 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', [
            'headers' => [
                'Authorization' => "Bearer $apikey",
                'accept' => 'application/json',
            ],
        ]);

        $data = json_decode($response->getBody()->__toString(), true);

        // var_dump(json_encode($data)) ;

        return response()->json($data, 200, [], JSON_PRETTY_PRINT);
    }
}
