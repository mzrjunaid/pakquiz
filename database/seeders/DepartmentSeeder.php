<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Make sure at least one user exists
        $user = User::first() ?? User::factory()->create();

        Department::factory()
            ->count(5)
            ->for($user, 'createdBy') // Assign created_by
            ->create();
    }
}
