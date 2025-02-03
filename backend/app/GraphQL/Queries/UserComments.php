<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\User;

final class UserComments
{
    /** @param  array{}  $args */
    public function __invoke(User $user)
    {
        return $user->comments;
    }
}