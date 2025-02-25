<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Genre;
use GraphQL\Error\Error;

final readonly class DeleteGenre
{
    /** @param  array{}  $args */
    public function __invoke(null $_, array $args): string
    {
        return Genre::destroy($args['id']) ?
            "Genre by id {$args['id']} deleted successfuly!"
            :
            throw new Error("Genre by id {$args['id']} not found!");
    }
}
