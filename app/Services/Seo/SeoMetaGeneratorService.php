<?php

namespace App\Services\Seo;

use Illuminate\Support\Str;

class SeoMetaGeneratorService
{
    /**
     * Generate normalized SEO meta payload
     */
    public function generate(array $data): array
    {
        return [
            'title'          => $this->title($data['title'] ?? null),
            'description'    => $this->description($data['description'] ?? null),
            'og_title'       => $this->ogTitle($data),
            'og_description' => $this->ogDescription($data),
            'og_image'       => $data['og_image'] ?? null,
        ];
    }

    /**
     * Normalize SEO title
     */
    protected function title(?string $title): ?string
    {
        if (! $title) {
            return null;
        }

        return Str::limit(
            trim($title),
            60,
            ''
        );
    }

    /**
     * Normalize SEO description
     */
    protected function description(?string $description): ?string
    {
        if (! $description) {
            return null;
        }

        return Str::limit(
            trim($description),
            160,
            ''
        );
    }

    /**
     * Resolve Open Graph title
     */
    protected function ogTitle(array $data): ?string
    {
        return $this->title(
            $data['og_title']
                ?? $data['title']
                ?? null
        );
    }

    /**
     * Resolve Open Graph description
     */
    protected function ogDescription(array $data): ?string
    {
        return $this->description(
            $data['og_description']
                ?? $data['description']
                ?? null
        );
    }
}
