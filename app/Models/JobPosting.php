<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPosting extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'department_id',
        'testing_service_id',
        'minimum_qualification',
        'experience',
        'scale',
        'total_posts',
        'max_age',
        'age_relaxation',
        'domicile',
        'ad_number',
        'case_number',
        'closing_date',
        'pdf_url',
        'apply_url',
        'description',
        'is_active',
    ];

    protected $casts = [
        'closing_date' => 'date',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function papers()
    {
        return $this->hasMany(Paper::class, 'job_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function testingService()
    {
        return $this->belongsTo(TestingService::class);
    }

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }

    public function keywords()
    {
        return $this->morphToMany(Keyword::class, 'keywordable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }


    public function canonicalUrl()
    {
        return route('public.jobs.show', $this);
    }

    public function getIsExpiredAttribute()
    {
        return $this->closing_date->isPast();
    }
    public function getFullAgeLimitAttribute()
    {
        return $this->max_age + $this->age_relaxation;
    }

    public function scopeSortByClosingDate($query, string $direction)
    {
        return $query->orderBy('closing_date', $direction);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFilter($query, array $filters)
    {
        return $query->when($filters['search'] ?? null, function ($query) use ($filters) {
            $query->where('title', 'like', '%' . $filters['search'] . '%');
        });
    }

    public function scopeSortByAdNumber($query, string $direction)
    {
        return $query->orderBy('ad_number', $direction);
    }
}
