<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TestingService extends Model
{
    /** @use HasFactory<\Database\Factories\TestingServiceFactory> */
    use HasFactory, Filterable;

    protected $fillable = [
        'slug',
        'name',
        'short_name',
        'description',
        'created_by'
    ];

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }

    public function mcqs()
    {
        return $this->belongsToMany(Mcq::class);
    }

    public function paperMcqs()
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


    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected static function booted()
    {
        static::creating(function ($service) {
            if (empty($service->short_name)) {
                $service->short_name = self::makeShortName($service->name);
            }
        });
    }

    public static function makeShortName(string $name): string
    {
        $ignore = ['of', 'and', 'the'];

        return collect(explode(' ', $name))
            ->filter(fn($word) => ! in_array(Str::lower($word), $ignore))
            ->map(fn($word) => Str::upper(Str::substr($word, 0, 1)))
            ->implode('');
    }

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }
}
