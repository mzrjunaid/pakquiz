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
    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $mcqs = Mcq::query()->where('paper_id', $this->paper->id)->latest()->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbList = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Papers', 'item' => url('/papers')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->paper->name, 'item' => url('/papers/' . $this->paper->slug)]];

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbList,
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = [$breadcrumbSchema, $schema];

        return [
            'mcqs' => $resource,
            'pageIntro' => $this->paper,
            'schema' => $combinedSchema,
        ];
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_paper-' . $this->paper->slug, 86400, fn() => SeoData::paperSeo($this->paper));
    }
};
?>



@slot('title')
{{ $this->meta['title'] }}
@endslot

@push('meta')
<meta name="description" content="{{ $this->meta['description'] }}">
<meta name="canonical" content="{{ $this->meta['canonical'] }}">
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
                                <a href="{{ route('public.papers.index') }}"
                                    class="hover:text-primary">{{ __('Papers') }}</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2">/</span>
                                <span class="font-medium text-primary max-w-sm truncate">{{ $paper->name }}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" title="{{ $pageIntro->name }}">
                    {{ $pageIntro->name }}
                </h1>
                @if($pageIntro->description)
                <p class="text-xs md:text-base text-justify">{{ $pageIntro->description }}</p>
                @endif
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
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Latest Papers</h2>
                        <p class="mb-3 text-muted text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
                            other competitive exams in Pakistan.</p>
                        <div class="md:px-2">

                            <div class="flex items-center gap-1 text-sm">
                                <x-heroicon-s-chevron-right class="h-5 w-5" />
                                <a href="#" class="my-2 block">
                                    paper name
                                </a>
                            </div>
                            <div class="text-sm text-right flex justify-end mt-2">
                                <x-nav-link route="public.papers.index" class="text-primary hover:underline">
                                    View All Papers
                                </x-nav-link>
                            </div>
                        </div>
                    </div>
                </x-aside>
            </div>
        </section>
    </div>
</div>