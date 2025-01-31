<?php

namespace Database\Seeders;

use App\Models\MovieGenre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MovieGenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // extraction purpose / not related to app

        // $json = File::get(database_path('dataset/movies.json'));
        // $arr = json_decode($json, true);
        // $movie_genre = [];
        // $i = 1;
        // foreach ($arr as $movie) {
        //     foreach ($movie['genres'] as $genreId) {
        //         array_push($movie_genre, ['movie_id' => $i, 'genre_id' => $genreId['id']]);
        //     }
        //     $i++;
        // }
        // dd(json_encode($movie_genre));

        // $json = File::get(database_path('dataset/movies.json'));
        // $arr = json_decode($json, true);
        // foreach ($arr as $key => $movie) {
        //     // Modify the genres field directly
        //     unset($arr[$key]['genres']);
        // }
        // dd(json_encode($arr));


        $json = File::get(database_path('dataset/movies_genres.json'));
        $data = json_decode($json, true);

        foreach($data as $movie_genre) {
            MovieGenre::create([
                'movie_id' => $movie_genre['movie_id'],
                'genre_id' => $movie_genre['genre_id']
            ]);
        }
    }
}
