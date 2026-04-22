<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeoMetaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $pageType = class_basename($this->page_type);

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'keywords' => $this->keywords,
            'og_title' => $this->og_title,
            'og_description' => $this->og_description,
            'og_image' => $this->og_image,
            'page_type' => $pageType,
            'page_id' => $this->page_id,
            'page_name' => $this->resolvePageName(),
            'page_label' => $this->resolvePageName() ?: "{$pageType} #{$this->page_id}",
            'created_at' => $this->created_at?->toDateTimeString(),
            'updated_at' => $this->updated_at?->toDateTimeString(),
        ];
    }

    /**
     * Dynamically resolve a human-readable name for the polymorphic page.
     *
     * @return string|null
     */
    protected function resolvePageName(): ?string
    {
        if (! $this->page) {
            return null;
        }

        return match (true) {
            isset($this->page->name) => $this->page->name,
            isset($this->page->title) => $this->page->title,
            isset($this->page->question) => str($this->page->question)->limit(90)->value(),
            isset($this->page->key) => $this->page->key,
            default => class_basename($this->page), // fallback if no readable field
        };
    }
}
