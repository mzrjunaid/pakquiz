@php
$categories = [
(object) ['name' => 'Latest Papers', 'slug' => 'latest-papers'],
(object) ['name' => 'Past Papers', 'slug' => 'past-papers'],
(object) ['name' => 'Upcoming Papers', 'slug' => 'upcoming-papers'],
];
@endphp


<?php

use App\Http\Resources\Frontend\Paper\PaperIndexCollection;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use Livewire\Component;
use Livewire\WithPagination;
use Livewire\Attributes\Url;
use Livewire\Attributes\Computed;

new class extends Component {
    use WithPagination;

    public string $category = '';
    public string $type = '';

    #[Url(as: 'per_page')]
    public int $perPage = 10;

    public array $pageIntro = [];

    public function mount(string $category = 'latest-papers'): void
    {
        $this->category = $category;
        $this->type = str_replace('-papers', '', $category);

        if (!in_array($this->type, ['latest', 'past', 'upcoming'])) {
            abort(404);
        }

        // Clamp perPage between 10 and 100
        $this->perPage = min(max($this->perPage, 10), 100);

        $this->pageIntro = match ($this->type) {
            'upcoming' => [
                'title' => 'Upcoming FPSC, PPSC & NTS Papers – Schedule & Prep',
                'description' => 'Stay updated with upcoming papers, exam schedules and expected test patterns for FPSC, PPSC, NTS, CSS and other competitive exams in Pakistan.',
            ],
            'latest' => [
                'title' => 'Latest Papers Mcqs for FPSC, PPSC, NTS & CSS',
                'description' => 'Explore the latest papers and updated MCQs for FPSC, PPSC, NTS, CSS and other testing services in Pakistan. Practice with recently added papers daily.',
            ],
            'past' => [
                'title' => 'Past Papers with Solved MCQs for FPSC, PPSC, NTS & CSS',
                'description' => 'Browse past papers with solved MCQs for FPSC, PPSC, NTS, CSS, PMS and other government exams in Pakistan. Practice by department and subject.',
            ],
        };
    }

    public function getMeta()
    {
        return match ($this->type) {
            'upcoming' => [
                'title' => 'Upcoming FPSC, PPSC & NTS Papers – Schedule & Prep',
                'description' => 'Stay updated with upcoming papers, exam schedules and expected test patterns for FPSC, PPSC, NTS, CSS and other competitive exams in Pakistan.',
                'canonical' => route('public.papers.category_index', 'upcoming-papers'),
                'og_title' => 'Upcoming FPSC, PPSC & NTS Papers – Schedule & Prep',
                'og_description' => 'Stay updated with upcoming papers, exam schedules and expected test patterns for FPSC, PPSC, NTS, CSS and other competitive exams in Pakistan.',
                'og_image' => asset('images/og-image.png'),
            ],
            'latest' => [
                'title' => 'Latest Papers Mcqs for FPSC, PPSC, NTS & CSS',
                'description' => 'Explore the latest papers and updated MCQs for FPSC, PPSC, NTS, CSS and other testing services in Pakistan. Practice with recently added papers daily.',
                'canonical' => route('public.papers.category_index', 'latest-papers'),
                'og_title' => 'Latest Papers Mcqs for FPSC, PPSC, NTS & CSS',
                'og_description' => 'Explore the latest papers and updated MCQs for FPSC, PPSC, NTS, CSS and other testing services in Pakistan. Practice with recently added papers daily.',
                'og_image' => asset('images/og-image.png'),
            ],
            'past' => [
                'title' => 'Past Papers with Solved MCQs for FPSC, PPSC, NTS & CSS',
                'description' => 'Browse past papers with solved MCQs for FPSC, PPSC, NTS, CSS, PMS and other government exams in Pakistan. Practice by department and subject.',
                'canonical' => route('public.papers.category_index', 'past-papers'),
                'og_title' => 'Past Papers with Solved MCQs for FPSC, PPSC, NTS & CSS',
                'og_description' => 'Browse past papers with solved MCQs for FPSC, PPSC, NTS, CSS, PMS and other government exams in Pakistan. Practice by department and subject.',
                'og_image' => asset('images/og-image.png'),
            ],
        };
    }

    private function getPapers()
    {
        $today = now()->toDateTimeString();

        return Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', true)
            ->when($this->type === 'upcoming', function ($query) use ($today) {
                $query->where('schedule_at', '>', $today);
            })
            ->when($this->type === 'latest', function ($query) use ($today) {
                $query->where('paper_year', '>=', date('Y'))->where(function ($q) use ($today) {
                    $q->where('schedule_at', '<=', $today)->orWhereNull('schedule_at');
                });
            })
            ->when($this->type === 'past', function ($query) {
                $query->where('paper_year', '<', date('Y'));
            })
            ->latest()
            ->paginate($this->perPage)
            ->onEachSide(0)
            ->withQueryString();
    }

    private function getAsideData()
    {
        return [
            'latestPapers' => Paper::select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')->withCount('mcqs')->has('mcqs', '>', 0)->where('is_active', '=', '1')->latest()->take(5)->get(),
            'subjects' => Subject::select('id', 'name', 'slug', 'is_active')->withCount('mcqs')->has('mcqs', '>', 0)->where('is_active', '=', '1')->latest()->take(5)->get(),
            'currentAffairs' => Topic::select('id', 'subject_id', 'name', 'slug')->where('subject_id', 39)->withCount('mcqs')->has('mcqs', '>', 0)->latest()->take(5)->get(),
            'testingServices' => TestingService::select('id', 'name', 'slug')->withCount('papers')->has('papers', '>', 0)->latest()->take(5)->get(),
        ];
    }

    #[Computed]
    public function asideData()
    {
        return $this->getAsideData();
    }

    #[Computed]
    public function papers()
    {
        return $this->getPapers();
    }

    #[Computed]
    public function meta()
    {
        return $this->getMeta();
    }

    #[Computed]
    public function schema()
    {
        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => route('home')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => route('public.papers.index')], ['@type' => 'ListItem', 'position' => 3, 'name' => ucfirst($this->type) . ' Papers', 'item' => route('public.papers.category_index', $this->category)]],
        ];

        $resource = PaperIndexCollection::make($this->papers);
        $schema = $resource->toItemListSchema(request());

        if ($schema) {
            $combinedSchema = [$breadcrumbSchema, $schema];
        } else {
            $combinedSchema = [$breadcrumbSchema];
        }

        return $combinedSchema;
    }

    public function with(): array
    {
        return [
            'papers' => $this->papers,
            'pageIntro' => $this->pageIntro,
            'schema' => $this->schema,
            'asideData' => $this->asideData,
        ];
    }
};
?>

