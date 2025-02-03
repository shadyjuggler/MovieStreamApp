<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Genre;

final readonly class DeleteGenre
{
    /** @param  array{}  $args */
    public function __invoke(null $_, array $args): string
    {
        return Genre::destroy($args['id']) ?
            "Genre by id {$args['id']} deleted successfuly!"
            :
            "Genre by id {$args['id']} not found!";
    }
}
