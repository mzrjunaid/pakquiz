<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('seo_meta', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();        // Meta title
            $table->text('description')->nullable();   // Meta description
            $table->text('keywords')->nullable();      // Meta keywords
            $table->string('og_title')->nullable();    // Open Graph title
            $table->text('og_description')->nullable(); // Open Graph description
            $table->string('og_image')->nullable();    // Open Graph image URL

            $table->nullableMorphs('page');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_meta');
    }
};
