<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user_statuses')->insert([
            ['name' => 'Approved', 'slug' => 'approved', 'description' => 'User is approved'],
            ['name' => 'Pending', 'slug' => 'pending', 'description' => 'Pending Admin Approval'],
            ['name' => 'Rejected', 'slug' => 'rejected', 'description' => 'User has been rejected'],
            ['name' => 'Suspended', 'slug' => 'suspended', 'description' => 'User has been suspended'],
        ]);
    }
}
