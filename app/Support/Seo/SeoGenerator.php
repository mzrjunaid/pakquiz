<?php

namespace App\Support\Seo;

use Illuminate\Support\Str;

class SeoGenerator
{
    public static function title(string $question): string
    {
        return Str::limit($question, 55) . ' – MCQs with Answer';
    }

    public static function description(string $question, string $answer): string
    {
        return 'Practice MCQ: ' . Str::limit($question, 120) .
            ' Correct answer: ' . Str::limit($answer, 60) . '.';
    }

    public static function keywords(array $keywords): string
    {
        return collect($keywords)
            ->map(fn($k) => Str::slug($k, ' '))
            ->unique()
            ->implode(', ');
    }
}
