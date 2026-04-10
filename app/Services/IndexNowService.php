<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class IndexNowService
{
    public static function submit(array $urls)
    {
        return Http::post('https://api.indexnow.org/indexnow', [
            'host' => env('INDEXNOW_HOST'),
            'key' => env('INDEXNOW_KEY'),
            'keyLocation' => 'https://' . env('INDEXNOW_HOST') . '/' . env('INDEXNOW_KEY') . '.txt',
            'urlList' => $urls,
        ]);
    }
}