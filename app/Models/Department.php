<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    /** @use HasFactory<\Database\Factories\DepartmentFactory> */
    use HasFactory, SoftDeletes, Filterable;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'type',
        'created_by',
    ];

    protected $casts = [
        'deleted_at' => 'datetime',
    ];


    public function papers()
    {
        return $this->hasMany(Paper::class, 'department_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault([
            'name' => 'Unknown User'
        ]);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }

    public function scopeSortByCreator($query, string $direction)
    {
        return $query
            ->leftJoin('users', 'departments.created_by', '=', 'users.id')
            ->orderBy('users.name', $direction)
            ->select('departments.*');
    }
}
