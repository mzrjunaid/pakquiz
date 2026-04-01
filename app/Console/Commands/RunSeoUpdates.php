<?php

namespace App\Console\Commands;

use App\Services\Seo\Updates\DepartmentSeoUpdate;
use Illuminate\Console\Command;
use App\Services\Seo\Updates\TestingServiceSeoUpdate;
use App\Services\Seo\Updates\SubjectSeoUpdate;
use App\Services\Seo\Updates\PaperSeoUpdate;
use App\Services\Seo\Updates\TopicSeoUpdate;
use App\Services\Seo\Updates\McqSeoUpdate;
use App\Services\Seo\Updates\PageSeoUpdate;
use App\Services\Seo\Updates\JobPostingSeoUpdate;

class RunSeoUpdates extends Command
{
    protected $signature = 'seo:update {--only= : Specify only title or description} {--dry} {--model=* : Specify a single updater (TestingService, Subject, Paper, Topic, Mcq, Department, Page)}';
    protected $description = 'Run SEO updates for all models';

    protected array $updaters = [
        'TestingService' => TestingServiceSeoUpdate::class,
        'Department' => DepartmentSeoUpdate::class,
        'Subject' => SubjectSeoUpdate::class,
        'Paper' => PaperSeoUpdate::class,
        'JobPosting' => JobPostingSeoUpdate::class,
        'Topic' => TopicSeoUpdate::class,
        'Mcq' => McqSeoUpdate::class,
        'Page' => PageSeoUpdate::class,
    ];

    public function handle(): int
    {
        $this->info('Starting SEO updates...');

        $dryRun = $this->option('dry');
        $selectedModels = $this->option('model');
        $only = $this->option('only')
            ? explode(',', $this->option('only'))
            : [];

        foreach ($this->updaters as $name => $updaterClass) {

            if (!empty($selectedModels) && !in_array($name, $selectedModels)) {
                continue;
            }

            $this->info("Running {$name} SEO update...");

            if ($dryRun) {
                $this->warn("Dry run enabled — skipping DB writes for {$name}");
                continue;
            }

            app($updaterClass)->handle($only);

            $this->info("{$name} SEO update completed.");
        }

        $this->info('All SEO updates finished.');

        return self::SUCCESS;
    }
}
