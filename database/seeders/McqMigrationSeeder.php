<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Old\OldMcq;  // Your old database model
use App\Models\Mcq;      // Your new database model
use App\Models\Old\OldCAMcqs;
use Illuminate\Support\Str;

class McqMigrationSeeder extends Seeder
{
    public function run()
    {
        // Use chunking to avoid memory issues for large tables
        OldCAMcqs::where('ca_category', 'Current Affairs February 2025')
            ->chunk(500, function ($oldMcqs) {
                $bulk = [];

                foreach ($oldMcqs as $oldMcq) {
                    $bulk[] = [
                        'id' => $oldMcq->ca_id,
                        'subject_id' => 39,
                        'topic_id' => 25,
                        'paper_id' => null,
                        'question' => $oldMcq->q_statement,
                        'slug' => Str::slug(substr($oldMcq->q_statement, 0, 50)),
                        'mcq_type' => 'single',
                        'difficulty' => 'medium',
                        'is_active' => 1,
                        'created_by' => 1,
                    ];
                }

                Mcq::insertOrIgnore($bulk);
            });

        $this->command->info('Mcq migration completed successfully!');
    }
}
