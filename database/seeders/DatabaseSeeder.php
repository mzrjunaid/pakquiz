<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(RoleSeeder::class);
        $this->call(UserStatusSeeder::class);

        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Junaid',
                'email' => 'mzrjunaid@gmail.com',
                'password' => '123.321A',
                'email_verified_at' => now(),
                'role_id' => 1,
                'status_id' => 1,
            ]
        );

        $this->call(UserSeeder::class);
    }
}
