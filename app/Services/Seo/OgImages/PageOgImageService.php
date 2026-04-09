<?php

namespace App\Services\Seo\OgImages;

use App\Models\Page;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Typography\FontFactory;

class PageOgImageService
{
    public function generate(Page $page, string $action = 'generate'): string
    {
        $relativePath = "assets/images/pages/{$page->slug}.webp";
        $fullPath = public_path($relativePath);

        // Handle regenerate
        if ($action === 'regenerate' && File::exists($fullPath)) {
            File::delete($fullPath);
        }

        // Skip if exists
        if ($action === 'generate' && File::exists($fullPath)) {
            return $relativePath;
        }

        $manager = new ImageManager(new Driver());
        $image = $manager->read(public_path('assets/images/quiz_palceholder.png'));

        // ===== Title =====
        $title = $page->title;

        $image->text($title, 282, 75, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(32);
            $font->lineHeight(1.5);
            $font->align('left');
            $font->valign('middle');
            $font->color('030303');
            $font->wrap(850);
        });

        // ===== Question =====
        $questionY = 175;
        $questionWrap = 960;
        $questionText = $page->description;

        $image->text($questionText, 110, $questionY, function (FontFactory $font) use ($questionWrap) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(28);
            $font->valign('top');
            $font->lineHeight(1.7);
            $font->wrap($questionWrap);
        });


        // ===== CTA =====
        $image->text('< Visit for more details >', 572, 540, function (FontFactory $font) {
            $font->filename(public_path('fonts/Roboto-Bold.ttf'));
            $font->size(24);
            $font->align('center');
        });

        $watermark = $manager->read(public_path('assets/images/watermark.png'));

        $watermark->scale(width: $image->width() * 0.6);

        $image->place(
            $watermark,
            'center',
            0,
            20,
            10
        );

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
