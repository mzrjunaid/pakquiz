<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Old\OldMcq;  // Your old database model
use App\Models\Mcq;      // Your new database model

class McqMigrationSeeder extends Seeder
{
    public function run()
    {
        // Use chunking to avoid memory issues for large tables
        OldMcq::chunk(500, function ($oldMcqs) {
            foreach ($oldMcqs as $oldMcq) {
                Mcq::create([
                    'id' => $oldMcq->q_id,
                    'subject_id' => $oldMcq->syllabus_id,
                    'topic_id' => null,
                    'paper_id' => $oldMcq->paper_id,
                    'question' => $oldMcq->q_statement,
                    'slug' => $oldMcq->slug,
                    'mcq_type' => 'single',
                    'difficulty' => 'medium',
                    'is_active' => 1,
                    'created_by' => 1,
                ]);
            }
        });

        $this->command->info('Mcq migration completed successfully!');
    }
}
