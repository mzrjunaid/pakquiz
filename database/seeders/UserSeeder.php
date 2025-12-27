<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@pakquiz.com'],
            [
                'name' => 'Admin',
                'password' => '123.321A',
                'email_verified_at' => now(),
                'role_id' => 2,
                'status_id' => 1,
            ]
        );
        User::firstOrCreate(
            ['email' => 'editor@pakquiz.com'],
            [
                'name' => 'Editor',
                'password' => '123.321A',
                'email_verified_at' => now(),
                'role_id' => 3,
                'status_id' => 2,
            ]
        );
        User::firstOrCreate(
            ['email' => 'user@pakquiz.com'],
            [
                'name' => 'User',
                'password' => '123.321A',
                'email_verified_at' => now(),
                'role_id' => 4,
                'status_id' => 2,
            ]
        );
        User::firstOrCreate(
            ['email' => 'viewer@pakquiz.com'],
            [
                'name' => 'Viewer',
                'password' => '123.321A',
                'email_verified_at' => now(),
                'role_id' => 5,
                'status_id' => 2,
            ]
        );
    }
}
