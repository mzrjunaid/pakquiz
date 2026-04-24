<?php

use App\Http\Resources\Frontend\Mcq\McqIndexCollection;
use Livewire\Component;
use App\Models\Page;
use App\Models\Paper;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Http\Resources\Frontend\Paper\PaperIndexCollection;
use App\Models\Department;
use App\Models\Mcq;

new class extends Component {
    public Department $department;
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_department_papers_' . $this->department->id, 86400, fn() => SeoData::departmentSeo($this->department));
    }

    public $papersPerPage = 10;
    public $mcqsPerPage = 5;

    public function updatedPapersPerPage()
    {
        $this->resetPage();
    }

    public function updatedMcqsPerPage()
    {
        $this->resetPage();
    }


    public function with(): array
    {
        $limit = min(max((int) $this->papersPerPage, 5), 100);
        $mcqsLimit = min(max((int) $this->mcqsPerPage, 5), 100);

        $papers = Paper::query()
            ->select('id', 'name', 'slug', 'description', 'created_at', 'department_id', 'subject_id', 'testing_service_id', 'schedule_at', 'paper_year')
            ->where('is_active', 1)
            ->where('department_id', $this->department->id)
            ->with(['department:id,name,slug', 'subject:id,name,slug', 'testingService:id,short_name,slug'])
            ->withCount('mcqs')
            ->has('mcqs', '>', 0)
            ->latest('created_at')
            ->paginate($limit)
            ->onEachSide(0) 
            ->withQueryString();

        $resource = PaperIndexCollection::make($papers);


       $suggestedPapers = Paper::query()
            ->select('id', 'name', 'slug', 'description', 'created_at', 'department_id', 'subject_id', 'testing_service_id', 'schedule_at', 'paper_year')
            ->where('is_active', 1)
            ->with(['department:id,name,slug', 'subject:id,name,slug', 'testingService:id,short_name,slug'])
            ->withCount('mcqs')
            ->has('mcqs', '>', 0)
            ->latest('created_at')
            ->inRandomOrder()
            ->take(5)
            ->get();

        $suggestedPapersResource = PaperIndexCollection::make($suggestedPapers);


        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                'itemListElement' => [
                    ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
                    ['@type' => 'ListItem', 'position' => 2, 'name' => 'Departments', 'item' => url('/departments')],
                    ['@type' => 'ListItem', 'position' => 3, 'name' => $this->department->name, 'item' => url('/departments/' . $this->department->slug)],
                ],
            ],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'papers' => $resource,
            'pageIntro' => $this->department,
            'schema' => $combinedSchema,
            'suggestedPapers' => cache()->remember('suggested_papers_' . $this->department->id, 86400, fn() => $suggestedPapersResource),
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
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport

    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row px-4 py-12 md:px-0">
            <div class="space-y-4 w-full md:w-2/3">
                <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                    <ol class="inline-flex gap-0.5 items-center md:space-x-1">
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-home class="w-4 h-4" />
                            <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                        </li>
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <a href="/departments" class="hover:text-primary">{{ __('All Departments') }}</a>
                        </li>
                        <li class="inline-flex gap-1 items-center">
                            <x-heroicon-o-chevron-right class="w-4 h-4" />
                            <span class="font-medium text-primary">{!! str($pageIntro->name)->title() !!}</span>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" wire:ignore.self title="{{ $pageIntro->name }}">
                    {!! str($pageIntro->name)->title() !!}
                </h1>
                <div class="prose prose-sm md:prose-base lg:prose-lg max-w-none w-full">
                    {!! str($pageIntro->description)->markdown() !!}
                </div>
            </div>
            <div class="space-y-2 w-full md:w-1/3">
                <h2 class="text-sm md:text-base font-bold">Search MCQs, Papers, Topics</h2>
                <livewire:global-search />
            </div>
        </section>

        <section class="pb-12">
            <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 space-y-6 overflow-hidden">
                    <section class="space-y-4">
                        <div class="relative">
                            <x-loading target="gotoPage, nextPage, previousPage" message="Loading Papers..." />
                            <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                                class="space-y-4">
                                @foreach ($papers as $paper)
                                    <x-paper-card :paper="$paper" wire:key="paper-{{ $paper->id }}" />
                                @endforeach
                            </div>
                        </div>
                        <div>
                            {{ $papers->links('vendor.livewire.compact-pagination') }}
                        </div>
                    </section>

                    <section class="space-y-4">
                        <h2 class="text-base md:text-2xl font-bold">Related Papers You Might Like</h2>
                        <div class="space-y-4">
                            @foreach ($suggestedPapers as $paper)
                                <x-paper-card :paper="$paper" wire:key="suggested-paper-{{ $paper->id }}" />
                            @endforeach
                        </div>
                    </section>
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