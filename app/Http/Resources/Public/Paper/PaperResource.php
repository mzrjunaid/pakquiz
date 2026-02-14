<?php

namespace App\Http\Resources\Public\Paper;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class PaperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' =>  $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'created_by' => [
                'id'   => $this->createdBy?->id,
                'name' => $this->createdBy?->name,
            ],
            'schedule_at' => Carbon::parse($this->schedule_at)->format('d-m-Y'),
            'year' => $this->paper_year,
            'is_active' => $this->is_active,
            'department' => $this->whenLoaded('department'),
            'subject' => [
                'name' => $this->subject?->name,
                'slug' => $this->subject?->slug,
            ],
            'testing_service' => [
                'name' => $this->testingService?->name,
                'slug' => $this->testingService?->slug,
            ],
            'tags'       => $this->whenLoaded('tags'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
