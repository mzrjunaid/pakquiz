<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use App\Models\Page;
use App\Services\Seo\OgImages\PageOgImageService;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GeneratePageOgImageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public Page $page;
    public string $action;

    public function __construct(Page $page, string $action = 'generate')
    {
        $this->page = $page;
        $this->action = $action;
    }

    public function handle(PageOgImageService $service): void
    {
        $relativePath = $service->generate($this->page, $this->action);

        // Save SEO
        $this->page->seo()->updateOrCreate(
        [
            'page_id' => $this->page->id,
            'page_type' => Page::class ,
        ],
        [
            'og_image' => $relativePath
        ]
        );
    }
}