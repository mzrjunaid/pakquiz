<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class McqOption extends Model
{
    /** @use HasFactory<\Database\Factories\McqOptionFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'mcq_id',
        'option_text',
        'is_correct',
        'sort_order'
    ];

    protected $casts = [
        'is_correct' => 'boolean',
        'sort_order' => 'integer',
        'deleted_at' => 'datetime',
    ];

    public function mcq()
    {
        return $this->belongsTo(Mcq::class);
    }
}
