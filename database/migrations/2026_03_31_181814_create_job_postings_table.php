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
            $table->string('slug')->unique();
            $table->foreignId('department_id')
                ->nullable()
                ->constrained('departments')
                ->onDelete('set null');

            // Official Ad Details
            $table->string('ad_number')->nullable()->index(); // e.g., 04/2026
            $table->date('closing_date')->nullable()->index();
            $table->string('pdf_url')->nullable(); // Link to official PPSC PDF

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
