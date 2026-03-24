<?php

use Livewire\Component;
use App\Models\Page;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Http\Resources\Public\Paper\PaperIndexCollection;

new class extends Component {
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_papers', 86400, fn() => SeoData::fromModel(Page::where('key', 'papers')->with('seo')->firstOrFail()));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $papers = Paper::query()
            ->select('id', 'name', 'slug', 'description', 'created_at', 'department_id', 'subject_id', 'testing_service_id', 'schedule_at', 'paper_year')
            ->where('is_active', 1)
            ->with(['department:id,name,slug', 'subject:id,name,slug', 'testingService:id,short_name,slug'])
            ->withCount('mcqs')
            ->has('mcqs', '>', 0)
            ->latest('created_at')
            ->paginate($limit)
            ->onEachSide(0)
            ->withQueryString();

        $resource = PaperIndexCollection::make($papers);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => url('/papers')]],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'papers' => $resource,
            'pageIntro' => Page::firstWhere('key', 'papers'),
            'schema' => $combinedSchema,
        ];
    }
};
?>

@slot('title')
{{ $this->meta['title'] }}
@endslot

@slot('description')
{{ $this->meta['description'] }}
@endslot

@slot('canonical')
{{ $this->meta['canonical'] }}
@endslot

@push('meta')
<meta property="og:title" content="{{ $this->meta['og_title'] }}">
<meta property="og:description" content="{{ $this->meta['og_description'] }}">
<meta property="og:image" content="{{ $this->meta['og_image'] }}">
<meta property="og:url" content="{{ $this->meta['canonical'] }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $this->meta['og_title'] }}">
<meta name="twitter:description" content="{{ $this->meta['og_description'] }}">
<meta name="twitter:image" content="{{ $this->meta['og_image'] }}">
@endpush

<div>
    @teleport('head')
    <script type="application/ld+json">
        {
            !!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!
        }
    </script>
    @endteleport

    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row px-4 py-12 md:px-0">
            <div class="space-y-4 w-full md:w-2/3">
                <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                    <ol class="inline-flex items-center md:space-x-1">
                        <li class="inline-flex items-center">
                            <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2">/</span>
                                <span class="font-medium text-primary">{{ __('All Papers') }}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" wire:ignore.self title="{{ $pageIntro->title }}">
                    {{ $pageIntro->title }}
                </h1>
                <p class="text-xs md:text-base text-justify">{{ $pageIntro->description }}</p>
            </div>
            <div class="space-y-2 w-full md:w-1/3">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>

        <section class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2">
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
                <x-aside>
                    <livewire:aside.latest-mcqs />
                    <livewire:aside.latest-papers />
                    <livewire:aside.current-affairs />
                </x-aside>
            </div>
        </section>
    </div>
</div>