@php
$currentAffairs = $asideData['currentAffairs'];
$testingServices = $asideData['testingServices'];
$latestSubjects = $asideData['subjects'];
$latestPapers = $asideData['latestPapers'];
@endphp


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
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row px-4 py-12 md:px-0">
            <div class="space-y-4 w-full md:w-2/3">
                <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                    <ol class="inline-flex items-center md:space-x-1">
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-home class="w-4 h-4" />
                            <a href="/" class="hover:text-primary" title="{{ __('Home') }}" aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                        </li>
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <span class="font-medium text-primary" title="{{ __('All Papers') }}" aria-label="{{ __('All Papers') }}">{{ __('All Papers') }}</span>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" title="{{ $pageIntro['title'] }}">
                    {!! str($pageIntro['title'])->title() !!}
                </h1>
                <div class="text-xs md:text-base text-justify">{!! str($pageIntro['description'])->markdown() !!}</div>
            </div>
            <div class="space-y-2 w-full md:w-1/3">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>

        <section class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 overflow-hidden">
                    @if ($papers->isEmpty())
                    <div>
                        <div class="text-center p-6 rounded-lg shadow-md border">
                            <p class="text-sm md:text-base text-muted-foreground">
                                We are currently finalizing our lineup of {{ $type }} papers.
                                Please check back soon for new research, or explore our
                                <a href="/past-papers" class="text-primary underline hover:text-primary/80">Past
                                    Papers</a>
                                section for more papers.
                            </p>
                        </div>
                        <div class="mt-8">
                            <h2 class="text-xl md:text-2xl font-bold">Some of the Latest Papers</h2>
                            <p class="text-sm md:text-base text-justify">Explore our collection of papers for FPSC,
                                PPSC, NTS, CSS and other government exams in Pakistan.</p>
                            <ul class="mt-4 space-y-2">
                                @foreach ($latestPapers as $latestPaper)
                                <x-paper-card :paper="$latestPaper" />
                                @endforeach
                            </ul>
                        </div>
                    </div>
                    @elseif($papers->count() < 10)
                        <div>
                        <div class="relative">
                            <x-loading target="gotoPage, nextPage, previousPage" message="Loading Papers..." />
                            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                                class="space-y-4">
                                @foreach ($papers as $paper)
                                <x-paper-card :paper="$paper" />
                                @endforeach
                            </div>
                        </div>
                        <div class="mt-8">
                            {{ $papers->links('vendor.livewire.compact-pagination') }}
                        </div>
                        <div class="mt-8">
                            <h2 class="text-xl md:text-2xl font-bold">Some of the Latest Papers</h2>
                            <p class="text-sm md:text-base text-justify">Explore our collection of papers for FPSC,
                                PPSC, NTS, CSS and other government exams in Pakistan.</p>
                            <ul class="mt-4 space-y-2">
                                @foreach ($latestPapers as $latestPaper)
                                <x-paper-card :paper="$latestPaper" />
                                @endforeach
                            </ul>
                        </div>
                </div>
                @else
                <div>
                    <div class="relative">
                        <x-loading target="gotoPage, nextPage, previousPage" message="Loading Papers..." />
                        <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                            class="space-y-4">
                            @foreach ($papers as $paper)
                            <x-paper-card :paper="$paper" />
                            @endforeach
                        </div>
                    </div>
                    <div class="mt-8">
                        {{ $papers->links('vendor.livewire.compact-pagination') }}
                    </div>
                </div>
                @endif
            </div>
            <x-aside>
                <div class="rounded-lg bg-card p-6 shadow-md">
                    <h2 class="mb-2 text-lg font-semibold">Browse by Category</h2>
                    <p class="mb-3 text-muted text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
                        other competitive exams in Pakistan.</p>
                    <div class="md:px-2">
                        @foreach ($categories as $category)
                        <div class="flex items-center gap-1 text-sm">
                            <x-heroicon-s-chevron-right class="h-5 w-5" />
                            <a href="{{ route('public.papers.category_index', $category->slug) }}"
                                class="my-2 block">
                                {{ $category->name }}
                            </a>
                        </div>
                        @endforeach
                    </div>
                </div>
                <livewire:aside.current-affairs />
                <div class="rounded-lg bg-card p-6 shadow-md">
                    <h2 class="mb-2 text-lg font-semibold">Prepare for Testing Services</h2>
                    <p class="mb-3 text-muted text-sm">Explore the latest Papers by Testing Services like FPSC,
                        PPSC, NTS, CSS, PMS and
                        other competitive exams in Pakistan.</p>
                    <div class="md:px-2">
                        @foreach ($testingServices as $testingService)
                        <div class="flex items-center gap-1 text-sm">
                            <x-heroicon-s-chevron-right class="h-5 w-5" />
                            <a href="{{ route('public.testing_services.show', $testingService->slug) }}"
                                class="my-2 block">
                                {{ $testingService->name }}
                            </a>
                        </div>
                        @endforeach
                        <div class="text-sm text-right flex justify-end mt-2">
                            <a href="{{ route('public.testing_services.index') }}"
                                class="text-primary hover:underline">
                                View All Testing Services
                            </a>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg bg-card p-6 shadow-md">
                    <h2 class="mb-2 text-lg font-semibold">Latest Subjects</h2>
                    <p class="mb-3 text-muted text-sm">Explore the latest subjects for FPSC, PPSC, NTS, CSS, PMS and
                        other competitive exams in Pakistan.</p>
                    <div class="md:px-2">
                        @foreach ($latestSubjects as $subject)
                        <div class="flex items-center gap-1 text-sm">
                            <x-heroicon-s-chevron-right class="h-5 w-5" />
                            <a href="{{ route('public.subject.show', $subject->slug) }}" class="my-2 block">
                                {{ $subject->name }}
                            </a>
                        </div>
                        @endforeach
                        <div class="text-sm text-right flex justify-end mt-2">
                            <a href="{{ route('public.subject.index') }}" class="text-primary hover:underline">
                                View All Subjects
                            </a>
                        </div>
                    </div>
                </div>
                <livewire:aside.latest-papers />

            </x-aside>
    </div>
    </section>
</div>
</div>