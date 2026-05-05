<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;

class ImageUploadService
{
    public function uploadImage(
        ?UploadedFile $seoImage,
        string $path,
        $model,
        $seo): ?string
    {

        if (!$seoImage) {
            return null;
        }

        // delete old image
        if ($seo && $seo->og_image && str_starts_with($seo->og_image, 'assets/')) {
            $oldPath = public_path($seo->og_image);
            if (File::exists($oldPath)) {
                File::delete($oldPath);
            }
        }

        $destinationPath = public_path($path);

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0755, true);
        }

        $slug = $model->slug ?? str()->slug($model->name);
        $extension = $seoImage->getClientOriginalExtension();
        $fileName = $slug . '.' . $extension;

        $seoImage->move($destinationPath, $fileName);

        return $path . '/' . $fileName;
    }
}