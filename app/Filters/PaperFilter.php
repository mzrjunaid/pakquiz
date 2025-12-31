<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class PaperFilter extends BaseFilter
{
    protected function filters(): array
    {
        return [
            'search'     => 'search',
            'year'       => 'year',
            'department' => 'department',
        ];
    }

    protected function search(Builder $query, string $value)
    {
        $query->where('title', 'like', "%{$value}%");
    }

    protected function year(Builder $query, int $year)
    {
        $query->whereYear('exam_date', $year);
    }

    protected function department(Builder $query, int $id)
    {
        $query->where('department_id', $id);
    }
}
