<?php

namespace Database\Seeders;

use App\Models\LikedMovie;
use App\Models\Movie;
use App\Models\User;
use App\Models\WatchList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieUserRelationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        $movies = Movie::pluck('id')->toArray();

        foreach ($users as $user) {
            $moviesFlipped = array_flip($movies);

            $likedMoviesCount = rand(4, 15);
            $watchListCount = rand(2, 18);

            // get spcific random count of movies ids from all $movies ids
            $randomMovieIds = array_rand($moviesFlipped, $likedMoviesCount);

            foreach($randomMovieIds as $movieId) {
                LikedMovie::create([
                    'user_id' => $user->id,
                    'movie_id' => $movieId
                ]);
            }

            $randomMovieIds = array_rand($moviesFlipped, $watchListCount);

            foreach($randomMovieIds as $movieId) {
                WatchList::create([
                    'user_id' => $user->id,
                    'movie_id' => $movieId
                ]);
            }

        }
    }
}
