<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Old\OldMcq;
use App\Models\McqOption;
use App\Models\Old\OldCAMcqs;
use Illuminate\Support\Facades\DB;

class McqOptionMigrationSeeder extends Seeder
{
    public function run()
    {
        DB::transaction(function () {
            OldCAMcqs::where('ca_category', 'Current Affairs February 2025')
                ->chunk(500, function ($oldMcqs) {

                    $bulkInsert = [];

                    foreach ($oldMcqs as $old) {

                        // skip if mcq does not exist (safety)
                        if (!\App\Models\Mcq::where('id', $old->ca_id)->exists()) {
                            continue;
                        }

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
                                'mcq_id'      => $old->ca_id,
                                'option_text' => trim($text),
                                'is_correct'  => ($key === strtoupper($old->right_choice)),
                                'sort_order'  => $sort++,
                                'created_at'  => now(),
                                'updated_at'  => now(),
                            ];
                        }
                    }

                    if (!empty($bulkInsert)) {
                        McqOption::insert($bulkInsert); // fast bulk insert
                    }
                });

            $this->command->info('MCQ options migrated successfully!');
        });
    }
}
