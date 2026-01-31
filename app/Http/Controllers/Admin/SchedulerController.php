<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;

class SchedulerController extends Controller
{
    public function runSeoUpdate()
    {
        // Trigger the SEO update command
        Bus::dispatch(function () {
            Artisan::call('seo:update');
        });

        $output = Artisan::output();

        return back()->with('success', "SEO update run successfully. Output: $output");
    }
}
