<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Old\OldPaper;  // Your old database model
use App\Models\Paper;      // Your new database model

class PaperMigrationSeeder extends Seeder
{
    public function run()
    {
        // Use chunking to avoid memory issues for large tables
        OldPaper::chunk(500, function ($oldPapers) {
            foreach ($oldPapers as $oldPaper) {
                Paper::create([
                    'id' => $oldPaper->paper_id,
                    'name' => $oldPaper->paper,
                    'slug' => $oldPaper->slug,
                    'paper_year' => $oldPaper->paper_year,
                    'is_active' => 1,
                    'department_id' => $oldPaper->dept_id,
                    'subject_id' => 23,
                    'testing_service_id' => $oldPaper->testing_service_id,
                    'created_by' => 1,
                ]);
            }
        });

        $this->command->info('Paper migration completed successfully!');
    }
}
