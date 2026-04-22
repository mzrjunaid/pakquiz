<?php

namespace App\Http\Resources\Frontend\Paper;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class McqResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public function toArray(Request $request): array
    {
        return [
            'id'       => $this->id,
            'slug'     => $this->slug,

            'question' => $this->question,
            'explanation' => $this->explanation,

            // Relations (only when loaded)
            'subject' => $this->whenLoaded('subject', fn() => [
                'name' => $this->subject->name,
                'slug' => $this->subject->slug,
            ]),

            'topic' => $this->whenLoaded('topic', fn() => [
                'name' => $this->topic->name,
                'slug' => $this->topic->slug,
            ]),


            'mcq_type' => $this->mcq_type,
            'difficulty' => $this->difficulty,

            'options' => $this->whenLoaded(
                'options',
                fn() =>
                $this->options->map(fn($option) => [
                    'id' => $option->id,
                    'option_text' => $option->option_text,
                    'is_correct' => $option->is_correct,
                ])
            ),

            // Meta
            'tags' => $this->whenLoaded(
                'tags',
                fn() =>
                $this->tags->map(fn($tag) => [
                    'name' => $tag->name,
                    'slug' => $tag->slug,
                ])
            ),

            // Timestamps (ISO = best for frontend)
            'created_at' =>   Carbon::parse($this->created_at)->format('d-m-Y'),
            'created_by' => $this->whenLoaded('createdBy', fn() => [
                'name' => $this->createdBy->name,
            ]),
        ];
    }
}
