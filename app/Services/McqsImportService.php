<?php

namespace App\Services;

use App\Jobs\GenerateMcqOgImageJob;
use App\Models\Mcq;
use App\Models\McqOption;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Tag;
use App\Models\Paper;
use App\Services\Seo\Updates\McqSeoUpdate;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class McqsImportService
{
    public function importSingle(array $data, int $createdBy = 1): ?Mcq
    {
        $mcq = DB::transaction(function () use ($data, $createdBy) {
            // 1. Deduplicate by slug
            if (!empty($data['slug']) && Mcq::where('slug', $data['slug'])->exists()) {
                return null;
            }

            // 2. Resolve relations
            $subject = Subject::firstOrCreate(
                ['slug' => $data['subject_slug'] . '-mcqs'],
                ['name' => Str::title(str_replace('-', ' ', $data['subject_slug']))],
                ['is_active' => 1]
            );

            $topic = Topic::firstOrCreate(
                ['slug' => $data['topic_slug'] . '-mcqs', 'subject_id' => $subject->id],
                ['name' => Str::title(str_replace('-', ' ', $data['topic_slug']))],
            );

            $paper = null;
            if (!empty($data['paper_slug'])) {
                $paper = Paper::firstOrCreate(
                    ['slug' => $data['paper_slug'] . '-mcqs'],
                    ['name' => Str::title(str_replace('-', ' ', $data['paper_slug']))],
                    ['is_active' => 1]
                );
            }

            // 3. Generate unique slug
            $now = now();
            $baseSlug = !empty($data['slug']) ? $data['slug'] : Str::slug($data['question']);
            $slug = $baseSlug;
            $counter = 1;
            while (Mcq::where('slug', $slug)->exists()) {
                $slug = $baseSlug . '-' . $counter++;
            }

            // 4. Create MCQ
            $mcq = Mcq::create([
                'slug'        => $slug,
                'question'    => $data['question'],
                'explanation' => $data['explanation'] ?? null,
                'difficulty'  => $data['difficulty'],
                'mcq_type'    => $data['mcq_type'],
                'subject_id'  => $subject->id,
                'topic_id'    => $topic->id,
                'paper_id'    => $paper?->id,
                'created_by'  => $createdBy,
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);

            // 5. Bulk insert options
            McqOption::insert(
                collect($data['options'])->map(fn($opt) => [
                    'mcq_id'      => $mcq->id,
                    'option_text' => $opt['option_text'],
                    'sort_order'  => $opt['sort_order'],
                    'is_correct'  => $opt['is_correct'],
                    'created_at'  => $now,
                    'updated_at'  => $now,
                ])->toArray()
            );

            // 6. Sync tags
            if (!empty($data['tags'])) {
                $tagIds = collect($data['tags'])->map(
                    fn($tagSlug) =>
                    Tag::firstOrCreate(
                        ['slug' => $tagSlug],
                        ['name' => Str::title(str_replace('-', ' ', $tagSlug))]
                    )->id
                );
                $mcq->tags()->sync($tagIds);
            }

            return $mcq;
        });

        // 7. Dispatch job AFTER transaction commits
        if ($mcq) {
            app(McqSeoUpdate::class)->handleSingle($mcq->id);
            GenerateMcqOgImageJob::dispatch($mcq, 'generate');
        }

        return $mcq;
    }
}
