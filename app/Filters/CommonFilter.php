<?php

namespace App\Filters;

class CommonFilter extends BaseFilter
{

    protected function filters(): array
    {
        return [
            'name'       => 'name',
            'short_name' => 'short_name',
            'status'     => 'status',
            'type'       => 'type',
            'created_by' => 'createdBy',
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Filters
    |--------------------------------------------------------------------------
    */

    protected function name($query, $value): void
    {
        $query->where('name', 'like', "%{$value}%");
    }

    protected function type($query, $value): void
    {
        $query->where('type', 'like', "%{$value}%");
    }

    protected function short_name($query, $value): void
    {
        $query->where('short_name', 'like', "%{$value}%");
    }

    protected function status($query, $value): void
    {
        $query->where('status', $value);
    }

    protected function createdBy($query, $value): void
    {
        $query->whereHas('createdBy', function ($q) use ($value) {
            $q->where('name', 'like', "%{$value}%");
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Generic Sorting (Model-Agnostic)
    |--------------------------------------------------------------------------
    */

    public function applySorting(
        $query,
        array $sortableColumns,
        string $default = 'created_at'
    ) {
        $sortBy = request()->input('sort_by');
        $sortOrder = request()->input('sort_order') === 'asc' ? 'asc' : 'desc';

        if (! in_array($sortBy, $sortableColumns, true)) {
            $sortBy = $default;
        }

        return $query->orderBy($sortBy, $sortOrder);
    }
}
