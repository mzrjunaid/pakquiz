<?php

use App\Http\Resources\Frontend\TestingServices\TestingServiceIndexCollection;
use Livewire\Component;
use App\Models\Page;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Models\TestingService;
use PHPUnit\Metadata\Test;

new class extends Component
{
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_testing_services', 86400, fn () => SeoData::fromModel(Page::where('key', 'testing_services')->with('seo')->firstOrFail()));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $testingServices = TestingService::query()
            ->select('id', 'name', 'slug', 'short_name', 'description', 'updated_at')
            // ->where('is_active', 1)
            ->with(['papers:id,name,slug', 'jobPostings:id,title,slug'])
            ->latest('created_at')
            ->paginate($limit)
            ->onEachSide(0)
            ->withQueryString();

        $resource = TestingServiceIndexCollection::make($testingServices);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Testing Services', 'item' => url('/testing-services')]],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        $papers = Paper::query()
            ->select('id', 'name', 'slug', 'testing_service_id', 'paper_year', 'subject_id', 'department_id', 'created_by', 'is_active')
            ->where('is_active', 1)
            ->withCount('mcqs')
            ->with(['department:id,name,slug', 'subject:id,name,slug', 'testingService:id,short_name,slug'])
            ->has('mcqs', '>', 0)
            ->where('is_active', '=', '1')
            ->latest()
            ->take(5)
            ->get();


        return [
            'testingServices' => $resource,
            'pageIntro' => Page::firstWhere('key', 'testing_services'),
            'schema' => $combinedSchema,
            'latestPapers' => $papers,
        ];
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
                            <span class="font-medium text-primary">{{ __('All Testing Services') }}</span>
                        </div>
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

        <section class="space-y-6 mt-4 md:mt-6">
            <div class="relative">
                <x-loading target="gotoPage, nextPage, previousPage" message="Loading Testing Services..." />
                <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                    class="space-y-4">
                    @foreach ($testingServices as $testingService)
                        <x-testing-service-card :testingService="$testingService" />
                    @endforeach
                </div>
            </div>
            <div class="mt-8">
                {{ $testingServices->links('vendor.livewire.compact-pagination') }}
            </div>
        </section>

        <section class="space-y-6 mt-4 md:mt-6">
            <h2 class="text-lg md:text-xl font-bold">Latest Papers</h2>
            <div class="space-y-6">
                @forelse ($latestPapers as $paper)
                    <x-paper-card :paper="$paper" :level="'h3'" />
                @empty
                    <div class="text-center py-12">
                        <p class="text-gray-500">No papers available, check back later.</p>
                    </div>
                @endforelse
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
