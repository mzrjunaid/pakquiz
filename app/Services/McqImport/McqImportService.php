<?php

namespace App\Services\McqImport;

use App\Jobs\GenerateMcqOgImageJob;
use App\Models\Mcq;
use App\Models\McqOption;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Tag;
use App\Models\Topic;
use App\Services\Seo\Updates\McqSeoUpdate;
use App\Services\Seo\Updates\PaperSeoUpdate;
use App\Services\Seo\Updates\SubjectSeoUpdate;
use App\Services\Seo\Updates\TopicSeoUpdate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class McqImportService
{
    public function importSingle(array $data): ?Mcq
    {

        $mcq = DB::transaction(function () use ($data) {

            if (Mcq::where('slug', $data['slug'])->exists()) {
                return null;
            }

            $data = $this->normalize($data);

            $subject = $this->resolveSubject($data);
            $topic = $this->resolveTopic($data, $subject);
            $paper = $this->resolvePaper($data, $subject);

            $mcq = $this->createMcq($data, $subject, $topic, $paper);

            $this->insertOptions($mcq, $data['options']);
            $this->syncTags($mcq, $data['tags']);

            return $mcq;
        });

        $this->afterCreate($mcq);

        Cache::forget('home_page_data');

        return $mcq;
    }

    private function normalize(array $data): array
    {
        $question = trim((string) ($data['question'] ?? ''));
        $subjectSlug = $this->normalizeSlug($data['subject_slug'] ?? null);
        $topicSlug = $this->normalizeSlug($data['topic_slug'] ?? null);

        if ($question === '') {
            throw ValidationException::withMessages([
                'question' => 'Question is required.',
            ]);
        }

        if ($subjectSlug === null) {
            throw ValidationException::withMessages([
                'subject_slug' => 'Subject slug is required.',
            ]);
        }

        if ($topicSlug === null) {
            throw ValidationException::withMessages([
                'topic_slug' => 'Topic slug is required.',
            ]);
        }

        $options = collect($data['options'] ?? [])
            ->map(fn($option, $index) => $this->normalizeOption($option, $index))
            ->filter()
            ->values()
            ->all();

        if ($options === []) {
            throw ValidationException::withMessages([
                'options' => 'At least one option is required.',
            ]);
        }

        if (!collect($options)->contains(fn(array $option) => $option['is_correct'])) {
            throw ValidationException::withMessages([
                'options' => 'At least one correct option is required.',
            ]);
        }

        return [
            'question' => $question,
            'slug' => $this->uniqueMcqSlug($data['slug'] ?? null, $question),
            'difficulty' => $this->normalizeDifficulty($data['difficulty'] ?? null),
            'mcq_type' => $this->normalizeMcqType($data['mcq_type'] ?? null),
            'subject_slug' => $subjectSlug,
            'topic_slug' => $topicSlug,
            'paper_slug' => $this->normalizeSlug($data['paper_slug'] ?? null),
            'created_by' => $this->resolveCreatedBy($data['created_by'] ?? null),
            'explanation' => $this->nullableString($data['explanation'] ?? null),
            'tags' => $this->normalizeTags($data['tags'] ?? []),
            'options' => $options,
            'paper' => is_array($data['paper'] ?? null) ? $data['paper'] : null,
        ];
    }

    private function resolveSubject(array $data): Subject
    {
        $slug = $data['subject_slug'] . '-mcqs';
        $name = $this->displayNameFromSlug($data['subject_slug']);

        if ($data['subject_slug'] === 'current-affairs') {
            $name .= ' - ' . now()->year;
        }

        return Subject::updateOrCreate(
            ['slug' => $slug],
            [
                'name' => $name,
                'is_active' => true,
                'created_by' => $data['created_by'],
            ],
        );
    }

    private function resolveTopic(array $data, Subject $subject): Topic
    {
        $slug = $data['topic_slug'] . '-mcqs';
        $name = $this->displayNameFromSlug($data['topic_slug']);

        if ($data['subject_slug'] === 'current-affairs') {
            $name .= ' - ' . now()->year;
        }

        return Topic::updateOrCreate(
            ['slug' => $slug],
            [
                'name' => $name,
                'subject_id' => $subject->id,
                'created_by' => $data['created_by'],
            ],
        );
    }

    private function resolvePaper(array $data, Subject $subject): ?Paper
    {
        if (blank($data['paper_slug'])) {
            return null;
        }

        $slug = $data['paper_slug'] . '-mcqs';

        $existing = Paper::where('slug', $slug)->first();
        if ($existing) {
            return $existing;
        }

        $paperData = $data['paper'] ?? null;
        if (!is_array($paperData)) {
            return null;
        }

        $departmentId = $paperData['department_id'] ?? null;
        $testingServiceId = $paperData['testing_service_id'] ?? null;

        if (!$departmentId || !$testingServiceId) {
            return null;
        }

        return Paper::create([
            'name' => $this->displayNameFromSlug($data['paper_slug']),
            'slug' => $slug,
            'is_active' => true,
            'department_id' => $departmentId,
            'testing_service_id' => $testingServiceId,
            'subject_id' => $subject->id,
            'created_by' => $data['created_by'],
            'type' => 'official',
            'paper_year' => isset($paperData['paper_year']) ? (int) $paperData['paper_year'] : null,
            'schedule_at' => $paperData['schedule_at'] ?? null,
            'description' => $this->nullableString($paperData['description'] ?? null),
        ]);
    }

    private function createMcq(array $data, Subject $subject, Topic $topic, ?Paper $paper): Mcq
    {
        return Mcq::create([
            'slug' => $data['slug'],
            'question' => $data['question'],
            'explanation' => $data['explanation'],
            'difficulty' => $data['difficulty'],
            'mcq_type' => $data['mcq_type'],
            'subject_id' => $subject->id,
            'topic_id' => $topic->id,
            'paper_id' => $paper?->id,
            'created_by' => $data['created_by'],
        ]);
    }

    private function insertOptions(Mcq $mcq, array $options): void
    {
        $now = now();

        McqOption::insert(
            collect($options)
                ->map(fn(array $option) => [
                    'mcq_id' => $mcq->id,
                    'option_text' => $option['option_text'],
                    'sort_order' => $option['sort_order'],
                    'is_correct' => $option['is_correct'],
                    'created_at' => $now,
                    'updated_at' => $now,
                ])
                ->all(),
        );
    }

    private function syncTags(Mcq $mcq, array $tags): void
    {
        if ($tags === []) {
            return;
        }

        $tagIds = collect($tags)
            ->map(function (string $rawTag) {
                $tagName = Str::of($rawTag)
                    ->replace(['-', '_'], ' ')
                    ->squish()
                    ->title()
                    ->toString();

                return Tag::firstOrCreate(
                    ['name' => $tagName],
                    ['slug' => Str::slug($tagName)],
                )->id;
            })
            ->unique()
            ->values();

        $mcq->tags()->sync($tagIds);
    }

    private function afterCreate(?Mcq $mcq): void
    {
        if (!$mcq) {
            return;
        }

        $mcq->loadMissing(['subject', 'topic', 'paper']);

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

        if ($mcq->subject?->slug === 'current-affairs-mcqs') {
            GenerateMcqOgImageJob::dispatch($mcq, 'generate');
        }
    }

    private function normalizeOption(mixed $option, int $index): ?array
    {
        if (!is_array($option)) {
            return null;
        }

        $text = trim((string) ($option['option_text'] ?? $option['text'] ?? ''));
        if ($text === '') {
            return null;
        }

        $sortOrder = $option['sort_order'] ?? ($index + 1);

        return [
            'option_text' => $text,
            'is_correct' => filter_var($option['is_correct'] ?? false, FILTER_VALIDATE_BOOL),
            'sort_order' => (int) $sortOrder,
        ];
    }

    private function normalizeDifficulty(mixed $difficulty): string
    {
        return match (Str::lower(trim((string) $difficulty))) {
            'easy' => 'easy',
            'medium' => 'medium',
            'hard' => 'hard',
            default => 'easy',
        };
    }

    private function normalizeMcqType(mixed $mcqType): string
    {
        return match (Str::lower(trim((string) $mcqType))) {
            'single' => 'single',
            'multiple' => 'multiple',
            'true_false', 'true-false', 'true false' => 'true_false',
            default => 'single',
        };
    }

    private function normalizeTags(mixed $tags): array
    {
        if (is_string($tags)) {
            $tags = explode(',', $tags);
        }

        if (!is_array($tags)) {
            return [];
        }

        return collect($tags)
            ->map(fn($tag) => trim((string) $tag))
            ->filter()
            ->unique()
            ->values()
            ->all();
    }

    private function normalizeSlug(mixed $value): ?string
    {
        $value = trim((string) $value);

        if ($value === '' || Str::lower($value) === 'null') {
            return null;
        }

        return Str::slug($value);
    }

    private function nullableString(mixed $value): ?string
    {
        $value = trim((string) $value);

        return $value === '' ? null : $value;
    }

    private function uniqueMcqSlug(mixed $slug, string $question): string
    {
        $baseSlug = $this->normalizeSlug($slug) ?? Str::slug($question);
        $candidate = $baseSlug;
        $counter = 1;

        while (Mcq::where('slug', $candidate)->exists()) {
            $candidate = $baseSlug . '-' . $counter;
            $counter++;
        }

        return $candidate;
    }

    private function resolveCreatedBy(mixed $createdBy): int
    {
        $createdBy = is_numeric($createdBy) ? (int) $createdBy : null;

        return $createdBy ?: (Auth::id() ?? 1);
    }

    private function displayNameFromSlug(string $slug): string
    {
        return Str::of($slug)
            ->replace('-', ' ')
            ->title()
            ->toString();
    }
}
