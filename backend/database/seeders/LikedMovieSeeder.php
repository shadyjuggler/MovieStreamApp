<?php

namespace Database\Seeders;

use App\Models\LikedMovie;
use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikedMovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        $movies = Movie::pluck('id')->toArray();

        foreach ($users as $user) {

            $likedMoviesCount = rand(4, 15);

            // get spcific random count of movies ids from all $movies ids
            $randomMovieIds = array_rand(array_flip($movies), $likedMoviesCount);

            foreach($randomMovieIds as $movieId) {
                LikedMovie::create([
                    'user_id' => $user->id,
                    'movie_id' => $movieId
                ]);
            }

        }
    }
}
