<?php

namespace App\Http\Resources\Public\Mcq;

use App\Http\Resources\Public\TagResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class McqIndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = null;
    public function toArray(Request $request)
    {
        return [
            'question' => $this->question,
            'slug' => $this->slug,
            'options' =>  OptionsResource::collection($this->options),
            'explanation' => $this->explanation,
            'paper' =>  $this->paper ? [
                'name' => $this->paper?->name,
                'slug' => $this->paper?->slug,
                'description' => $this->paper?->description,
                'year' => $this->paper?->paper_year,
                'testing_service' => $this->paper?->testingService ? [
                    'name' => $this->paper->testingService?->name,
                    'short' => $this->paper->testingService?->short_name,
                    'slug' => $this->paper->testingService?->slug,
                ] : null,
                'department' => $this->paper?->department ? [
                    'name' => $this->paper->department?->name,
                    'slug' => $this->paper->department?->slug,
                ] : null
            ] : null,
            'subject' => $this->subject ?  [
                'name' => $this->subject?->name,
                'slug' => $this->subject?->slug,
            ] : null,
            'topic' => $this->topic ?  [
                'name' => $this->topic?->name,
                'slug' => $this->topic?->slug,
            ] : null,
            'tags'     => TagResource::collection($this->tags),
            'difficulty' => $this->difficulty,
            'mcq_type' => $this->mcq_type,
            'created_by' => [
                'id'   => $this->createdBy?->id,
                'name' => $this->createdBy?->name,
            ],
            'created_at' => Carbon::parse($this->created_at)->format('d-m-Y'),
        ];
    }
}
