<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppendMcqsToSlugSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('papers')
            ->where('slug', 'NOT LIKE', '%-mcqs')
            ->update([
                'slug' => DB::raw("CONCAT(slug, '-mcqs')")
            ]);

        DB::table('subjects')
            ->where('slug', 'NOT LIKE', '%-mcqs')
            ->update([
                'slug' => DB::raw("CONCAT(slug, '-mcqs')")
            ]);

        DB::table('topics')
            ->where('slug', 'NOT LIKE', '%-mcqs')
            ->update([
                'slug' => DB::raw("CONCAT(slug, '-mcqs')")
            ]);

        DB::table('departments')
            ->where('slug', 'NOT LIKE', '%-dept-mcqs')
            ->update([
                'slug' => DB::raw("CONCAT(slug, '-dept-mcqs')")
            ]);
    }
}
