<?php

namespace Database\Seeders;

use App\Models\Subject;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first() ?? User::factory()->create();

        // Assign each topic to a random subject
        Topic::factory()
            ->count(20)
            ->for($user, 'createdBy')
            ->for(Subject::query()->inRandomOrder()->first() ?? Subject::factory(), 'subject')
            ->create();
    }
}
