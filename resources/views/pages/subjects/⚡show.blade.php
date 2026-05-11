<?php

use App\Http\Resources\Frontend\Mcq\McqIndexCollection;
use App\Models\Mcq;
use App\Models\Subject;
use App\Models\Topic;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\WithPagination;

new class extends Component {
    public Subject $subject;
    use WithPagination;

    public $perPage = 10;

    public function updatedPerPage()
    {
        $this->resetPage();
    }

    #[Computed(persist: true, cache: 86400)]
    public function currentAffairs()
    {
        if ($this->subject->slug === 'current-affairs-mcqs') {
            return Topic::where('subject_id', 39)->latest()->get();
        }

        return null;
    }

    #[Computed(persist: true, cache: 86400)]
    public function topics()
    {
        return Topic::where('subject_id', $this->subject->id)->latest()->get();
    }

    public function with(): array
    {
        $limit = min(max((int) $this->perPage, 5), 100);
        $mcqs = Mcq::query()->where('subject_id', $this->subject->id)->latest()->paginate($limit)->onEachSide(0)->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $breadcrumbList = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => url('/')], ['@type' => 'ListItem', 'position' => 2, 'name' => 'All MCQs', 'item' => url('/mcqs')], ['@type' => 'ListItem', 'position' => 3, 'name' => $this->subject->name, 'item' => url('/subjects/' . $this->subject->slug)]];

        $breadcrumbSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $breadcrumbList,
        ];

        $schema = $resource->toItemListSchema(request());

        $combinedSchema = $schema ? [$breadcrumbSchema, $schema] : [$breadcrumbSchema];

        return [
            'mcqs' => $resource,
            'pageIntro' => SeoData::subjectSeo($this->subject),
            'schema' => $combinedSchema,
            'currentAffairs' => $this->currentAffairs,
            'topics' => $this->topics,
        ];
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_subject-' . $this->subject->slug, 86400, fn() => SeoData::subjectSeo($this->subject));
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
        {
            !!json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!
        }
    </script>
    @endteleport
    <div class="max-w-7xl mx-auto px-4 lg:px-0">
        <section class="flex flex-col gap-6 md:flex-row py-6 md:py-12 md:px-0">
            <div class="space-y-4 w-full md:w-2/3">
                <nav class="flex mb-5 text-sm" aria-label="{{ __('Breadcrumb') }}">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2">
                        <li class="inline-flex items-center gap-1">
                            <x-heroicon-o-home class="h-4 w-4" />
                            <a href="/" class="hover:text-primary">{{ __('Home') }}</a>
                        </li>
                        <li>
                            <div class="flex gap-1 items-center">
                                <x-heroicon-o-chevron-right class="h-3 w-3" />
                                <a href="{{ route('public.subject.index') }}"
                                    class="hover:text-primary">{{ __('Subjects') }}</a>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-1 items-center">
                                <x-heroicon-o-chevron-right class="h-3 w-3" />
                                <span class="font-medium text-primary">{{ $subject->name }}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-md sm:text-lg md:text-3xl font-bold" wire:ignore.self title="{{ $pageIntro['title'] }}">
                    {!! str($pageIntro['title'])->title() !!}
                </h1>
                <div class="prose prose-sm md:prose-base lg:prose-lg space-y-3 max-w-none w-full">{!! str($pageIntro['description'])->markdown() !!}</div>
            </div>
            <div class="space-y-2 w-full md:w-1/3">
                <h2 class="text-sm md:text-base lg:text-lg font-bold">Search MCQs, Papers, Topics</h2>
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
                    @if ($currentAffairs)
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Current Affairs</h2>
                        <p class="mb-3 text-muted-foreground text-sm">Stay updated with the latest current affairs
                            for FPSC, PPSC, NTS, CSS,
                            PMS
                            and other competitive exams in Pakistan.</p>
                        <div class="md:px-2">
                            @foreach ($currentAffairs as $currentAffair)
                            <x-aside.link route="public.subject.topic.show" :params="[
                                        'subject' => $currentAffair->subject->slug,
                                        'topic' => $currentAffair->slug,
                                    ]"
                                label="{{ $currentAffair->name }}" icon="heroicon-s-book-open" />
                            @endforeach
                        </div>
                    </div>
                    @else
                    <div class="rounded-lg bg-card p-6 shadow-md">
                        <h2 class="mb-2 text-lg font-semibold">Topics</h2>
                        <p class="mb-3 text-muted-foreground text-sm">Explore topics related to
                            {{ $subject->name }}
                        </p>
                        <div class="md:px-2">
                            @foreach ($topics as $topic)
                            <x-aside.link route="public.subject.topic.show" :params="[
                                        'subject' => $topic->subject->slug,
                                        'topic' => $topic->slug,
                                    ]"
                                label="{{ $topic->name }}" icon="heroicon-s-book-open" />
                            @endforeach
                        </div>
                    </div>
                    <livewire:aside.current-affairs />
                    @endif
                    <livewire:aside.latest-subjects />
                    <livewire:aside.latest-departments />
                    <livewire:aside.latest-papers />
                </x-aside>
            </div>
        </section>
    </div>
</div>
