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
        Schema::create('mcqs', function (Blueprint $table) {
            $table->id();

            // Relationships
            $table->foreignId('subject_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('topic_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            // Optional: Link MCQs to a paper
            $table->foreignId('paper_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            // Question data
            $table->text('question');

            // Question behavior
            $table->enum('mcq_type', ['single', 'multiple', 'true_false'])
                ->default('single');

            $table->enum('difficulty', ['easy', 'medium', 'hard'])
                ->default('easy');

            // Explanation shown after answering
            $table->text('explanation')->nullable();

            // Status
            $table->boolean('is_active')->default(true);

            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();

            // Helpful indexes
            $table->index(['subject_id', 'topic_id', 'difficulty', 'is_active']);
            $table->index(['subject_id', 'difficulty']);
            $table->index('mcq_type');
            $table->index('topic_id');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mcqs');
    }
};
