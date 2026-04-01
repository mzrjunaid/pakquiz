<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_postings', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // e.g., Assistant (BS-16)
            $table->string('slug')->unique(); // e.g., assistant-bs-16
            $table->foreignId('department_id')
                ->nullable()
                ->constrained('departments')
                ->onDelete('set null'); // e.g., 1
            $table->foreignId('testing_service_id')
                ->nullable()
                ->constrained('testing_services')
                ->onDelete('set null'); // e.g., 1

            $table->text('minimum_qualification')->nullable(); // e.g., Bachelor's Degree
            $table->text('experience')->nullable(); // e.g., 2 years

            $table->string('scale')->nullable()->index(); // e.g., BS-16
            $table->integer('total_posts')->nullable()->index(); // e.g., 10
            $table->integer('max_age')->nullable()->index(); // e.g., 25
            $table->integer('age_relaxation')->nullable(); // e.g., 5 years
            $table->string('domicile')->nullable(); // e.g., Punjab

            // Official Ad Details
            $table->string('ad_number')->nullable()->index(); // e.g., 04/2026
            $table->string('case_number')->nullable(); // e.g., 12-RG/2026
            $table->date('closing_date')->nullable()->index(); // e.g., 2026-04-30
            $table->string('pdf_url')->nullable(); // Link to official PPSC PDF
            $table->string('apply_url')->nullable(); // Link to official PPSC

            $table->text('description')->nullable(); // Official eligibility/criteria
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_postings');
    }
};
