<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaperSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first() ?? User::factory()->create();

        Paper::factory()
            ->count(10)
            ->for($user, 'createdBy')
            ->for(Department::query()->inRandomOrder()->first() ?? Department::factory(), 'department')
            ->for(Subject::query()->inRandomOrder()->first() ?? Subject::factory(), 'subject')
            ->for(TestingService::query()->inRandomOrder()->first() ?? TestingService::factory(), 'testingService')
            ->create();
    }
}
