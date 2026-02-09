<?php

namespace App\Http\Resources\Public\Demo;

use App\Http\Resources\Public\Mcq\OptionsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class McqDemoResource extends JsonResource
{

    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'question' => $this->question,
            'slug' => $this->slug,
            'explanation' => $this->explanation,

            'subject' => [
                'id' => $this->subject->id,
                'name' => $this->subject->name,
            ],

            'topic' => $this->topic
                ? ['id' => $this->topic->id, 'name' => $this->topic->name]
                : null,

            'tags' => $this->tags->map(fn($tag) => [
                'id' => $tag->id,
                'name' => $tag->name,
                'slug' => $tag->slug,
            ]),

            'options' => $this->options->map(fn($option) => [
                'id' => $option->id,
                'text' => $option->option_text,
                'correct' => $option->is_correct,
                'sort' => $option->sort_order
            ]),
        ];
    }
}
