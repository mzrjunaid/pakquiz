<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Topic extends Model
{
    /** @use HasFactory<\Database\Factories\TopicFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'subject_id',
        'sort_order',
        'created_by'
    ];

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function mcqs()
    {
        return $this->hasMany(Mcq::class, 'topic_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault();
    }
}
