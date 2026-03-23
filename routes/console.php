<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


Schedule::command('seo:update')
    ->dailyAt('02:00')
    ->withoutOverlapping();

Schedule::command('sitemap:generate')
    ->dailyAt('03:00')
    ->withoutOverlapping();

Schedule::command('queue:work --stop-when-empty')
    ->everyMinute()
    ->withoutOverlapping();
