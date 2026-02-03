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

class RunSeoUpdates extends Command
{
    protected $signature = 'seo:update {--dry} {--model=* : Specify a single updater (TestingService, Subject, Paper, Topic, Mcq)}';
    protected $description = 'Run SEO updates for all models';

    protected array $updaters = [
        'Department'     => DepartmentSeoUpdate::class,
        'Page'           => PageSeoUpdate::class,
        'TestingService' => TestingServiceSeoUpdate::class,
        'Subject'        => SubjectSeoUpdate::class,
        'Paper'          => PaperSeoUpdate::class,
        'Topic'          => TopicSeoUpdate::class,
        'Mcq'            => McqSeoUpdate::class,
    ];

    public function handle(): int
    {
        $this->info('Starting SEO updates...');

        $dryRun = $this->option('dry');
        $selectedModels = $this->option('model'); // array of updater names

        // Loop through updaters in recommended order
        foreach ($this->updaters as $name => $updaterClass) {

            // Skip if --model option is provided and this updater is not selected
            if (!empty($selectedModels) && !in_array($name, $selectedModels)) {
                continue;
            }

            $this->info("Running {$name} SEO update...");

            $updater = app($updaterClass);

            if ($dryRun) {
                $this->warn("Dry run enabled — skipping DB writes for {$name}");
                continue;
            }

            $updater->handle();

            $this->info("{$name} SEO update completed.");
        }

        $this->info('All SEO updates finished.');

        return self::SUCCESS;
    }
}
