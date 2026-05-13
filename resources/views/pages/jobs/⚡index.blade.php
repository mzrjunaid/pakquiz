<?php

use App\Http\Resources\Frontend\Job\JobIndexCollection;
use Livewire\Component;
use App\Models\Page;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Models\JobPosting;

new class extends Component
{
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_jobs', 86400, fn () => SeoData::fromModel(Page::where('key', 'jobs')->with('seo')->firstOrFail()));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $jobs = JobPosting::query()
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
            ->where('is_active', 1)
            ->with(['department:id,name,slug', 'testingService:id,short_name,slug'])
            ->latest('closing_date')
            ->paginate($limit)
            ->onEachSide(0)
            ->withQueryString();

        $resource = JobIndexCollection::make($jobs);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
                ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Jobs', 'item' => url('/jobs')],
            ],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'jobs' => $resource,
            'pageIntro' => Page::firstWhere('key', 'jobs'),
            'schema' => $combinedSchema,
            'meta' => $this->meta,
            'latestPapers' => Paper::query()
                ->select('id', 'name', 'description', 'slug', 'created_at')
                ->latest('created_at')
                ->withCount('mcqs')
                ->take(6)
                ->get(),
        ];
    }
};
?>

@slot('canonical')
{{ $meta['canonical'] }}
@endslot

@slot('title')
{{ $meta['title'] }}
@endslot

@slot('description')
{{ $meta['description'] }}
@endslot

@slot('image')
{{ $meta['og_image'] }}
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
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-home class="w-4 h-4" />
                        <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                    </li>
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4" />
                        <span class="font-medium text-primary">{{ __('All Jobs') }}</span>
                    </li>
                </ol>
            </nav>
            <h1 class="text-base md:text-2xl font-bold" wire:ignore.self title="{{ $pageIntro->title }}">
                {!! str($pageIntro->title)->title() !!}
            </h1>
        </div>
        <div class="space-y-2 w-full md:w-1/3">
            <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
            <livewire:global-search />
        </div>
    </x-slot:pageHeader>

    <x-slot:pageMain>
        <div class="prose prose-sm md:prose-base lg:prose-lg space-y-3 max-w-none w-full">
            {!! str($pageIntro->description)->markdown() !!}
        </div>

        <section class="space-y-6 mt-6">
            <div class="relative">
                <x-loading target="gotoPage, nextPage, previousPage" message="Loading Jobs..." />
                <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                    class="space-y-4">
                    @forelse ($jobs as $job)
                        <x-job-card :job="$job" />
                    @empty
                        <div class="text-center py-12">
                            <p class="text-gray-500">No jobs available, check back later.</p>
                        </div>
                    @endforelse
                </div>
            </div>

            <div class="mt-8">
                {{ $jobs->links('vendor.livewire.compact-pagination') }}
            </div>
        </section>
        <section class="space-y-6">
            <h2 class="text-lg md:text-xl font-bold">Related Research Papers</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                @foreach ($latestPapers as $paper)
                    <x-paper-card :paper="$paper" :level="'h3'" />
                @endforeach
            </div>
        </section>

    </x-slot:pageMain>

    <x-slot:pageAside>
        <x-aside>
            <livewire:aside.latest-mcqs />
            <livewire:aside.latest-papers />
            <livewire:aside.current-affairs />
        </x-aside>
    </x-slot:pageAside>
</x-display>
