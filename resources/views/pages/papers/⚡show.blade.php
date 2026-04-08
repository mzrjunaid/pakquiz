<?php

use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Models\Mcq;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component {
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

        $paperType = $this->paper->type;

        // dd($paperType);

        if ($paperType === 'mock') {
            $mcqs = $this->paper->mockPaperMcqs()->paginate($limit)->onEachSide(0)->withQueryString();
        } else {
            $mcqs = $this->paper->mcqs()->latest()->paginate($limit)->onEachSide(0)->withQueryString();
        }

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbList = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => url('/papers')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->paper->name, 'item' => url('/papers/' . $this->paper->slug)]];

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
                        @if ($department)
                            <li class="inline-flex gap-1 items-center">
                                <x-heroicon-o-chevron-right class="w-4 h-4" />
                                <a href="{{ route('public.departments.show', $department->slug) }}"
                                    class="hover:text-primary" title="{{ $department->name }}" aria-label="{{ $department->name }}">{{ $department->name }}</a>
                            </li>
                        @endif
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <a href="{{ route('public.papers.index') }}"
                                class="hover:text-primary" title="{{ __('Papers') }}" aria-label="{{ __('Papers') }}">{{ __('Papers') }}</a>
                        </li>
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <span class="font-medium text-primary max-w-sm truncate" title="{{ $paper->name }}" aria-label="{{ $paper->name }}">{{ $paper->name }}</span>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" title="{{ $pageIntro->name }}">
                    {{ $pageIntro->name }}
                </h1>
                @if ($pageIntro->description)
                    <div class="text-xs md:text-base text-justify space-y-3">
                        {!! $pageIntro->description !!}
                    </div>
                @endif
            </div>
            <div class="space-y-2 w-full md:w-1/3">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>

        <section class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 overflow-hidden">
                    <div class="relative">
                        <x-loading target="gotoPage, nextPage, previousPage" message="Loading MCQs..." />
                        <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                            class="space-y-4">
                            @foreach ($mcqs as $mcq)
                                <x-mcq-card :mcq="$mcq" :idx="$loop->index" :route="route('public.mcqs.show', $mcq->slug)" />
                            @endforeach
                        </div>
                    </div>

                    <div class="mt-8">
                        {{ $mcqs->links('vendor.livewire.compact-pagination') }}
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
