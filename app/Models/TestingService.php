<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestingService extends Model
{
    /** @use HasFactory<\Database\Factories\TestingServiceFactory> */
    use HasFactory;

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
}
