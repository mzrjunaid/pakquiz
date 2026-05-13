<?php

use App\Http\Resources\Frontend\Mcq\McqIndexCollection;
use App\Http\Resources\Frontend\Paper\PaperIndexCollection;
use App\Models\Mcq;
use App\Models\TestingService;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component
{
    public TestingService $testingService;
    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $papers = $this->testingService->papers()->select('id', 'name', 'slug', 'description', 'created_at', 'department_id', 'subject_id', 'schedule_at', 'paper_year')
            ->where('is_active', 1)
            ->with(['department:id,name,slug', 'subject:id,name,slug'])
            ->withCount('mcqs')
            ->has('mcqs', '>', 0)
            ->latest('created_at')
            ->paginate($limit)
            ->onEachSide(0)
            ->withQueryString();

        $latestJobs = $this->testingService
            ->jobPostings()
            ->select(
                'id',
                'title',
                'slug',
                'department_id',
                'testing_service_id',

                'total_posts',
                'domicile',

                'ad_number',
                'closing_date',

                'description',
                'created_at',
            )
            // ->where('is_active', 1)
            ->with(['department:id,name,slug'])
            ->latest()
            ->take(5)
            ->get();

        $resource = PaperIndexCollection::make($papers);

        $breadcrumbList = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => url('/papers')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->testingService->name, 'item' => url('/papers/'.$this->testingService->slug)]];

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbList,
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'papers' => $resource,
            'pageIntro' => $this->testingService,
            'schema' => $combinedSchema,
            'latestJobs' => $latestJobs,
        ];
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_testing_service-'.$this->testingService->slug, 86400, fn () => SeoData::testingServiceSeo($this->testingService));
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

<x-display>
    <x-slot:pageHeader>
        @teleport('head')
        <script type="application/ld+json">
            {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
        </script>
        @endteleport
        <div class="space-y-4 w-full md:w-2/3">
            <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                <ol class="inline-flex items-center md:space-x-1">
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2">/</span>
                            <a href="{{ route('public.testing_services.index') }}"
                                class="hover:text-primary">{{ __('Testing Services') }}</a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2">/</span>
                            <span class="font-medium text-primary max-w-sm truncate">{{ $pageIntro->name }}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1 class="text-base md:text-2xl font-bold" title="{{ $pageIntro->name }}">
                {!! str($pageIntro->name)->title() !!}
            </h1>
        </div>
        <div class="space-y-2 w-full md:w-1/3">
            <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
            <livewire:global-search />
        </div>
    </x-slot:pageHeader>
    <x-slot:pageMain>
        @if ($pageIntro->description)
            <div class="prose prose-sm md:prose-base lg:prose-lg space-y-3 max-w-none w-full">
                {!! str($pageIntro->description)->markdown() !!}
            </div>
        @endif
        <div class="relative mt-4 md:mt-6">
            <x-loading target="gotoPage, nextPage, previousPage" message="Loading Papers..." />
            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300" class="space-y-4">
                @foreach ($papers as $paper)
                    <x-paper-card :paper="$paper" :idx="$loop->index" :route="route('public.papers.show', $paper->slug)" />
                @endforeach
            </div>

            <div class="mt-8">
                {{ $papers->links('vendor.livewire.compact-pagination') }}
            </div>
        </div>

        <section class="space-y-6 mt-4 md:mt-6">
            <h2 class="text-lg md:text-xl font-bold">Latest Jobs You May Be Interested In</h2>
            <div>
                @forelse ($latestJobs as $job)
                    <x-job-card :job="$job" />
                @empty
                    <div class="text-center py-12">
                        <p class="text-gray-500">No jobs available, check back later.</p>
                    </div>
                @endforelse
            </div>
        </section>
    </x-slot:pageMain>
    <x-slot:pageAside>
        <x-aside>
            <livewire:aside.current-affairs />
            <livewire:aside.latest-papers />
        </x-aside>
    </x-slot:pageAside>
</x-display>
