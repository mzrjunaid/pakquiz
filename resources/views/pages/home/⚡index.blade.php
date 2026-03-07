<?php

use App\Models\Page;
use App\Support\SchemaGenerator;
use App\Support\SeoData;
use Livewire\Component;
use Livewire\Attributes\Title;
use Livewire\Attributes\Computed;

new #[Title('Home')] class extends Component
{
    #[Computed]
    public function meta()
    {
        $page = Page::with('seo')->where('key', 'home')->firstOrFail();
        return SeoData::fromModel($page);
    }

    #[Computed]
    public function schema()
    {
        return SchemaGenerator::website();
    }
};
?>

@push('meta')
<meta name="description" content="{{ $this->meta['description'] }}">
<meta name="canonical" content="{{$this->meta['canonical']}}">
<meta property="og:title" content="{{ $this->meta['og_title'] }}">
<meta property="og:description" content="{{ $this->meta['og_description'] }}">
<meta property="og:image" content="{{ $this->meta['og_image'] }}">
<meta property="og:url" content="{{ $this->meta['canonical'] }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $this->meta['og_title'] }}">
<meta name="twitter:description" content="{{ $this->meta['og_description'] }}">
<meta name="twitter:image" content="{{ $this->meta['og_image'] }}">
@endpush

@slot('schema')
<script type="application/ld+json">
    {
        !!json_encode($this - > schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!
    }
</script>
@endslot

<section class="px-4 pt-6 pb-12 sm:px-6 md:pt-12 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <div>
                <div class="mb-6">
                    AI-Enhanced Learning
                </div>

                <h1 class="mb-6 text-3xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
                    Master MCQs with
                    <span class="block text-muted-foreground/65">
                        Intelligent Practice
                    </span>
                </h1>

                <p class="mb-8 text-sm leading-relaxed md:text-xl">
                    Access thousands of AI-enhanced multiple choice
                    questions across subjects, jobs, and testing
                    services. Practice smarter, not harder.
                </p>

                <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                        class="py-4 text-lg font-semibold transition-all md:!px-8"
                        variant="default"
                        size="lg">
                        <Play class="h-5 w-5" />
                        Start Practicing
                    </button>
                    <button
                        class="py-4 text-lg font-semibold transition-all md:!px-8"
                        variant="outline"
                        size="lg">
                        <Eye class="h-5 w-5" />
                        View Demo
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-6">
                    <div
                        key={index}
                        class="flex items-center rounded-lg bg-card p-4 text-center shadow-md">
                        <div class="flex items-center justify-center rounded-full border-2 p-2.5">
                            <stat.icon class="h-6 w-6" />
                        </div>
                        <div class="w-full">
                            <div class="font-bold md:text-xl">
                                {stat.number}
                            </div>
                            <div class="text-xs md:text-sm">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>