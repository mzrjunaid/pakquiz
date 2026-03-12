<?php

use App\Http\Resources\Public\Mcq\McqIndexCollection;
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
        $limit = min(max((int)$this->perPage, 5), 100);

        $mcqs = Mcq::query()
            ->latest()
            ->paginate($limit)
            ->withQueryString();

        $resource = McqIndexCollection::make($mcqs);

        $schema = $resource->toItemListSchema(request());

        return [
            'mcqs' => $resource,
            'pageIntro' => Page::firstWhere('key', 'mcqs'),
            'schema' => $schema,
        ];
    }

    #[Computed]
    public function meta()
    {
        return cache()->remember('page_meta_mcqs', 86400, fn() => SeoData::fromModel(Page::where('key', 'mcqs')->with('seo')->firstOrFail()));
    }
};
?>

@dd($schema)


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

    <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-6">{{ $pageIntro->title }}</h1>
            <p class="text-gray-700 mb-8">{{ $pageIntro->content }}</p>

            <div class="mb-6">
                <label for="perPage" class="block text-sm font-medium text-gray-700 mb-2">Items per page:</label>
                <select id="perPage" wire:model.live="perPage" class="border border-gray-300 rounded-md px-3 py-2">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>

            <div class="space-y-4">
                @foreach ($mcqs as $mcq)
                <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h2 class="text-xl font-semibold mb-2">{{ $mcq->question }}</h2>
                    <div class="space-y-2">
                        @foreach ($mcq->options as $option)
                        <div class="flex items-center">
                            <input type="radio" name="option_{{ $mcq->id }}" id="option_{{ $mcq->id }}_{{ $loop->index }}" class="mr-2">
                            <label for="option_{{ $mcq->id }}_{{ $loop->index }}" class="text-gray-700">{{ $option }}</label>
                        </div>
                        @endforeach
                    </div>
                    <div class="mt-4">
                        <span class="text-sm text-gray-500">Correct answer: {{ $mcq->correct_answer }}</span>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="mt-8">
                {{ $mcqs->links() }}
            </div>
        </div>
    </div>
</div>