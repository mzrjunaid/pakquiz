<?php

use App\Http\Resources\Frontend\Mcq\McqIndexCollection;
use App\Models\Mcq;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component
{
    public Paper $paper;
    public $department;

    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);

        $mcqs = $this->paper->type === 'mock' ? $this->paper->mockPaperMcqs()->latest()->paginate($limit)->onEachSide(0)->withQueryString() : $this->paper->mcqs()->latest()->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbList = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => url('/papers')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->paper->name, 'item' => url('/papers/'.$this->paper->slug)]];

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbList,
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'mcqs' => $resource,
            'pageIntro' => $this->paper,
            'schema' => $combinedSchema,
        ];
    }

    #[Computed]
    public function meta()
    {
        return SeoData::paperSeo($this->paper);
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
        <div class="w-full">
            <nav class="flex items-center mb-5 text-sm overflow-hidden" aria-label="{{ __('Breadcrumb') }}">
                <ol class="inline-flex items-center md:space-x-1">
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-home class="w-4 h-4" />
                        <a href="/" class="hover:text-primary" title="{{ __('Home') }}"
                            aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                    </li>
                    @if ($department)
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <a href="{{ route('public.departments.show', $department->slug) }}" class="hover:text-primary"
                                title="{{ $department->name }}"
                                aria-label="{{ $department->name }}">{{ $department->name }}</a>
                        </li>
                    @endif
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4" />
                        <a href="{{ route('public.papers.index') }}" class="hover:text-primary"
                            title="{{ __('Papers') }}" aria-label="{{ __('Papers') }}">{{ __('Papers') }}</a>
                    </li>
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-chevron-right class="w-4 h-4 text-nowrap" />
                        <span class="font-medium text-primary text-wrap max-w-sm truncate line-clamp-1"
                            title="{{ $paper->name }}" aria-label="{{ $paper->name }}">{{ $paper->name }}</span>
                    </li>
                </ol>
            </nav>
            <h1 class="text-lg md:text-xl lg:text-2xl font-bold mb-4">{{ str($paper->name)->title() }}</h1>
        </div>
        <div class="w-full md:w-xl">
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
            <x-loading target="gotoPage, nextPage, previousPage" message="Loading MCQs..." />
            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300" class="space-y-4">
                @foreach ($mcqs as $mcq)
                    <x-mcq-card :mcq="$mcq" :idx="$loop->index" :route="route('public.mcqs.show', $mcq->slug)" />
                @endforeach
            </div>
        </div>

        <div class="mt-8">
            {{ $mcqs->links('vendor.livewire.compact-pagination') }}
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
