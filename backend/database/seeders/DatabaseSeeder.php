<?php

namespace Database\Seeders;

use App\Models\Genre;
use App\Models\LikedMovie;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            MovieSeeder::class,
            GenresSeeder::class,
            MovieGenreSeeder::class,
            UserSeeder::class,
            MovieUserRelationSeeder::class,
            MovieCommentSeeder::class
        ]);
    }
}
