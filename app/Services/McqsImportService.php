<?php

namespace App\Services;

use App\Models\Mcq;
use App\Models\McqOption;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Tag;
use App\Models\User;
use App\Models\Paper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class McqsImportService
{
    public function importSingle(array $data): ?Mcq
    {
        return DB::transaction(function () use ($data) {

            // 1️⃣ Check if MCQ already exists by slug → skip if exists
        if (!empty($data['slug']) && Mcq::where('slug', $data['slug'])->exists()) {
            return null; // Skip duplicate
        }

            // 2️⃣ Resolve relations
            $subject = Subject::firstOrCreate(
                ['slug' => $data['subject_slug']],
                ['name' => Str::title(str_replace('-', ' ', $data['subject_slug']))]
            );



            $topic = Topic::firstOrCreate(
                ['slug' => $data['topic_slug']],
                [
                    'name' => Str::title(str_replace('-', ' ', $data['topic_slug'])),
                    'subject_id' => $subject->id,
                ]
            );

            $paper = null;
            if (!empty($data['paper_slug'])) {
                $paper = Paper::firstOrCreate(
                    ['slug' => $data['paper_slug']],
                    ['name' => Str::title(str_replace('-', ' ', $data['paper_slug']))]
                );
            }

            $user = User::findOrFail(1);

// Generate slug safely
$baseSlug = !empty($data['slug']) ? $data['slug'] : Str::slug($data['question']);
$slug = $baseSlug;
$counter = 1;

// Ensure slug is unique
while (Mcq::where('slug', $slug)->exists()) {
    $slug = $baseSlug . '-' . $counter++;
}

$mcq = [
                'slug' => $slug,
                'question' => $data['question'],
                'explanation' => $data['explanation'] ?? null,
                'difficulty' => $data['difficulty'],
                'mcq_type' => $data['mcq_type'],
                'subject_id' => $subject->id,
                'topic_id' => $topic->id,
                'paper_id' => $paper?->id,
                'created_by' => $user->id,
                'created_at' => now(),
];

            // 3️⃣ Create MCQ
            $mcq = Mcq::create($mcq);

            // 4️⃣ Insert Options (bulk)
            $options = collect($data['options'])->map(function ($option) use ($mcq) {
                return [
                    'mcq_id' => $mcq->id,
                    'option_text' => $option['option_text'],
                    'sort_order' => $option['sort_order'],
                    'is_correct' => $option['is_correct'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            });

            McqOption::insert($options->toArray());

if (!empty($data['tags'])) {
    $tagIds = collect($data['tags'])->map(function ($tagSlug) {
        return Tag::firstOrCreate(
            ['slug' => $tagSlug],
            ['name' => Str::title(str_replace('-', ' ', $tagSlug))]
        )->id;
    });

    $mcq->tags()->sync($tagIds);
}

            return $mcq;
        });
    }
}