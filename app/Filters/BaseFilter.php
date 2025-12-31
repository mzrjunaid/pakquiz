<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

abstract class BaseFilter
{
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply(Builder $query): Builder
    {
        foreach ($this->filters() as $filter => $method) {
            if ($this->request->filled($filter)) {
                $this->$method($query, $this->request->input($filter));
            }
        }

        return $query;
    }

    abstract protected function filters(): array;
}
