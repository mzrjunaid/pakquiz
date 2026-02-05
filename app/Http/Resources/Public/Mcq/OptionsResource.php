<?php

namespace App\Http\Resources\Public\Mcq;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OptionsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'option' => $this->option_text,
            'is_correct' => $this->is_correct,
        ];
    }
}
