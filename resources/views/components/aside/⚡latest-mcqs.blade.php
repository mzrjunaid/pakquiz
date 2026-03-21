<?php

use App\Models\Mcq;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function latestMcqs()
    {
        return Mcq::query()->select('id', 'question', 'slug')->latest()->limit(5)->get();
    }

    public function with(): array
    {
        return [
            'latestMcqs' => $this->latestMcqs(),
        ];
    }
};
?>


<div class="rounded-lg bg-card p-6 shadow-md">
    <h2 class="mb-2 text-lg font-semibold">Latest MCQs</h2>
    <p class="mb-3 text-muted text-sm">Explore the latest MCQs for FPSC, PPSC, NTS, CSS, PMS and
        other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestMcqs as $latestMcq)
            <div class="group flex items-center gap-1">
                <x-heroicon-s-chevron-right
                    class="h-4 w-4 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                <a href="{{ route('public.mcqs.show', $latestMcq->slug) }}"
                    class="my-2 text-sm line-clamp-1 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    {{ $latestMcq->question }}
                </a>
            </div>
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.mcqs.index" class="text-primary hover:underline">
                View All MCQs
            </x-nav-link>
        </div>
    </div>
</div>
