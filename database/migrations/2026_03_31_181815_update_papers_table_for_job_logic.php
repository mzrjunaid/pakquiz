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
        Schema::table('papers', function (Blueprint $table) {
            // 1. Link to the Job Posting (Nullable in case some papers aren't for specific jobs)
            $table->foreignId('job_id')
                ->nullable()
                ->index() // Add this for fast lookups
                ->constrained('job_postings')
                ->onDelete('set null');

            // 2. Define if it is a Mock Paper (Generated) or Official (Past Paper)
            $table->enum('type', ['official', 'mock'])
                ->default('official')
                ->index() // Add this for filtering by type
                ->after('slug');


            // 3. Set the total number of questions (e.g., 100 for PPSC)
            $table->integer('total_questions')->default(100)->after('type');

            // 4. Add a passing percentage if you want to track results
            $table->integer('passing_marks')->default(40)->after('total_questions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('papers', function (Blueprint $table) {
            $table->dropForeign(['job_id']);
            $table->dropColumn(['job_id', 'type', 'total_questions', 'passing_marks']);
        });
    }
};
