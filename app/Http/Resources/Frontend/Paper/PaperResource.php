<?php

namespace App\Http\Resources\Frontend\Paper;

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

    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' =>  $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'schedule_at' => $this->schedule_at ?  Carbon::parse($this->schedule_at)->format('d-m-Y') : null,
            'year' => $this->paper_year,
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
                'short' => $this->testingService?->short_name,
                'slug' => $this->testingService?->slug,
            ],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
