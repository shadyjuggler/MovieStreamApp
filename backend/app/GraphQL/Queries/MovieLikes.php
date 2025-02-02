<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\Movie;

final class MovieLikes
{
    /** @param  array{}  $args */
    public function __invoke(Movie $movie)
    {
        return count($movie->likedBy);
    }
}