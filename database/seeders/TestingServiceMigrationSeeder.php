<?php

namespace Database\Seeders;

use App\Models\Old\OldMcq;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestingServiceMigrationSeeder extends Seeder
{
    public function run(): void
    {
        // optional safety (prevents duplicates if re-run)
        DB::table('mcq_testing_service')->truncate();

        OldMcq::chunk(500, function ($oldMcqs) {

            $bulk = [];

            foreach ($oldMcqs as $old) {

                // skip invalid values
                if (!$old->testing_service_id || $old->testing_service_id == 0) {
                    continue;
                }

                $bulk[] = [
                    'mcq_id' => $old->q_id,
                    'testing_service_id' => $old->testing_service_id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            if (!empty($bulk)) {
                DB::table('mcq_testing_service')->insert($bulk);
            }
        });

        $this->command->info('Testing service pivot migration completed successfully!');
    }
}
