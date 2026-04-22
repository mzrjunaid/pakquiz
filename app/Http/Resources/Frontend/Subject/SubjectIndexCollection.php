<?php

namespace App\Http\Resources\Frontend\Subject;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SubjectIndexCollection extends ResourceCollection
{
    public $collects = SubjectIndexResource::class; // wraps each MCQ in your resource

    public function toArray($request = null)
    {
        $request = $request ?? request();
        return $this->collection->map(fn($subject) => SubjectIndexResource::make($subject))->toArray();
    }


    public function toItemListSchema(?string $parentType = null, ?string $parentName = null, ?string $parentUrl = null): array
    {

        $currentPage = $this->currentPage();
        $perPage = $this->perPage();

        $items = $this->collection->map(function ($subject, $index) use ($currentPage, $perPage) {
            return [
            '@type' => 'ListItem',
            'position' => ($index + 1) + (($currentPage - 1) * $perPage),
            'url' => route('public.subject.show', ['subject' => $subject->slug]),
            'name' => $subject->name,
            'datePublished' => $subject->created_at ? $subject->created_at->toIso8601String() : null,
            ];
        })->toArray();


        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $parentName ? "{$parentName} Subjects" : "All Subjects",
            'description' => $parentType && $parentName
            ? "Complete list of Subjects for {$parentType}: {$parentName}"
            : "Complete list of Subjects for various exams",
            'url' => request()->fullUrl(),
            'numberOfItems' => $this->total(),
            'itemListElement' => $items,
        ];
    }
}
