<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    /** @use HasFactory<\Database\Factories\SubjectFactory> */
    use HasFactory, SoftDeletes, Filterable;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'is_active',
        'created_by'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'deleted_at' => 'datetime',
    ];

    public function topics()
    {
        return $this->hasMany(Topic::class, 'subject_id');
    }

    public function papers()
    {
        return $this->hasMany(Paper::class, 'subject_id');
    }

    public function mcqs()
    {
        return $this->hasMany(Mcq::class, 'subject_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault([
            'name' => 'Unknown User'
        ]);
    }

    public function scopeWithoutTopics($query)
    {
        return $query->doesntHave('topics');
    }


    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
