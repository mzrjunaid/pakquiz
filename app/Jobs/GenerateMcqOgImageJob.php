<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use App\Models\Mcq;
use App\Services\McqOgImageService;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateMcqOgImageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public Mcq $mcq;
    public string $action;

    public function __construct(Mcq $mcq, string $action = 'generate')
    {
        $this->mcq = $mcq;
        $this->action = $action;
    }

    public function handle(McqOgImageService $service): void
    {
        $relativePath = $service->generate($this->mcq, $this->action);

        // Save SEO
        $this->mcq->seo()->updateOrCreate(
            [
                'page_id' => $this->mcq->id,
                'page_type' => Mcq::class,
            ],
            [
                'og_image' => $relativePath
            ]
        );
    }
}