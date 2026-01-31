<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\Seo\Updates\TestingServiceSeoUpdate;

class RunSeoUpdates extends Command
{
    protected $signature = 'seo:update {--dry}';
    protected $description = 'Run SEO updates';

    public function handle(): int
    {
        $this->info('Running SEO updates...');

        if ($this->option('dry')) {
            $this->warn('Dry run enabled (no DB writes)');
        }

        app(TestingServiceSeoUpdate::class)->handle();

        $this->info('SEO update completed.');

        return self::SUCCESS;
    }
}
