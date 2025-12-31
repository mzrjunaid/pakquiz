<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class McqFilter extends BaseFilter
{
    protected function filters(): array
    {
        return [
            'search'      => 'search',
            'subject_id'  => 'subject',
            'difficulty'  => 'difficulty',
            'status'      => 'status',
        ];
    }

    protected function search(Builder $query, string $value)
    {
        $query->where('question', 'like', "%{$value}%");
    }

    protected function subject(Builder $query, int $id)
    {
        $query->where('subject_id', $id);
    }

    protected function difficulty(Builder $query, string $level)
    {
        $query->where('difficulty', $level);
    }

    protected function status(Builder $query, string $status)
    {
        $query->where('status', $status);
    }
}
