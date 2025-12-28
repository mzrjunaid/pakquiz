<?php

namespace Database\Seeders;

use App\Models\Mcq;
use App\Models\McqOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class McqOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mcq::all()->each(function ($mcq) {
            McqOption::factory()
                ->count(4)
                ->for($mcq, 'mcq')
                ->create();
        });
    }
}
