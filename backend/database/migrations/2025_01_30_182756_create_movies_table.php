<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->boolean('adult');
            $table->string('bg_path');
            $table->string('language');
            $table->string('title');
            $table->text('overview');
            $table->string('tagline');
            $table->string('poster_path');
            $table->string('release_date');
            $table->float('rating', 1);
            $table->unsignedBigInteger('budget');
            $table->unsignedInteger('duration');
            $table->json('cast');
            $table->json('director');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
