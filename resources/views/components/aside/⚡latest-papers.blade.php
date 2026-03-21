<?php

use App\Models\Paper;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function latestPapers()
    {
        return Paper::query()->select('id', 'name', 'slug')->latest()->limit(10)->get();
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
    <p class="mb-3 text-muted-foreground text-sm">Explore the latest papers for FPSC, PPSC, NTS, CSS, PMS and
        other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestPapers as $latestPaper)
            <x-aside.link route="public.papers.show" :params="[$latestPaper->slug]" label="{{ $latestPaper->name }}"
                icon="heroicon-s-chevron-right" />
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.papers.index" class="hover:text-primary underline">
                View All Papers
            </x-nav-link>
        </div>
    </div>
</div>
