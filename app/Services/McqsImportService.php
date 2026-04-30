<?php

namespace App\Services;

use App\Console\Commands\GenerateSitemap;
use App\Jobs\GenerateMcqOgImageJob;
use App\Models\Mcq;
use App\Models\McqOption;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Tag;
use App\Models\Paper;
use App\Services\Seo\Updates\McqSeoUpdate;
use App\Services\Seo\Updates\PaperSeoUpdate;
use App\Services\Seo\Updates\SubjectSeoUpdate;
use App\Services\Seo\Updates\TopicSeoUpdate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class McqsImportService
{
    public function importSingle(array $data): ?Mcq
    {
        $mcq = DB::transaction(function () use ($data) {

            $createdBy = Auth::user()?->id ?? 1;

            $data['difficulty'] = str($data['difficulty'])->lower()->trim()->toString();
            $data['mcq_type'] = str($data['mcq_type'])->lower()->trim()->toString();

            $data['difficulty'] = match ($data['difficulty']) {
                'easy' => 'easy',
                'medium' => 'medium',
                'hard' => 'hard',
                default => 'easy',
            };

            $data['mcq_type'] = match ($data['mcq_type']) {
                'single' => 'single',
                'multiple' => 'multiple',
                default => 'single',
            };

            // 1. Deduplicate by slug
            if (!empty($data['slug']) && Mcq::where('slug', $data['slug'])->exists()) {
                return null;
            }

            // 2. Resolve relations
            if ($data['subject_slug'] == 'current-affairs') {
                $subject = Subject::updateOrCreate(
                    ['slug' => $data['subject_slug'] . '-mcqs'],
                    ['name' => Str::title(str_replace('-', ' ', $data['subject_slug'])) . ' - ' . date('Y'), 'is_active' => 1],
                );
            } else {
                $subject = Subject::updateOrCreate(
                    ['slug' => $data['subject_slug'] . '-mcqs'],
                    ['name' => Str::title(str_replace('-', ' ', $data['subject_slug'])), 'is_active' => 1],
                );
            }

            if ($data['subject_slug'] == 'current-affairs') {
                $topic = Topic::updateOrCreate(
                    ['slug' => $data['topic_slug'] . '-mcqs', 'subject_id' => $subject->id],
                    ['name' => Str::title(str_replace('-', ' ', $data['topic_slug'])) . ' - ' . date('Y'), 'is_active' => 1],
                );
            } else {
                $topic = Topic::updateOrCreate(
                    ['slug' => $data['topic_slug'] . '-mcqs', 'subject_id' => $subject->id],
                    ['name' => Str::title(str_replace('-', ' ', $data['topic_slug'])), 'is_active' => 1],
                );
            }

            $paper = null;
            if (!empty($data['paper_slug'])) {
                $paper = Paper::firstOrCreate(
                    ['slug' => $data['paper_slug'] . '-mcqs'],
                    ['name' => Str::title(str_replace('-', ' ', $data['paper_slug'])), 'is_active' => 1],
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
                'slug' => $slug,
                'question' => $data['question'],
                'explanation' => $data['explanation'] ?? null,
                'difficulty' => str($data['difficulty'])->lower()->trim()->toString(),
                'mcq_type' => str($data['mcq_type'])->lower()->trim()->toString(),
                'subject_id' => $subject->id,
                'topic_id' => $topic->id,
                'paper_id' => $paper?->id,
                'created_by' => $createdBy,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // 5. Bulk insert options
            McqOption::insert(
                collect($data['options'])->map(fn($opt) => [
                    'mcq_id' => $mcq->id,
                    'option_text' => $opt['option_text'],
                    'sort_order' => $opt['sort_order'],
                    'is_correct' => $opt['is_correct'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ])->toArray()
            );

            // 6. Sync tags
            if (!empty($data['tags'])) {
                $tagIds = collect($data['tags'])
                    ->filter()
                    ->map(function ($rawTag) {
                        $tagName = Str::of($rawTag)
                            ->replace(['-', '_'], ' ')
                            ->squish()
                            ->title()
                            ->toString();

                        return [
                            'name' => $tagName,
                            'slug' => Str::slug($tagName),
                        ];
                    })
                    ->unique('name')
                    ->map(function ($tag) {
                        return Tag::firstOrCreate(
                            ['name' => $tag['name']],
                            ['slug' => $tag['slug']]
                        )->id;
                    });

                $mcq->tags()->sync($tagIds);
            }

            return $mcq;
        });


        // 7. Dispatch job AFTER transaction commits
        if ($mcq) {
            if ($mcq->subject) {
                app(SubjectSeoUpdate::class)->handleSingle($mcq->subject->id);
            }
            if ($mcq->topic) {
                app(TopicSeoUpdate::class)->handleSingle($mcq->topic->id);
            }
            if ($mcq->paper) {
                app(PaperSeoUpdate::class)->handleSingle($mcq->paper->id);
            }
            app(McqSeoUpdate::class)->handleSingle($mcq->id);
            if ($mcq->subject_id == 39) {
                GenerateMcqOgImageJob::dispatch($mcq, 'generate');
            }
        }



        Cache::forget('home_page_data');
        return $mcq;
    }
}
