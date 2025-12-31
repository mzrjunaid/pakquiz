<?php

use App\Filters\BaseFilter;

trait Filterable
{
    public function scopeFilter($query, BaseFilter $filter)
    {
        return $filter->apply($query);
    }
}
