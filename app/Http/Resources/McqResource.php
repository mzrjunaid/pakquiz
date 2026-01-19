<?php

namespace App\Http\Resources;

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
            'id' => $this->id,
            'question' => $this->question,
            'slug' => $this->slug,
            'schedule_at' => Carbon::parse($this->schedule_at)->format('d-m-Y'),
            'is_active' => $this->is_active,
            'paper' => new PaperResource($this->paper),
            'subject' => [
                'name' => $this->subject?->name,
                'slug' => $this->subject?->slug,
            ],
            'topic' => [
                'name' => $this->topic?->name,
                'slug' => $this->topic?->slug,
            ],
            'created_by' => [
                'id'   => $this->createdBy?->id,
                'name' => $this->createdBy?->name,
            ],
            'created_at' => Carbon::parse($this->created_at)->format('d-m-Y H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d-m-Y H:i:s'),
            'deleted_at' => Carbon::parse($this->deleted_at)->format('d-m-Y H:i:s'),
        ];
    }
}
