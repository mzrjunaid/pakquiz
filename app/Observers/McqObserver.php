<?php

namespace App\Observers;

use App\Models\Mcq;
use App\Services\IndexNowService;

class McqObserver
{
    /**
     * Handle the Mcq "created" event.
     */
    public function created(Mcq $mcq)
    {
        IndexNowService::submit([
            route('public.mcqs.show', $mcq->slug),
        ]);
    }

    /**
     * Handle the Mcq "updated" event.
     */
    public function updated(Mcq $mcq)
    {
    //
    }

    /**
     * Handle the Mcq "deleted" event.
     */
    public function deleted(Mcq $mcq)
    {
    //
    }

    /**
     * Handle the Mcq "restored" event.
     */
    public function restored(Mcq $mcq)
    {
    //
    }

    /**
     * Handle the Mcq "force deleted" event.
     */
    public function forceDeleted(Mcq $mcq)
    {
    //
    }
}
