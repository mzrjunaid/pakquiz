<?php

namespace App\Providers;

use App\Models\Mcq;
use App\Observers\McqObserver;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
    //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') === 'production') {
            URL::forceRootUrl(config('app.url'));
            URL::forceScheme('https');
            Mcq::observe(McqObserver::class);
        }
    }
}
