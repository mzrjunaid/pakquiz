<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Paper extends Model
{
    /** @use HasFactory<\Database\Factories\PaperFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'schedule_at',
        'department_id',
        'testing_service_id',
        'subject_id',
        'is_active',
        'created_by'
    ];

    protected $casts = [
        'schedule_at' => 'datetime',
        'is_active' => 'boolean',
        'deleted_at' => 'datetime',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function testingService()
    {
        return $this->belongsTo(TestingService::class, 'testing_service_id');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function mcqs()
    {
        return $this->hasmany(Mcq::class, 'paper_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault([
            'name' => 'Unknown User'
        ]);
    }

    public function fullTitle(): string
    {
        $year = $this->schedule_at->format('Y');
        return "$this->name - ($year)";
    }

    public function seo()
    {
        return $this->hasOne(SeoMeta::class, 'page_id')->where('page_type', 'paper');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
