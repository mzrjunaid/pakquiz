<?php

namespace App\Http\Resources\Public\Subject;

use App\Http\Resources\Public\TagResource;
use App\Http\Resources\TopicResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
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
            'id'         => $this->id,
            'name'       => $this->name,
            'slug'       => $this->slug,
            'description' => $this->description,
            'created_by' => [
                'id'   => $this->createdBy?->id,
                'name' => $this->createdBy?->name,
            ],
            'topics'     => TopicResource::collection($this->whenLoaded('topics')),
            'created_at' =>  $this->created_at ? $this->created_at->format('Y-m-d') : null,
            'updated_at' =>  $this->updated_at ? $this->updated_at->format('Y-m-d') : null,
        ];
    }
}
