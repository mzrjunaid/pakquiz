<?php

namespace App\Console\Commands;

use App\Models\Mcq;
use App\Services\IndexNowService;
use Illuminate\Console\Command;

class SyncIndexNow extends Command
{
    protected $signature = 'sync:indexnow';

    protected $description = 'Sync all MCQs to IndexNow';

    public function handle()
    {
        set_time_limit(0);
        $sitemapUrl = config('app.url') . '/sitemap-mcqs-1.xml';
        $this->info("Reading sitemap from: $sitemapUrl");

        try {
            $xml = simplexml_load_file($sitemapUrl);

            $urls = [];
            foreach ($xml->url as $url) {
                $urls[] = (string)$url->loc;
            }

            $total = count($urls);
            $this->info("Found $total URLs. Starting submission...");

            $chunks = array_chunk($urls, 10000);

            foreach ($chunks as $index => $batch) {
                $this->info("Submitting batch " . ($index + 1) . " (" . count($batch) . " URLs)...");

                $response = IndexNowService::submit($batch);

                if ($response->successful()) {
                    $this->info("Batch " . ($index + 1) . " successful.");
                }
                else {
                    $this->error("Batch " . ($index + 1) . " failed.");
                }

                sleep(1);
            }

            $this->info('Bulk submission complete!');

        }
        catch (\Exception $e) {
            $this->error("Could not read sitemap: " . $e->getMessage());
        }
    }
}