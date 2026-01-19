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
    ];

    /**
     * Polymorphic-like relation (optional)
     */
    public function page()
    {
        return $this->morphTo();
    }

    public static function stats()
    {
        $byType = self::select('page_type')
            ->selectRaw('count(*) as total')
            ->groupBy('page_type')
            ->get()
            ->mapWithKeys(function ($item) {
                // Convert FQCN to just the model name
                return [class_basename($item->page_type) => $item->total];
            })
            ->toArray();

        return [
            'total' => self::count(),
            'by_type' => $byType,
        ];
    }
}
