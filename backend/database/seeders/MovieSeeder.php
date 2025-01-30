<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\Movie;


class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('dataset/movies.json'));
        $movies = json_decode($json, true);

        foreach ($movies as $movie) {
            Movie::create([
                'adult' => rand(0, 1),
                'bg_path' => $movie['bg_path'],
                'language' => $movie['language'],
                'title' => $movie['title'],
                'overview' => $movie['overview'],
                'tagline' => $movie['tagline'],
                'poster_path' => $movie['poster_path'],
                'release_date' => $movie['release_date'],
                'rating' => $movie['rating'],
                'genres' => json_encode($movie['genres']),
                'budget' => $movie['budget'],
                'duration' => $movie['duration'],
                'cast' => json_encode($movie['cast']),
                'director' => json_encode($movie['director']),
            ]);
        }
    }
}
