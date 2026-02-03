<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tag;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\TestingService;

class TaggablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = Tag::all();

        if ($tags->isEmpty()) {
            $this->command->info('No tags found in the tags table. Please create some tags first.');
            return;
        }

        // Attach tags to MCQs
        Mcq::all()->each(function ($mcq) use ($tags) {
            // Attach 2-3 random tags
            $mcq->tags()->sync($tags->random(min(3, $tags->count()))->pluck('id')->toArray());
        });

        // Attach tags to Papers
        Paper::all()->each(function ($paper) use ($tags) {
            $paper->tags()->sync($tags->random(min(2, $tags->count()))->pluck('id')->toArray());
        });

        // Attach tags to Subjects
        Subject::all()->each(function ($subject) use ($tags) {
            $subject->tags()->sync($tags->random(min(2, $tags->count()))->pluck('id')->toArray());
        });

        // Attach tags to Topics
        Topic::all()->each(function ($topic) use ($tags) {
            $topic->tags()->sync($tags->random(min(2, $tags->count()))->pluck('id')->toArray());
        });

        // Attach tags to TestingServices
        TestingService::all()->each(function ($service) use ($tags) {
            $service->tags()->sync($tags->random(min(2, $tags->count()))->pluck('id')->toArray());
        });

        $this->command->info('Tags attached to all models successfully!');
    }
}
