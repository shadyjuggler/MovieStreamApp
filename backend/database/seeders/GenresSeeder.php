<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(database_path('dataset/genres.json'));
        $genres = json_decode($json)->genres;

        foreach($genres as $genre) {
            Genre::create([
                'id' => $genre->id,
                'name' => $genre->name
            ]);
        }
    }
}
