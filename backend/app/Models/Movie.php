<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Movie extends Model
{
    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class);
    }

    public function likedBy(): HasMany {
        return $this->hasMany(LikedMovie::class);
    }

    public function comments(): HasMany {
        return $this->hasMany(MovieComment::class);
    }
}
