<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'title',
        'description',
        'keywords',

    ];

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }
}
