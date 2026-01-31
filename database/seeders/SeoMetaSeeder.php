<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;

class SeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            TestingServiceSeoMetaSeeder::class,
            PaperSeoMetaSeeder::class,
            SubjectSeoMetaSeeder::class,
            TopicSeoMetaSeeder::class,
            McqsSeoMetaSeeder::class,
        ]);
    }
}
