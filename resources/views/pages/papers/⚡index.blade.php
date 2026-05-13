<?php

use Livewire\Component;
use App\Models\Page;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Http\Resources\Frontend\Paper\PaperIndexCollection;
use Illuminate\Support\Str;

new class extends Component
{
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_papers', 86400, fn () => SeoData::fromModel(Page::where('key', 'papers')->with('seo')->firstOrFail()));
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
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <x-slot:pageHeader>
        <div>
            <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                <ol class="inline-flex items-center md:space-x-1">
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-home class="w-4 h-4" />
                        <a href="/" class="hover:text-primary" title="{{ __('Home') }}"
                            aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                    </li>
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4" />
                        <span class="font-medium text-primary" title="{{ __('All Papers') }}"
                            aria-label="{{ __('All Papers') }}">{{ __('All Papers') }}</span>
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
        @if ($pageIntro->description)
            <div class="prose prose-sm md:prose-base lg:prose-md pb-4 space-y-0 max-w-none w-full">
                {!! str($pageIntro->description)->markdown() !!}
            </div>
        @endif
        <div class="relative">
            <x-loading target="gotoPage, nextPage, previousPage" message="Loading Papers..." />
            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300" class="space-y-4">
                @foreach ($papers as $paper)
                    <x-paper-card :paper="$paper" />
                @endforeach
            </div>
        </div>

        <div class="mt-8">
            {{ $papers->links('vendor.livewire.compact-pagination') }}
        </div>
    </x-slot:pageMain>
    <x-slot:pageAside>
        <x-aside>
            <livewire:aside.latest-mcqs />
            <livewire:aside.latest-papers />
            <livewire:aside.current-affairs />
        </x-aside>
    </x-slot:pageAside>
</x-display>
