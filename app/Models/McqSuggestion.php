<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class McqSuggestion extends Model
{
    // Allows these fields to be saved via McqSuggestion::create([...])
    protected $fillable = [
        'mcq_id',
        'user_id',
        'name',
        'email',
        'suggested_content',
        'status'
    ];

    public function mcq(): BelongsTo
    {
        return $this->belongsTo(Mcq::class);
    }
}
