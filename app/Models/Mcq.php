<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mcq extends Model
{
    /** @use HasFactory<\Database\Factories\McqFactory> */
    use HasFactory, SoftDeletes;

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
        return $this->belongsTo(Topic::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function topic()
    {
        return $this->belongsTo(Paper::class);
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
}
