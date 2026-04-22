<?php

namespace App\Http\Resources\Frontend\Job;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobIndexResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'department_id' => $this->department_id,
            'testing_service_id' => $this->testing_service_id,

            'total_posts' => $this->total_posts,
            'domicile' => $this->domicile,

            'ad_number' => $this->ad_number,
            'closing_date' => $this->closing_date,

            'description' => $this->description,
            'created_at' => $this->created_at,
        ];
    }
}
