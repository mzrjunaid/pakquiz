<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoMeta extends Model
{
    use HasFactory;

    protected $table = 'seo_meta';

    protected $fillable = [
        'title',
        'description',
        'keywords',
        'og_title',
        'og_description',
        'og_image',
        'page_type',
        'page_id',
    ];

    /**
     * Polymorphic-like relation (optional)
     */
    public function page()
    {
        return $this->morphTo(null, 'page_type', 'page_id');
    }
}
