<?php

namespace Database\Seeders;

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class McqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first() ?? User::factory()->create();

        Mcq::factory()
            ->count(50)
            ->for($user, 'createdBy')
            ->for(Paper::query()->inRandomOrder()->first() ?? Paper::factory(), 'paper')
            ->for(Subject::query()->inRandomOrder()->first() ?? Subject::factory(), 'subject')
            ->for(Topic::query()->inRandomOrder()->first() ?? Topic::factory(), 'topic')
            ->create();
    }
}
