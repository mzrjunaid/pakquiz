<?php

namespace App\Http\Resources\Frontend\Subject;

use App\Http\Resources\TopicResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    static public $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'topics' => TopicResource::collection($this->whenLoaded('topics')),
            'mcqs_count' => $this->whenLoaded('mcqs', fn() => $this->mcqs->count()),
            'topics_count' => $this->whenLoaded('topics', fn() => $this->topics->count()),
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d') : null,
        ];
    }
}
