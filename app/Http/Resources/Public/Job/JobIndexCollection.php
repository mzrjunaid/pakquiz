<?php

namespace App\Http\Resources\Public\Job;

use Illuminate\Http\Resources\Json\ResourceCollection;

class JobIndexCollection extends ResourceCollection
{
    public $collects = JobIndexResource::class; // wraps each MCQ in your resource

    public function toArray($request = null)
    {
        $request = $request ?? request();
        return $this->collection->map(fn($job) => JobIndexResource::make($job))->toArray();
    }


    public function toItemListSchema(?string $parentType = null, ?string $parentName = null, ?string $parentUrl = null): array|null
    {

        if ($this->isEmpty()) {
            return null;
        }

        $currentPage = $this->currentPage();
        $perPage = $this->perPage();

        $items = $this->collection->map(function ($job, $index) use ($currentPage, $perPage) {
            return [
                '@type' => 'ListItem',
                'position' => ($index + 1) + (($currentPage - 1) * $perPage),
                'url' => route('public.jobs.show', ['job' => $job->slug]),
                'name' => $job->title,
                'datePublished' => $job->created_at?->toIso8601String(),
            ];
        })->toArray();


        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $parentName ? "{$parentName} Jobs" : "All Jobs",
            'description' => $parentType && $parentName
                ? "Complete list of Jobs for {$parentType}: {$parentName}"
                : "Complete list of Jobs for various departments",
            'url' => url(request()->path()),
            'numberOfItems' => count($items),
            'itemListElement' => $items,
            "mainEntityOfPage" => [
                "@type" => "CollectionPage",
                "@id" => url(request()->path()),
                "headline" => $parentName ? "{$parentName} Jobs" : "All Jobs",
                "description" => $parentType && $parentName
                    ? "Complete list of Jobs for {$parentType}: {$parentName}"
                    : "Complete list of Jobs for various departments",
                "image" => asset('images/og-image.png'),
                "datePublished" => $this->collection->first()?->created_at?->toIso8601String(),
                "dateModified" => $this->collection->last()?->created_at?->toIso8601String(),
            ]
        ];
    }
}
