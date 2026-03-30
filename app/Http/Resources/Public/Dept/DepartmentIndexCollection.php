<?php

namespace App\Http\Resources\Public\Dept;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DepartmentIndexCollection extends ResourceCollection
{
    public $collects = DepartmentIndexResource::class; // wraps each MCQ in your resource

    public function toArray($request = null)
    {
        $request = $request ?? request();
        return $this->collection->map(fn($department) => DepartmentIndexResource::make($department))->toArray();
    }


    public function toItemListSchema(?string $parentType = null, ?string $parentName = null, ?string $parentUrl = null): array|null
    {

        if ($this->isEmpty()) {
            return null;
        }

        $currentPage = $this->currentPage();
        $perPage = $this->perPage();

        $items = $this->collection->map(function ($department, $index) use ($currentPage, $perPage) {
            return [
                '@type' => 'ListItem',
                'position' => ($index + 1) + (($currentPage - 1) * $perPage),
                'url' => route('public.departments.show', ['department' => $department->slug]),
                'name' => $department->name,
                'datePublished' => $department->created_at?->toIso8601String(),
            ];
        })->toArray();


        return [
            '@context' => 'https://schema.org',
            '@type' => 'ItemList',
            'name' => $parentName ? "{$parentName} Departments" : "All Departments",
            'description' => $parentType && $parentName
                ? "Complete list of Departments for {$parentType}: {$parentName}"
                : "Complete list of Departments for various exams",
            'url' => url(request()->path()),
            'numberOfItems' => count($items),
            'itemListElement' => $items,
            "mainEntityOfPage" => [
                "@type" => "CollectionPage",
                "@id" => url(request()->path()),
                "headline" => $parentName ? "{$parentName} Departments" : "All Departments",
                "description" => $parentType && $parentName
                    ? "Complete list of Departments for {$parentType}: {$parentName}"
                    : "Complete list of Departments for various exams",
                "image" => asset('images/og-image.png'),
                "datePublished" => $this->collection->first()?->created_at?->toIso8601String(),
                "dateModified" => $this->collection->last()?->created_at?->toIso8601String(),
            ]
        ];
    }
}
