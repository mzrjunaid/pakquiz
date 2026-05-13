<?php

use Livewire\Component;
use App\Models\Page;
use App\Models\Subject;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Http\Resources\Frontend\Subject\SubjectIndexCollection;

new class extends Component
{
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_subjects', 86400, fn () => SeoData::fromModel(Page::where('key', 'subjects')->with('seo')->firstOrFail()));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $subjects = Subject::select('id', 'name', 'slug', 'description', 'created_at', 'updated_at')->withCount('mcqs')->latest('updated_at')->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = SubjectIndexCollection::make($subjects);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
                ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Subjects', 'item' => url('/subjects')],
            ],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'subjects' => $resource,
            'pageIntro' => Page::firstWhere('key', 'subjects'),
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
    <x-slot:pageHeader>
        @teleport('head')
        <script type="application/ld+json">
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
        @endteleport
        <div class="space-y-2 md:space-y-4 w-full md:w-2/3">
            <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                <ol class="inline-flex items-center md:space-x-1">
                    <li class="inline-flex gap-1 items-center">
                        <x-heroicon-o-home class="h-4 w-4" />
                        <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                    </li>
                    <li>
                        <div class="flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="h-3 w-3" />
                            <span class="font-medium text-primary">{{ __('All Subjects') }}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1 class="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold" wire:ignore.self
                title="{{ $pageIntro->title }}">
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
        <div class="relative mt-4 md:mt-6">
            <x-loading target="gotoPage, nextPage, previousPage" message="Loading Subjects..." />
            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300" class="space-y-4">
                @foreach ($subjects as $subject)
                    <x-subject-card :subject="$subject" />
                @endforeach
            </div>
        </div>

        <div class="mt-8">
            {{ $subjects->links('vendor.livewire.compact-pagination') }}
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
