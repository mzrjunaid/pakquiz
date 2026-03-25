<?php

use Livewire\Component;
use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Support\SchemaGenerator;
use Livewire\Attributes\Computed;
use Livewire\Attributes\Url;
use Livewire\WithPagination;
use App\Support\SeoData;

new class extends Component {
    use WithPagination;

    #[Url(as: 'q')]
    public string $query = '';

    #[Url]
    public string $type = 'all'; // all | mcqs | papers | subjects

    public string $debouncedQuery = '';

    public function updatedQuery(): void
    {
        $this->resetPage();
    }

    public function updatedType(): void
    {
        $this->resetPage();
    }

    public function setType(string $type): void
    {
        $this->type = $type;
        $this->resetPage();
    }

    #[Computed]
    public function results()
    {
        if (strlen(trim($this->query)) < 2) {
            return null;
        }

        $q = trim($this->query);

        return match ($this->type) {
            'mcqs' => $this->searchMcqs($q),
            'papers' => $this->searchPapers($q),
            'subjects' => $this->searchSubjects($q),
            default => $this->searchAll($q),
        };
    }

    private function searchMcqs(string $q)
    {
        return Mcq::where('question', 'like', "%{$q}%")
            ->with(['subject', 'topic', 'options'])
            ->whereHas('options', function ($query) use ($q) {
                $query->where('option_text', 'like', "%{$q}%");
            })
            ->latest()
            ->paginate(15);
    }

    private function searchPapers(string $q)
    {
        return Paper::where('name', 'like', "%{$q}%")
            ->orWhere('description', 'like', "%{$q}%")
            ->with(['subject'])
            ->latest()
            ->paginate(15);
    }

    private function searchSubjects(string $q)
    {
        return Subject::where('name', 'like', "%{$q}%")
            ->orWhere('description', 'like', "%{$q}%")
            ->withCount('mcqs')
            ->paginate(15);
    }

    private function searchAll(string $q)
    {
        // Returns grouped results for "all" tab — no pagination on grouped
        return [
            'mcqs' => Mcq::where('question', 'like', "%{$q}%")
                ->with('subject')
                ->limit(5)
                ->get(),
            'papers' => Paper::where('name', 'like', "%{$q}%")
                ->with('subject')
                ->limit(5)
                ->get(),
            'subjects' => Subject::where('name', 'like', "%{$q}%")
                ->withCount('mcqs')
                ->limit(5)
                ->get(),
        ];
    }

    #[Computed]
    public function totalCounts(): array
    {
        if (strlen(trim($this->query)) < 2) {
            return ['mcqs' => 0, 'papers' => 0, 'subjects' => 0];
        }

        $q = trim($this->query);

        return [
            'mcqs' => Mcq::where('question', 'like', "%{$q}%")->count(),
            'papers' => Paper::where('name', 'like', "%{$q}%")->count(),
            'subjects' => Subject::where('name', 'like', "%{$q}%")->count(),
        ];
    }

    #[Computed]
    public function filters(): array
    {
        return [['id' => 'all', 'label' => 'All Results', 'icon' => 'ri-search-line'], ['id' => 'mcqs', 'label' => 'MCQs', 'icon' => 'ri-questionnaire-line'], ['id' => 'papers', 'label' => 'Papers', 'icon' => 'ri-file-list-3-line'], ['id' => 'subjects', 'label' => 'Subjects', 'icon' => 'ri-book-2-line']];
    }

    #[Computed]
    public function meta(): array
    {
        return SeoData::searchSeo($this->query);
    }

    #[Computed]
    public function schema(): array
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::searchPage($this->query));
    }
};
?>

@slot('canonical')
{{ $this->meta['canonical'] }}
@endslot

@slot('title')
{{ $this->meta['title'] }}
@endslot

@slot('description')
{{ $this->meta['description'] }}
@endslot

@slot('image')
{{ $this->meta['og_image'] }}
@endslot

