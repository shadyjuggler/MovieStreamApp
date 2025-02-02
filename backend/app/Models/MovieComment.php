<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MovieComment extends Model
{
    /** @use HasFactory<\Database\Factories\MovieCommentFactory> */
    use HasFactory;

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
