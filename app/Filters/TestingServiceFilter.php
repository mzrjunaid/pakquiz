<?php

namespace App\Filters;

class TestingServiceFilter extends BaseFilter
{
    protected function filters(): array
    {
        return [
            'search' => 'search',
            'short_name' => 'short_name',
            'status' => 'status',
            'type' => 'type',
            'created_by' => 'createdBy',
        ];
    }

    protected function search($query, $value)
    {
        $query->where('name', 'like', "%{$value}%");
    }

    protected function type($query, $value)
    {
        $query->where('type', 'like', "%{$value}%");
    }

    protected function short_name($query, $value)
    {
        $query->where('short_name', 'like', "%{$value}%");
    }

    protected function status($query, $value)
    {
        $query->where('status', $value);
    }

    protected function createdBy($query, $value)
    {
        $query->whereHas('createdBy', function ($q) use ($value) {
            $q->where('name', 'like', "%{$value}%");
        });
    }
}
