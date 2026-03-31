<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaperSyllabus extends Model
{
    protected $table = 'paper_syllabus';
    protected $fillable = [
        'paper_id',
        'subject_id',
        'percentage',
        'question_count',
    ];

    public function paper()
    {
        return $this->belongsTo(Paper::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    protected static function booted()
    {
        static::saving(function ($syllabus) {
            // 1. Ensure the paper relationship is loaded to avoid extra queries
            $paper = $syllabus->paper;

            if ($paper) {
                // 2. Calculate and round to the nearest whole number
                // Example: 16.5 becomes 17
                $calculatedCount = ($syllabus->percentage / 100) * $paper->total_questions;

                $syllabus->question_count = round($calculatedCount);
            }
        });
    }
}
