<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\MovieComment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieCommentSeeder extends Seeder
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

            $commentsCount = rand(0, 10);

            // no each user will have comments
            if (!$commentsCount) {
                continue;
            } 

            $randomMovieIds = (array)array_rand($moviesFlipped, $commentsCount);

            foreach($randomMovieIds as $movieId) {
                MovieComment::factory()->create([
                    'user_id' => $user->id,
                    'movie_id' => $movieId,
                ]);
            }
        }
        
    }
}
