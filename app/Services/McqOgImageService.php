<?php

namespace App\Services;

use App\Models\Mcq;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Typography\FontFactory;
class McqOgImageService
{
    public function generate(Mcq $mcq, string $action = 'generate'): string
    {
        $relativePath = "assets/images/mcqs/{$mcq->slug}.webp";
        $fullPath = public_path($relativePath);

        // Handle regenerate
        if ($action === 'regenerate' && File::exists($fullPath)) {
            File::delete($fullPath);
        }

        // Skip if exists
        if ($action === 'generate' && File::exists($fullPath)) {
            return $relativePath;
        }

        $mcq->loadMissing([
            'options:id,mcq_id,option_text,is_correct',
            'paper.department:id,name',
            'paper.testingService:id,name',
            'topic:id,name',
            'subject:id,name'
        ]);

        $manager = new ImageManager(new Driver());
        $image = $manager->read(public_path('assets/images/quiz_palceholder.png'));

        // ===== Title =====
        $title = $mcq->paper
            ? "{$mcq->paper->name} | {$mcq->subject->name} | {$mcq->topic?->name}"
            : "{$mcq->subject->name} | {$mcq->topic?->name}";

        $image->text($title, 282, 75, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(32);
            $font->color('030303');
            $font->wrap(850);
        });

        // ===== Question =====
        $questionY = 183;
        $questionText = 'Question: ' . $mcq->question;

        $image->text($questionText, 110, $questionY, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(28);
            $font->lineHeight(1.7);
            $font->wrap(960);
        });

        $currentY = $questionY + $this->estimateTextHeight($questionText, 28, 960, 1.7) + 10;

        // ===== Options =====
        foreach ($mcq->options as $index => $option) {
            $text = chr(65 + $index) . '. ' . $option->option_text;

            $image->text($text, 115, $currentY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(24);
                $font->wrap(450);
            });

            $currentY += $this->estimateTextHeight($text, 24, 450) + 20;
        }

        // ===== Explanation =====
        if ($mcq->explanation) {
            $image->text('Explanation:', 600, $currentY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(20);
            });

            $currentY += 30;

            $image->text($mcq->explanation, 600, $currentY, function (FontFactory $font) {
                $font->filename(public_path('fonts/Roboto-Bold.ttf'));
                $font->size(20);
                $font->wrap(550);
            });
        }

        // ===== CTA =====
        $image->text('< Tap Here for the Answer >', 572, 522, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(24);
            $font->align('center');
        });

        // Save
        $image->toWebp()->save($fullPath);

        return $relativePath;
    }

    private function estimateTextHeight($text, $fontSize, $wrapWidth, $lineHeight = 1.5): float
    {
        $avgCharWidth = $fontSize * 0.4;
        $charsPerLine = $wrapWidth / $avgCharWidth;
        $lines = ceil(strlen($text) / $charsPerLine);

        return $lines * ($fontSize * $lineHeight);
    }
}