<div>
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <div class="max-w-7xl mx-auto px-4 lg:px-0 py-6 md:py-12">
        <section class="flex flex-col gap-1 px-4 md:px-0">
            <nav aria-label="Breadcrumb" class="mb-6">
                <ol class="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                    <li>
                        <a href="{{ route('home') }}"
                            class="flex items-center gap-1 hover:text-primary transition-colors">
                            @svg('ri-home-4-line', 'h-4 w-4')
                            Home
                        </a>
                    </li>
                    <li>@svg('ri-arrow-right-s-line', 'h-4 w-4')</li>
                    <li class="font-medium text-foreground">Search</li>
                    @if ($query)
                    <li>@svg('ri-arrow-right-s-line', 'h-4 w-4')</li>
                    <li class="max-w-[200px] truncate font-medium text-foreground">"{{ $query }}"</li>
                    @endif
                </ol>
            </nav>
            <h1 class="text-2xl font-bold text-primary">Search Results</h1>
            <p class="text-muted-foreground">Search results for "{{ $query }}"</p>
        </section>

        <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <div class="lg:col-span-2 space-y-8 py-6">
                {{-- ── Search Input ── --}}
                <div class="mb-6">
                    <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                            {{-- Show spinner while searching, magnifier otherwise --}}
                            <span wire:loading wire:target="query">
                                @svg('ri-loader-4-line', 'h-5 w-5 animate-spin text-muted-foreground')
                            </span>
                            <span wire:loading.remove wire:target="query">
                                @svg('ri-search-line', 'h-5 w-5 text-muted-foreground')
                            </span>
                        </div>

                        <input type="search" wire:model.live.debounce.400ms="query"
                            placeholder="Search MCQs, papers, subjects..." autofocus
                            class="w-full rounded-xl border border-border bg-background py-3.5 pr-4 pl-12 text-base shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />

                        @if ($query)
                        <button wire:click="$set('query', '')"
                            class="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground">
                            <x-heroicon-s-x-mark class="h-5 w-5" />
                        </button>
                        @endif
                    </div>
                </div>

                {{-- ── Filter Tabs ── --}}
                @if ($query)
                <div class="mb-6 flex flex-wrap gap-2">
                    @foreach ($this->filters as $filter)
                    <button wire:click="setType('{{ $filter['id'] }}')"
                        class="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors
                           {{ $type === $filter['id']
                               ? 'border-primary/40 bg-primary/10 text-primary'
                               : 'border-border bg-card text-muted-foreground hover:bg-secondary' }}">
                        @svg($filter['icon'], 'h-3.5 w-3.5')
                        {{ $filter['label'] }}
                        @if ($filter['id'] !== 'all' && ($this->totalCounts[$filter['id']] ?? 0) > 0)
                        <span class="rounded-full bg-secondary px-1.5 py-0.5 text-xs">
                            {{ $this->totalCounts[$filter['id']] }}
                        </span>
                        @endif
                    </button>
                    @endforeach
                </div>
                @endif

                {{-- ── Results ── --}}
                @if (!$query)

                {{-- Empty state: no query yet --}}
                <div class="py-16 text-center">
                    @svg('ri-search-2-line', 'mx-auto mb-4 h-12 w-12 text-muted-foreground/40')
                    <h2 class="mb-2 text-lg font-semibold text-foreground">Search PakQuiz</h2>
                    <p class="mx-auto max-w-sm text-sm text-muted-foreground">
                        Type at least 2 characters to search MCQs, practice papers, and subjects.
                    </p>
                </div>
                @elseif (strlen(trim($query)) < 2)
                    <div class="py-16 text-center">
                    @svg('ri-search-line', 'mx-auto mb-4 h-10 w-10 text-muted-foreground/40')
                    <p class="text-sm text-muted-foreground">Keep typing...</p>
            </div>
            @else
            {{-- ── ALL tab: grouped preview ── --}}
            @if ($type === 'all')
            @php $results = $this->results; @endphp

            @if (collect($results)->flatten()->isEmpty())
            <div class="py-16 text-center">
                @svg('ri-search-eye-line', 'mx-auto mb-4 h-12 w-12 text-muted-foreground/40')
                <h2 class="mb-2 text-lg font-semibold">No results found</h2>
                <p class="text-sm text-muted-foreground">
                    No results for <strong>"{{ $query }}"</strong>. Try different keywords.
                </p>
            </div>
            @else
            {{-- MCQs Group --}}
            @if ($results['mcqs']->isNotEmpty())
            <div class="mb-8">
                <div class="mb-3 flex items-center justify-between">
                    <h3
                        class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        @svg('ri-questionnaire-line', 'h-4 w-4')
                        MCQs
                    </h3>
                    @if ($this->totalCounts['mcqs'] > 5)
                    <button wire:click="setType('mcqs')"
                        class="text-xs font-medium text-primary hover:underline">
                        View all {{ $this->totalCounts['mcqs'] }} →
                    </button>
                    @endif
                </div>
                <div class="space-y-2">
                    @foreach ($results['mcqs'] as $mcq)
                    <a href="{{ route('public.mcqs.show', $mcq) }}"
                        class="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                        <p class="mb-1 text-sm font-medium text-foreground line-clamp-2">
                            {{ $mcq->question }}
                        </p>
                        @if ($mcq->subject)
                        <span
                            class="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            @svg('ri-book-2-line', 'h-3 w-3')
                            {{ $mcq->subject->name }}
                        </span>
                        @endif
                    </a>
                    @endforeach
                </div>
            </div>
            @endif

            {{-- Papers Group --}}
            @if ($results['papers']->isNotEmpty())
            <div class="mb-8">
                <div class="mb-3 flex items-center justify-between">
                    <h3
                        class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        @svg('ri-file-list-3-line', 'h-4 w-4')
                        Papers
                    </h3>
                    @if ($this->totalCounts['papers'] > 5)
                    <button wire:click="setType('papers')"
                        class="text-xs font-medium text-primary hover:underline">
                        View all {{ $this->totalCounts['papers'] }} →
                    </button>
                    @endif
                </div>
                <div class="space-y-2">
                    @foreach ($results['papers'] as $paper)
                    <a href="{{ route('public.papers.show', $paper) }}"
                        class="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                        <p class="mb-1 text-sm font-medium text-foreground">
                            {{ $paper->name }}
                        </p>
                        @if ($paper->description)
                        <p class="text-xs text-muted-foreground line-clamp-1">
                            {{ $paper->description }}
                        </p>
                        @endif
                    </a>
                    @endforeach
                </div>
            </div>
            @endif

            {{-- Subjects Group --}}
            @if ($results['subjects']->isNotEmpty())
            <div class="mb-8">
                <div class="mb-3 flex items-center justify-between">
                    <h3
                        class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        @svg('ri-book-2-line', 'h-4 w-4')
                        Subjects
                    </h3>
                    @if ($this->totalCounts['subjects'] > 5)
                    <button wire:click="setType('subjects')"
                        class="text-xs font-medium text-primary hover:underline">
                        View all {{ $this->totalCounts['subjects'] }} →
                    </button>
                    @endif
                </div>
                <div class="grid gap-2 sm:grid-cols-2">
                    @foreach ($results['subjects'] as $subject)
                    <a href="{{ route('public.subject.show', $subject) }}"
                        class="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                        <span
                            class="text-sm font-medium text-foreground">{{ $subject->name }}</span>
                        <span class="text-xs text-muted-foreground">{{ $subject->mcqs_count }}
                            MCQs</span>
                    </a>
                    @endforeach
                </div>
            </div>
            @endif

            @endif

            {{-- ── Filtered tabs: paginated ── --}}
            @else
            @php $results = $this->results; @endphp

            @if ($results && $results->isEmpty())
            <div class="py-16 text-center">
                @svg('ri-search-eye-line', 'mx-auto mb-4 h-12 w-12 text-muted-foreground/40')
                <h2 class="mb-2 text-lg font-semibold">No {{ $type }} found</h2>
                <p class="text-sm text-muted-foreground">
                    No results for <strong>"{{ $query }}"</strong> in {{ $type }}.
                </p>
            </div>
            @elseif ($results)
            <div class="mb-4 text-sm text-muted-foreground">
                {{ number_format($results->total()) }}
                result{{ $results->total() !== 1 ? 's' : '' }} for
                <strong class="text-foreground">"{{ $query }}"</strong>
            </div>

            <div class="space-y-2">
                @foreach ($results as $item)
                {{-- MCQ row --}}
                @if ($type === 'mcqs')
                <a href="{{ route('public.mcqs.show', $item) }}"
                    class="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                    <p class="mb-2 text-sm font-medium text-foreground">
                        {{ $item->question }}
                    </p>
                    <div class="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        @if ($item->subject)
                        <span class="flex items-center gap-1">
                            @svg('ri-book-2-line', 'h-3 w-3')
                            {{ $item->subject->name }}
                        </span>
                        @endif
                        @if ($item->topic)
                        <span class="flex items-center gap-1">
                            @svg('ri-price-tag-3-line', 'h-3 w-3')
                            {{ $item->topic->name }}
                        </span>
                        @endif
                    </div>
                </a>

                {{-- Paper row --}}
                @elseif ($type === 'papers')
                <a href="{{ route('public.papers.show', $item) }}"
                    class="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                    <p class="mb-1 text-sm font-medium text-foreground">
                        {{ $item->name }}
                    </p>
                    @if ($item->description)
                    <p class="mb-2 text-xs text-muted-foreground line-clamp-2">
                        {{ $item->description }}
                    </p>
                    @endif
                    @if ($item->subject)
                    <span class="flex items-center gap-1 text-xs text-muted-foreground">
                        @svg('ri-book-2-line', 'h-3 w-3')
                        {{ $item->subject->name }}
                    </span>
                    @endif
                </a>

                {{-- Subject row --}}
                @elseif ($type === 'subjects')
                <a href="{{ route('public.subject.show', $item) }}"
                    class="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary">
                    <div>
                        <p class="text-sm font-medium text-foreground">{{ $item->name }}
                        </p>
                        @if ($item->description)
                        <p class="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                            {{ $item->description }}
                        </p>
                        @endif
                    </div>
                    <span class="ml-4 flex-shrink-0 text-xs text-muted-foreground">
                        {{ number_format($item->mcqs_count) }} MCQs
                    </span>
                </a>
                @endif
                @endforeach
            </div>

            <div class="mt-6">
                {{ $results->links() }}
            </div>
            @endif
            @endif

            @endif
        </div>
        <x-aside>
            <livewire:aside.latest-mcqs />
            <livewire:aside.latest-papers />
            <livewire:aside.current-affairs />
        </x-aside>
    </div>
</div>
</div>