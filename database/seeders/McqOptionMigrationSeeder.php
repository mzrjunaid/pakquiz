<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Old\OldMcq;
use App\Models\McqOption;

class McqOptionMigrationSeeder extends Seeder
{
    public function run()
    {
        OldMcq::chunk(500, function ($oldMcqs) {

            $bulkInsert = [];

            foreach ($oldMcqs as $old) {

                $options = [
                    'A' => $old->option_A,
                    'B' => $old->option_B,
                    'C' => $old->option_C,
                    'D' => $old->option_D,
                ];

                $sort = 1;

                foreach ($options as $key => $text) {

                    if (!$text) continue;

                    $bulkInsert[] = [
                        'mcq_id'      => $old->q_id, // matches new mcqs.id
                        'option_text' => $text,
                        'is_correct'  => ($key == $old->right_choice),
                        'sort_order'  => $sort++,
                        'created_at'  => now(),
                        'updated_at'  => now(),
                    ];
                }
            }

            // Bulk insert for performance
            McqOption::insert($bulkInsert);
        });

        $this->command->info('MCQ options migrated successfully!');
    }
}
