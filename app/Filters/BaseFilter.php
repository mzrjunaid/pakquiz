<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

abstract class BaseFilter
{
    protected Builder $builder;
    protected array $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function apply(Builder $builder): Builder
    {
        $this->builder = $builder;

        foreach ($this->allowedFilters() as $filter => $method) {
            if (
                array_key_exists($filter, $this->filters) &&
                filled($this->filters[$filter])
            ) {
                $this->$method($this->filters[$filter]);
            }
        }

        return $this->builder;
    }

    abstract protected function allowedFilters(): array;
}
