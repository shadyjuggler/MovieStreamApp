<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Movie extends Model
{
    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class, 'movie_genres');
    }

    public function likedBy(): BelongsToMany {
        return $this->belongsToMany(User::class, 'liked_movies');
    }

    public function comments(): HasMany {
        return $this->hasMany(MovieComment::class);
    }
}
