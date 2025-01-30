<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $json = File::get(database_path('dataset/movies.json'));
        $movies = json_decode($json, true);

        foreach ($movies as $movie) {
            Movie::create([
                'adult' => false,
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
