<?php

namespace App\Services\Seo;

use Illuminate\Support\Str;

class SeoMetaGeneratorService
{
    public function generate(array $data): array
    {
        return [
            'title'          => $this->title($data['title'] ?? null),
            'description'    => $this->description($data['description'] ?? null),
            'keywords'       => $this->keywords($data['keywords'] ?? []),
            'og_title'       => $this->ogTitle($data),
            'og_description' => $this->ogDescription($data),
            'og_image'       => $data['og_image'] ?? null,
        ];
    }

    protected function title(?string $title): ?string
    {
        return $title
            ? Str::limit(trim($title), 60)
            : null;
    }

    protected function description(?string $description): ?string
    {
        return $description
            ? Str::limit(trim($description), 160)
            : null;
    }

    protected function keywords(array $keywords): ?string
    {
        if (empty($keywords)) {
            return null;
        }

        return collect($keywords)
            ->filter()
            ->map(fn($k) => Str::lower(trim($k)))
            ->unique()
            ->implode(', ');
    }

    protected function ogTitle(array $data): ?string
    {
        return $this->title(
            $data['og_title'] ?? $data['title'] ?? null
        );
    }

    protected function ogDescription(array $data): ?string
    {
        return $this->description(
            $data['og_description'] ?? $data['description'] ?? null
        );
    }
}
