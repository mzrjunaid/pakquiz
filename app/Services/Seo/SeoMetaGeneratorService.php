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
            'title' => $this->title($data['title'] ?? null),
            'description' => $this->description($data['description'] ?? null),
            'og_title' => $this->ogTitle($data),
            'og_description' => $this->ogDescription($data),
            'og_image' => $data['og_image'] ?? null,
        ];
    }

    public function generateTitleDescription(array $data): array
    {
        return [
            'title' => $this->title($data['title'] ?? null),
            'description' => $this->description($data['description'] ?? null),
            'og_title' => $this->ogTitle($data),
            'og_description' => $this->ogDescription($data),
        ];
    }

    /**
     * Normalize SEO title
     */
    protected function title(?string $title): ?string
    {
        if (!$title) {
            return null;
        }

        $title = trim($title);

        if (mb_strlen($title) <= 75) {
            return $title;
        }

        // Break at last word boundary within 75 chars
        $truncated = mb_substr($title, 0, 75);
        $lastSpace = mb_strrpos($truncated, ' ');

        return $lastSpace !== false
            ? mb_substr($truncated, 0, $lastSpace) . '...'
            : $truncated . '...';
    }

    /**
     * Normalize SEO description
     */
    protected function description(?string $description): ?string
    {
        if (!$description) {
            return null;
        }

        $description = trim($description);

        if (mb_strlen($description) <= 160) {
            return $description;
        }

        // Break at last word boundary within 160 chars
        $truncated = mb_substr($description, 0, 160);
        $lastSpace = mb_strrpos($truncated, ' ');

        return $lastSpace !== false
            ? mb_substr($truncated, 0, $lastSpace) . '...'
            : $truncated . '...';
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
