<?php

namespace App\Models;

use Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestingService extends Model
{
    /** @use HasFactory<\Database\Factories\TestingServiceFactory> */
    use HasFactory, Filterable;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'created_by'
    ];

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }

    public function mcqs()
    {
        return $this->hasManyThrough(
            Mcq::class,
            Paper::class,
            'testing_service_id',
            'paper_id',
            'id',
            'id'
        );
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault(
            [
                'name' => 'Unknown User'
            ]
        );
    }

    public function seo()
    {
        return $this->hasOne(SeoMeta::class, 'page_id')
            ->where('page_type', 'service');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
