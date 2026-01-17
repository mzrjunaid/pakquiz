<?php

namespace App\Http\Resources;

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
            'is_active' => $this->is_active,
            'department' => [
                'name' => $this->department?->name,
                'slug' => $this->department?->slug,
            ],
            'subject' => [
                'name' => $this->subject?->name,
                'slug' => $this->subject?->slug,
            ],
            'testing_service' => [
                'name' => $this->testingService?->name,
                'slug' => $this->testingService?->slug,
            ],
            'created_at' => Carbon::parse($this->created_at)->format('d-m-Y H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d-m-Y H:i:s'),
            'deleted_at' => Carbon::parse($this->deleted_at)->format('d-m-Y H:i:s'),
        ];
    }
}
