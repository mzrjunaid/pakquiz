<?php

namespace App\Filters\Public;

use App\Filters\BaseFilter;

class McqsFilter extends BaseFilter
{
    protected function allowedFilters(): array
    {
        return [
            'search'     => 'search',
            'topic'      => 'topic',
            'paper'      => 'paper',
            'tag'        => 'tag',
            'difficulty' => 'difficulty',
            'year'       => 'year',
            'sort'       => 'sort',
        ];
    }

    protected function search(string $value): void
    {
        $this->builder->where('question', 'like', "%{$value}%");
    }

    protected function topic(string $slug): void
    {
        $this->builder->whereHas(
            'topic',
            fn($q) =>
            $q->where('slug', $slug)
        );
    }

    protected function paper(string $slug): void
    {
        $this->builder->whereHas(
            'paper',
            fn($q) =>
            $q->where('slug', $slug)
        );
    }

    protected function tag(string $slug): void
    {
        $this->builder->whereHas(
            'tags',
            fn($q) =>
            $q->where('slug', $slug)
        );
    }

    protected function difficulty(string $value): void
    {
        $this->builder->where('difficulty', $value);
    }

    protected function year(int $year): void
    {
        $this->builder->whereYear('created_at', $year);
    }

    protected function sort(string $value): void
    {
        match ($value) {
            'oldest'      => $this->builder->oldest(),
            'most_viewed' => $this->builder->orderByDesc('views'),
            default       => $this->builder->latest(),
        };
    }
}
