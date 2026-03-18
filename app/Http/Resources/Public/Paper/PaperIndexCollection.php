<?php

namespace App\Http\Resources\Public\Paper;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PaperIndexCollection extends ResourceCollection
{
    public $collects = PaperIndexResource::class; // wraps each MCQ in your resource

    public function toArray($request = null)
    {
        $request = $request ?? request();
        return $this->collection->map(fn($paper) => PaperIndexResource::make($paper))->toArray();
    }


    public function toItemListSchema(?string $parentType = null, ?string $parentName = null, ?string $parentUrl = null): array|null
    {

        if ($this->isEmpty()) {
            return null;
        }

        $currentPage = $this->currentPage();
        $perPage = $this->perPage();

        $items = $this->collection->map(function ($paper, $index) use ($currentPage, $perPage) {
            return [
                '@type' => 'ListItem',
                'position' => ($index + 1) + (($currentPage - 1) * $perPage),
                'url' => route('public.papers.show', ['paper' => $paper->slug]),
                'name' => $paper->name,
                'datePublished' => $paper->created_at?->toIso8601String(),
            ];
        })->toArray();


        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $parentName ? "{$parentName} Papers" : "All Papers",
            'description' => $parentType && $parentName
                ? "Complete list of Papers for {$parentType}: {$parentName}"
                : "Complete list of Papers for various exams",
            'url' => url(request()->path()),
            'numberOfItems' => count($items),
            'itemListElement' => $items,
            "mainEntityOfPage" => [
                "@type" => "CollectionPage",
                "@id" => url(request()->path()),
                "headline" => $parentName ? "{$parentName} Papers" : "All Papers",
                "description" => $parentType && $parentName
                    ? "Complete list of Papers for {$parentType}: {$parentName}"
                    : "Complete list of Papers for various exams",
                "image" => asset('images/og-image.png'),
                "datePublished" => $this->collection->first()?->created_at?->toIso8601String(),
                "dateModified" => $this->collection->last()?->created_at?->toIso8601String(),
            ]
        ];
    }
}
