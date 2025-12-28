<?php

namespace Database\Seeders;

use App\Models\TestingService;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestingServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first() ?? User::factory()->create();

        TestingService::factory()
            ->count(5)
            ->for($user, 'createdBy')
            ->create();
    }
}
