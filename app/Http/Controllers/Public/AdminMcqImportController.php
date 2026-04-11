<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\Topic;
use App\Services\McqImport\McqImportService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminMcqImportController extends Controller
{
    public function create()
    {
        return Inertia::render('admin/mcqs/import');
    }

    public function create_copy()
    {
        return Inertia::render('admin/mcqs/import-copy');
    }

    public function create_md_copy()
    {
        $subjects = Subject::select('id', 'name', 'slug')->get();
        return Inertia::render('admin/mcqs/import-md-copy', [
            'subjects' => $subjects,
            'topics' => Topic::select('id', 'name', 'slug','subject_id')->get(),
        ]);
    }

    public function store(Request $request, McqImportService $service)
    {
        if ($request->filled('json')) {
            $request->validate([
                'json' => ['required', 'string'],
            ]);

            $data = $this->decodeJson($request->input('json'), 'json');
        } else {
            $request->validate([
                'file' => ['required', 'file', 'mimes:json', 'max:10240'],
            ]);

            $json = file_get_contents($request->file('file')->getRealPath());

            $data = $this->decodeJson($json, 'file');
        }

        $inserted = 0;
        $skipped = 0;

        DB::beginTransaction();

        try {
            foreach ($data as $item) {
                $mcq = $service->importSingle($item);

                if ($mcq) {
                    $inserted++;
                } else {
                    $skipped++;
                }
            }

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();

            return back()->withErrors([
                'import' => $e->getMessage(),
            ]);
        }

        return back()->with(
            'success',
            "MCQs imported! Inserted: $inserted, Skipped duplicates: $skipped",
        );
    }

    private function decodeJson(string $json, string $field): array
    {
        $decoded = json_decode($json, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return back()->withErrors([
                $field => 'Invalid JSON format.',
            ])->throwResponse();
        }

        if (!is_array($decoded)) {
            return back()->withErrors([
                $field => 'JSON must be an array of objects.',
            ])->throwResponse();
        }

        return $decoded;
    }
}
