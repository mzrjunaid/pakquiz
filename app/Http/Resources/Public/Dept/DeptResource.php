<?php

namespace App\Http\Resources\Public\Dept;

use App\Http\Resources\Public\Paper\PaperResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DeptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    // public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'type' => $this->type,
            'papers' => $this->whenLoaded('papers', function () {
                return $this->papers->map(function ($paper) {
                    return [
                        'name' => $paper->name,
                        'slug' => $paper->slug,
                    ];
                });
            }),
            'created_at' => $this->created_at?->toDateString(),
            'updated_at' => $this->updated_at?->toDateString(),
        ];
    }
}
