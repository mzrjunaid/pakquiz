<?php

use App\Http\Resources\Public\Mcq\McqIndexCollection;
use App\Models\Mcq;
use App\Models\Subject;
use App\Models\Topic;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component {
    public Subject $subject;
    public Topic $topic;
    use WithPagination;

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_topic-' . $this->topic->slug, 86400, fn() => SeoData::topicSeo($this->subject, $this->topic));
    }

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $mcqs = Mcq::query()->where('subject_id', $this->subject->id)->where('topic_id', $this->topic->id)->latest()->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbList = [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'All MCQs', 'item' => url('/mcqs')],
            ['@type' => 'ListItem', 'position' => 3, 'name' => $this->subject->name, 'item' => url('/subjects/' . $this->subject->slug)],
            ['@type' => 'ListItem', 'position' => 4, 'name' => $this->topic->name, 'item' => url($this->subject->slug . '/' . $this->topic->slug)]
        ];

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbList,
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'mcqs' => $resource,
            'pageIntro' => $this->meta,
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
                                <a href="{{ route('public.subject.index') }}"
                                    class="hover:text-primary">{{ __('Subjects') }}</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2">/</span>
                                <a href="{{ route('public.subject.show', $subject->slug) }}"
                                    class="hover:text-primary">{{ $subject->name }}</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2">/</span>
                                <span class="font-medium text-primary">{{ $topic->name }}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-base md:text-2xl font-bold" wire:ignore.self title="{{ $pageIntro['title'] }}">
                    {{ $pageIntro['title'] }}
                </h1>
                <p class="text-xs md:text-base text-justify">{{ $pageIntro['description'] }}</p>
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
                    <livewire:aside.latest-subjects />
                    <livewire:aside.current-affairs />
                    <livewire:aside.latest-papers />
                </x-aside>
            </div>
        </section>
    </div>
</div>