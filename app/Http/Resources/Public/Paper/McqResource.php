<?php

namespace App\Http\Resources\Public\Paper;

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
            'question' => $this->question,
            'slug'     => $this->slug,

            // Relations (only when loaded)
            'subject' => $this->whenLoaded('subject', fn() => [
                'name' => $this->subject->name,
                'slug' => $this->subject->slug,
            ]),

            'topic' => $this->whenLoaded('topic', fn() => [
                'name' => $this->topic->name,
                'slug' => $this->topic->slug,
            ]),

            'created_by' => $this->whenLoaded('createdBy', fn() => [
                'name' => $this->createdBy->name,
            ]),

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
            'created_at' =>   Carbon::parse($this->created_at)->format('d-m-Y')
        ];
    }
}
