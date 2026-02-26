<?php

namespace App\Http\Resources\Public\Mcq;

use App\Http\Resources\Public\Paper\PaperResource;
use App\Http\Resources\Public\TagResource;
use App\Support\Seo\SchemaBuilder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;

class McqShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = null;
    public function toArray(Request $request)
    {
        return [
            'question' => $this->question,
            'slug' => $this->slug,
            'options' =>  OptionsResource::collection($this->options),
            'explanation' => $this->explanation,
            'paper' =>  $this->paper ? [
                'name' => $this->paper?->name,
                'slug' => $this->paper?->slug,
                'description' => $this->paper?->description,
                'year' => $this->paper?->paper_year,
                'testing_service' => $this->paper?->testingService ? [
                    'name' => $this->paper->testingService?->name,
                    'short' => $this->paper->testingService?->short_name,
                    'slug' => $this->paper->testingService?->slug,
                ] : null,
                'department' => $this->paper?->department ? [
                    'name' => $this->paper->department?->name,
                    'slug' => $this->paper->department?->slug,
                ] : null
            ] : null,
            'subject' => $this->subject ?  [
                'name' => $this->subject?->name,
                'slug' => $this->subject?->slug,
            ] : null,
            'topic' => $this->topic ?  [
                'name' => $this->topic?->name,
                'slug' => $this->topic?->slug,
            ] : null,
            'tags'     => TagResource::collection($this->tags),
            'difficulty' => $this->difficulty,
            'mcq_type' => $this->mcq_type,
            'created_by' => [
                'id'   => $this->createdBy?->id,
                'name' => $this->createdBy?->name,
            ],
            'created_at' => Carbon::parse($this->created_at)->format('d-m-Y'),

            'schema' => $this->generateSchema(),
        ];
    }

    private function generateSchema(): array
    {
        $accepted = $this->options->firstWhere('is_correct', true);

        $suggested = $this->options
            ->where('is_correct', false)
            ->map(fn($opt) => [
                '@type' => 'Answer',
                'text'  => $opt->option_text,
            ])
            ->values()
            ->toArray();

        return SchemaBuilder::make('Quiz')
            ->id(route('public.mcqs.show', $this->slug))
            ->set('name', $this->question)
            ->set('description', $this->buildDescription())
            ->set('about', $this->buildAbout())
            ->set('provider', $this->buildProvider())
            ->set('hasPart', [
                '@type' => 'Question',
                'name'  => $this->question,
                'text'  => $this->question,
                'answerCount' => $this->options->count(),
                'acceptedAnswer' => $accepted ? [
                    '@type' => 'Answer',
                    'text'  => $accepted->option_text,
                ] : null,
                'suggestedAnswer' => $suggested,
            ])
            ->build();
    }

    private function buildAbout(): ?array
    {
        $segments = [];

        if ($this->subject?->name) {
            $segments[] = $this->subject->name;
        }

        if ($this->topic?->name) {
            $segments[] = $this->topic->name;
        }

        if (empty($segments)) return null;

        return [
            '@type' => 'Thing',
            'name'  => implode(' - ', $segments),
        ];
    }

    private function buildDescription(): string
    {
        $parts = [];

        if ($this->subject?->name) {
            $parts[] = "MCQ from {$this->subject->name}";
        }

        if ($this->paper?->name) {
            $paperText = "Paper: {$this->paper->name}";

            if ($this->paper?->paper_year) {
                $paperText .= " ({$this->paper->paper_year})";
            }

            $parts[] = $paperText;
        }

        if ($this->paper?->department?->name) {
            $parts[] = "Department: {$this->paper->department->name}";
        }

        if ($this->paper?->testingService?->name) {
            $parts[] = "Conducted by {$this->paper->testingService->short_name} ({$this->paper->testingService->name})";
        }

        return implode('. ', $parts) . '.';
    }

    private function buildProvider(): ?array
    {
        if (!$this->paper?->testingService?->name) {
            return null;
        }

        return [
            '@type' => 'Organization',
            'name'  => $this->paper->testingService->short_name ?? $this->paper->testingService->name,
        ];
    }
}
