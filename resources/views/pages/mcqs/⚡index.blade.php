<?php

use App\Http\Resources\Frontend\Mcq\McqIndexCollection;
use App\Models\Mcq;
use App\Models\Page;
use App\Support\SeoData;
use App\Support\SchemaGenerator;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component {
    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $mcqs = Mcq::query()->latest()->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All MCQs', 'item' => url('/mcqs')]],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'mcqs' => $resource,
            'pageIntro' => Page::firstWhere('key', 'mcqs'),
            'schema' => $combinedSchema,
        ];
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_mcqs', 86400, fn() => SeoData::fromModel(Page::where('key', 'mcqs')->with('seo')->firstOrFail()));
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
                    <li class="inline-flex items-center">
                        <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mx-2">/</span>
                            <span class="font-medium text-primary">{{ __('MCQs') }}</span>
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
        <div class="prose prose-sm md:prose-base lg:prose-lg space-y-3 max-w-none w-full">{!! str($pageIntro->description)->markdown() !!}</div>
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
    </x-slot:pageMain>
    <x-slot:pageAside>
        <x-aside>
            <livewire:aside.current-affairs />
            <livewire:aside.latest-papers />
            <livewire:aside.latest-subjects />
        </x-aside>
    </x-slot:pageAside>
</x-display>
