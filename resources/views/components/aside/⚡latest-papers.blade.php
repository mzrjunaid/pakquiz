<?php

use App\Models\Paper;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function latestPapers()
    {
        return Paper::select('id', 'name', 'slug')->latest()->limit(5)->get();
    }

    public function with(): array
    {
        return [
            'latestPapers' => $this->latestPapers(),
        ];
    }
};
?>


<div class="rounded-lg bg-card p-6 shadow-md">
    <h2 class="mb-2 text-lg font-semibold">Latest Papers</h2>
    <p class="mb-3 text-muted text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
        other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestPapers as $latestPaper)
            <div class="group flex items-center gap-1">
                <x-heroicon-s-chevron-right
                    class="h-4 w-4 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                <a href="{{ route('public.papers.show', $latestPaper->slug) }}"
                    class="my-2 text-sm line-clamp-1 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    {{ $latestPaper->name }}
                </a>
            </div>
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.papers.index" class="text-primary hover:underline">
                View All Papers
            </x-nav-link>
        </div>
    </div>
</div>
