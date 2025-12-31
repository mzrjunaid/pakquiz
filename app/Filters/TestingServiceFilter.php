<?php

namespace App\Filters;

class TestingServiceFilter extends BaseFilter
{
    protected function filters(): array
    {
        return [
            'search' => 'search',
            'status' => 'status',
        ];
    }

    protected function search($query, $value)
    {
        $query->where('name', 'like', "%{$value}%");
    }

    protected function status($query, $value)
    {
        $query->where('status', $value);
    }
}
