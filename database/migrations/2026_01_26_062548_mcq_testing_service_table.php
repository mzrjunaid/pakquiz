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
        Schema::create('mcq_testing_service', function (Blueprint $table) {

            $table->id();

            $table->foreignId('mcq_id')
                ->constrained('mcqs')
                ->cascadeOnDelete();

            $table->foreignId('testing_service_id')
                ->constrained('testing_services')
                ->cascadeOnDelete();

            // prevent duplicate relations
            $table->unique(['mcq_id', 'testing_service_id']);

            // performance indexes
            $table->index('mcq_id');
            $table->index('testing_service_id');

            $table->timestamps(); // optional but useful
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mcq_testing_service');
    }
};
