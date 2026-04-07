<?php

use App\Http\Resources\Public\Dept\DepartmentIndexCollection;
use Livewire\Component;
use App\Models\Page;
use App\Support\SeoData;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;
use App\Models\Department;

new class extends Component {
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_departments', 86400, fn() => SeoData::fromModel(Page::where('key', 'departments')->with('seo')->firstOrFail()));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $departments = Department::query()
            ->select('id', 'name', 'slug', 'description', 'created_at')
            ->withCount('papers')
            ->has('papers', '>', 0)
            ->latest('created_at')
            ->paginate($limit)
            ->onEachSide(0)
            ->withQueryString();

        $resource = DepartmentIndexCollection::make($departments);

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
                ['@type' => 'ListItem', 'position' => 2, 'name' => 'All Departments', 'item' => url('/departments')],
            ],
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'departments' => $resource,
            'pageIntro' => Page::firstWhere('key', 'departments'),
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
        {!!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
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
                                <span class="font-medium text-primary">{{ __('All Departments') }}</span>
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
                <div class="lg:col-span-2 overflow-hidden">
                    <div class="relative">
                        <x-loading target="gotoPage, nextPage, previousPage" message="Loading Departments..." />
                        <div wire:loading.class="opacity-20 pointer-events-none transition-opacity duration-300"
                            class="space-y-4">
                            @foreach ($departments as $department)
                            <x-department-card :department="$department" />
                            @endforeach
                        </div>
                    </div>

                    <div class="mt-8">
                        {{ $departments->links('vendor.livewire.compact-pagination') }}
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