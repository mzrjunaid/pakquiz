<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PaperImportService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPaperImportController extends Controller
{
    public function create()
    {
        return Inertia::render('admin/papers/import');
    }

    public function create_copy()
    {
        return Inertia::render('admin/papers/import-copy');
    }

    public function store(Request $request, PaperImportService $service)
    {

        // dd($request->all());

        // 1️⃣ Determine source
        if ($request->filled('json')) {

            $request->validate([
                'json' => ['required', 'string'],
            ]);

            $data = $this->decodeJson($request->input('json'), 'json');

        }
        else {

            $request->validate([
                'file' => ['required', 'file', 'mimes:json', 'max:10240'],
            ]);

            $json = file_get_contents($request->file('file')->getRealPath());

            $data = $this->decodeJson($json, 'file');
        }

        // 2️⃣ Import with transaction
        $inserted = 0;
        $skipped = 0;

        foreach ($data as $item) {

            $paper = $service->importSingle($item);

            if ($paper) {
                $inserted++;
            }
            else {
                $skipped++;
            }
        }

        return back()->with(
            'success',
            "Papers imported! Inserted: $inserted, Skipped duplicates: $skipped"
        );
    }

    private function decodeJson(string $json, string $field)
    {
        $decoded = json_decode($json, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return back()->withErrors([
                $field => 'Invalid JSON format.'
            ])->throwResponse();
        }

        if (!is_array($decoded)) {
            return back()->withErrors([
                $field => 'JSON must be an array of objects.'
            ])->throwResponse();
        }

        return $decoded;
    }
}
