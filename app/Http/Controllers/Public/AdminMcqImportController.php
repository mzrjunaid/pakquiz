<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Services\McqsImportService;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminMcqImportController extends Controller
{
    public function create()
    {
        return Inertia::render('admin/mcqs/import');
    }

    public function store(Request $request)
    {

        $request->validate([
            'file' => 'required|file|mimes:json|max:10240',
        ]);

        $path = $request->file('file')->getRealPath();
        $json = file_get_contents($path);
        $data = json_decode($json, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return back()->withErrors(['file' => 'Invalid JSON file.']);
        }

        $service = new McqsImportService();
        
        $inserted = 0;
        $skipped = 0;

        foreach ($data as $item) {
            $mcq = $service->importSingle($item);

            if ($mcq) {
                $inserted++;
            } else {
                $skipped++;
            }
        }

        return back()->with('success', "MCQs imported! Inserted: $inserted, Skipped duplicates: $skipped");
    }   
}
