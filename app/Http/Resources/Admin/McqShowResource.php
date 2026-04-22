<?php

namespace App\Http\Resources\Admin;

use App\Http\Resources\PaperResource;
use App\Http\Resources\Frontend\Mcq\OptionsResource;
use App\Http\Resources\Frontend\TagResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class McqShowResource extends JsonResource
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
            'slug' => $this->slug,
            'question' => $this->question,
            'explanation' => $this->explanation,
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
            'type' => $this->mcq_type,
            'difficulty' => $this->difficulty,
            'options' =>  OptionsResource::collection($this->options),
            'tags' => TagResource::collection($this->tags),
            'created_at' => $this->created_at ? $this->created_at->toDateString() : 'null   ',
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
