<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Redirect::route('admin.subjects.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Redirect::route('admin.subjects.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'subject_id' => ['required', 'integer', 'exists:subjects,id'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:255'],
        ]);

        $subject = Subject::findOrFail($validated['subject_id']);

        Topic::create([
            'subject_id' => $subject->id,
            'name' => $validated['name'],
            'slug' => $this->uniqueSlug($validated['slug'] ?? $validated['name']),
            'description' => $validated['description'] ?? null,
            'sort_order' => $validated['sort_order'] ?? 0,
            'created_by' => $request->user()?->id,
        ]);

        return Redirect::route('admin.subjects.show', $subject)
            ->with('success', 'Topic created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Topic $topic)
    {
        return Redirect::route('admin.subjects.show', $topic->subject);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Topic $topic)
    {
        return Redirect::route('admin.subjects.show', $topic->subject);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Topic $topic)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:255'],
        ]);

        $slug = $this->uniqueSlug(
            $validated['slug'] !== ''
            ? $validated['slug']
            : $validated['name'],
            $topic->id,
        );

        $topic->update([
            'name' => $validated['name'],
            'slug' => $slug,
            'description' => $validated['description'] ?? null,
            'sort_order' => $validated['sort_order'] ?? 0,
        ]);

        return Redirect::route('admin.subjects.show', $topic->subject)
            ->with('success', 'Topic updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Topic $topic)
    {
        $subject = $topic->subject;
        $topic->delete();

        return Redirect::route('admin.subjects.show', $subject)
            ->with('success', 'Topic deleted successfully.');
    }

    protected function uniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($name);
        $slug = $baseSlug !== '' ? $baseSlug : 'topic';
        $originalSlug = $slug;
        $counter = 2;

        while (
            Topic::withTrashed()
                ->when($ignoreId, fn($query) => $query->whereKeyNot($ignoreId))
                ->where('slug', $slug)
                ->exists()
        ) {
            $slug = "{$originalSlug}-{$counter}";
            $counter++;
        }

        return $slug;
    }
}
