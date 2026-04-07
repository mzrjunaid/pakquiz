<?php

use Livewire\Component;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Department;
use Illuminate\Support\Str;

new class extends Component {
    public $search = '';
    public $results = [];

    // This runs automatically when $search is updated
    public function updatedSearch()
    {
        if (strlen($this->search) < 2) {
            $this->results = [];
            return;
        }

        $this->results = collect()
            ->concat(
                Department::select('id', 'name', 'slug')
                    ->where('name', 'like', "%{$this->search}%")
                    ->limit(3)
                    ->get()
                    ->map(
                        fn($m) => [
                            'title' => $m->name,
                            'link' => route('public.departments.show', $m->slug),
                            'type' => 'Department',
                        ],
                    ),
            )
            ->concat(
                Subject::select('id', 'name', 'slug')
                    ->where('name', 'like', "%{$this->search}%")
                    ->limit(3)
                    ->get()
                    ->map(
                        fn($m) => [
                            'title' => $m->name,
                            'link' => route('public.subject.show', $m->slug),
                            'type' => 'Subject',
                        ],
                    ),
            )
            ->concat(
                // Added 'with' to prevent N+1 queries
                Topic::with('subject')
                    ->select('id', 'name', 'slug', 'subject_id')
                    ->where('name', 'like', "%{$this->search}%")
                    ->limit(3)
                    ->get()
                    ->map(
                        fn($m) => [
                            'title' => $m->name,
                            'link' => route('public.subject.topic.show', [$m->subject->slug, $m->slug]),
                            'type' => 'Topic',
                        ],
                    ),
            )
            ->concat(
                Paper::select('id', 'name', 'slug')
                    ->where('name', 'like', "%{$this->search}%")
                    ->limit(3)
                    ->get()
                    ->map(
                        fn($m) => [
                            'title' => $m->name,
                            'link' => route('public.papers.show', $m->slug),
                            'type' => 'Paper',
                        ],
                    ),
            )
            ->concat(
                Mcq::select('id', 'question', 'slug')
                    ->where('question', 'like', "%{$this->search}%")
                    ->limit(3)
                    ->get()
                    ->map(
                        fn($m) => [
                            'title' => Str::limit(strip_tags($m->question), 60),
                            'link' => route('public.mcqs.show', $m->slug),
                            'type' => 'MCQ',
                        ],
                    ),
            )
            ->take(12)
            ->toArray(); // Convert to array for faster Livewire hydration
    }

    public function goToSearch()
    {
        if (strlen($this->search) < 2) {
            return;
        }

        // Redirect to your search route with the query parameter
        return $this->redirect(route('public.search', ['q' => $this->search]), navigate: true);
    }
};
?>

<div class="relative w-full max-w-md hidden md:block">
    <div class="space-y-2">
        <label for="search" class="text-sm md:text-base font-bold sr-only"
            aria-label="Search MCQs, Papers, Topics">Search MCQs, Papers, Topics</label>
        <input type="text" id="search" wire:model.live.debounce.300ms="search" wire:keydown.enter="goToSearch"
            placeholder="Search Papers, MCQs, topics..."
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>


    @if (!empty($results))
        <ul class="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg overflow-hidden">
            @foreach ($results as $result)
                <li>
                    <a href="{{ $result['link'] }}" class="flex justify-between items-center p-3 hover:bg-blue-50">
                        <span>{{ $result['title'] }}</span>
                        <span class="text-xs px-2 py-1 rounded bg-gray-200 text-gray-600">
                            {{ $result['type'] }}
                        </span>
                    </a>
                </li>
            @endforeach
        </ul>
    @elseif(strlen($search) >= 2)
        <div class="absolute z-10 w-full mt-1 bg-white border rounded-lg p-4 text-gray-500 shadow-lg">
            No results found for "{{ $search }}"
        </div>
    @endif
</div>
