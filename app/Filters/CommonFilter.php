<?php

namespace App\Filters;

use App\Filters\BaseFilter;

class CommonFilter extends BaseFilter
{
    protected array $sortable = [
        'name',
        'short_name',
        'status',
        'type',
        'created_at',
    ];

    protected function filters(): array
    {
        return [
            'name'       => 'name',
            'short_name' => 'shortName',
            'status'     => 'status',
            'type'       => 'type',
            'created_by' => 'createdBy',
            'sort_by'    => 'sortBy',
        ];
    }

    protected function name($query, $value): void
    {
        $query->where('name', 'like', "%{$value}%");
    }

    protected function shortName($query, $value): void
    {
        $query->where('short_name', 'like', "%{$value}%");
    }

    protected function type($query, $value): void
    {
        $query->where('type', 'like', "%{$value}%");
    }

    protected function status($query, $value): void
    {
        $query->where('status', $value);
    }

    protected function createdBy($query, $value): void
    {
        $query->whereHas(
            'createdBy',
            fn($q) =>
            $q->where('name', 'like', "%{$value}%")
        );
    }

    protected function sortBy($query, $column): void
    {
        $direction = $this->$query->input('sort_order') === 'asc'
            ? 'asc'
            : 'desc';

        if (! in_array($column, $this->sortable, true)) {
            $column = 'created_at';
        }

        $query->orderBy($column, $direction);
    }
}
