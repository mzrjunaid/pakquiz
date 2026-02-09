<?php

namespace App\Models;

use App\Http\Resources\McqResource;
use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Mcq extends Model
{
    /** @use HasFactory<\Database\Factories\McqFactory> */
    use HasFactory, SoftDeletes, Filterable;

    protected $fillable = [
        'paper_id',
        'subject_id',
        'topic_id',
        'question',
        'explanation',
        'difficulty',
        'mcq_type',
        'is_active',
        'created_by'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'deleted_at' => 'datetime',
    ];

    public function paper()
    {
        return $this->belongsTo(Paper::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function options()
    {
        return $this->hasMany(McqOption::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault([
            'name' => 'Unknown User'
        ]);
    }

    public function testingServices()
    {
        return $this->belongsToMany(TestingService::class);
    }

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function scopeWithoutOptions($query)
    {
        return $query->doesntHave('options');
    }

    public function scopeWithoutCorrectOption($query)
    {
        return $query->whereDoesntHave('options', fn($q) => $q->where('is_correct', true));
    }


    public function scopeLatestWithOptions($query, int $limit = 10)
    {
        return $query
            ->select('id', 'paper_id', 'subject_id', 'topic_id', 'question', 'slug', 'difficulty', 'mcq_type', 'created_by')
            ->where('is_active', true)
            ->latest()
            ->with([
                'options:id,mcq_id,option_text,is_correct',
                'tags:id,name,slug',
                'paper:id,name,slug',
                'subject:id,name,slug',
                'topic:id,name,slug',
                'createdBy:id,name',
            ])
            ->limit($limit);
    }

    protected static function booted()
    {
        static::saved(function () {
            Cache::forget('demo_mcqs');
        });

        static::deleted(function () {
            Cache::forget('demo_mcqs');
        });
    }
}
