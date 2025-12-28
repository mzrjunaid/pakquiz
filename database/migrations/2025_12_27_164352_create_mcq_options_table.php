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
        Schema::create('mcq_options', function (Blueprint $table) {
            $table->id();

            // Relationship to MCQ
            $table->foreignId('mcq_id')
                ->constrained('mcqs')
                ->cascadeOnDelete();

            // Option content
            $table->string('option_text');

            // Correctness flag
            $table->boolean('is_correct')->default(false);

            // Optional ordering (useful for UI)
            $table->unsignedTinyInteger('sort_order')->default(0);

            $table->timestamps();
            $table->softDeletes();

            // Indexes for performance
            $table->index('mcq_id');
            $table->index('is_correct');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mcq_options');
    }
};
