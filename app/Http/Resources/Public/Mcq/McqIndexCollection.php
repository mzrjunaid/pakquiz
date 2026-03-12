<?php

namespace App\Http\Resources\Public\Mcq;

use Illuminate\Http\Resources\Json\ResourceCollection;

class McqIndexCollection extends ResourceCollection
{
    public $collects = McqIndexResource::class; // wraps each MCQ in your resource



    public function toArray($request = null)
    {
        $request = $request ?? request();
        return $this->collection->map(fn($mcq) => new McqIndexResource($mcq))->toArray();
    }

    public function toItemListSchema(?string $parentType = null, ?string $parentName = null, ?string $parentUrl = null): array
    {

        $currentPage = $this->currentPage();
        $perPage = $this->perPage();

        $items = $this->collection->map(function ($mcq, $index) use ($currentPage, $perPage) {
            return [
                '@type' => 'ListItem',
                'position' => ($index + 1) + (($currentPage - 1) * $perPage),
                'url' => route('public.mcqs.show', ['mcq' => $mcq->slug]),
                'name' => $mcq->question,
                'datePublished' => $mcq->created_at->toIso8601String(),
            ];
        })->toArray();

        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $parentName ? "{$parentName} MCQs" : "All MCQs",
            'description' => $parentType && $parentName
                ? "Complete list of MCQs for {$parentType}: {$parentName}"
                : "Complete list of MCQs for various exams",
            'url' => $parentUrl ?? url()->current(),
            'numberOfItems' => count($items),
            'itemListElement' => $items,
        ];
    }
}
