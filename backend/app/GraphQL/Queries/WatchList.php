<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\User;

final readonly class WatchList
{
    /** @param  array{}  $args */
    public function __invoke(null $_, array $args)
    {
        $user = User::where('id', $args['user_id'])->with('watchLists.movie')->first();
        $watchLists = $user->watchLists;
        $movies = [];
        foreach($watchLists as $watchList) {
            array_push($movies, $watchList->movie);
        }

        return $movies;
    }
}
