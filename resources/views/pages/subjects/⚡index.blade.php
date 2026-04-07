<?php

use Livewire\Component;
use App\Models\Page;
use App\Models\Subject;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Http\Resources\Public\Subject\SubjectIndexCollection;
use App\Http\Resources\Public\Subject\SubjectIndexResource;

new class extends Component {
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_subjects', 86400, fn() => SeoData::fromModel(Page::where('key', 'subjects')->with('seo')->firstOrFail()));
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

<div>
    @teleport('head')
        <script type="application/ld+json">
        {!! json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row py-6 md:py-12 md:px-0">
            <div class="space-y-2 md:space-y-4 w-full md:w-2/3">
                <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                    <ol class="inline-flex items-center md:space-x-1">
                        <li class="inline-flex flex gap-1 items-center">
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
                <h1 class="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold" wire:ignore.self title="{{ $pageIntro->title }}">
                    {{ $pageIntro->title }}
                </h1>
                <div class="text-sm md:text-lg lg:text-xl">{!!  $pageIntro->description !!}</div>
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
                        <x-loading target="gotoPage, nextPage, previousPage" message="Loading Subjects..." />
                        <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                            class="space-y-4">
                            @foreach ($subjects as $subject)
                                <x-subject-card :subject="$subject" />
                            @endforeach
                        </div>
                    </div>

                    <div class="mt-8">
                        {{ $subjects->links('vendor.livewire.compact-pagination') }}
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
