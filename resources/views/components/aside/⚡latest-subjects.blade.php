<?php

use Livewire\Component;
use App\Models\Subject;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function latestSubjects()
    {
        return Subject::query()->select('id', 'name', 'slug')->where('name', '!=', 'N/A')->latest()->take(10)->get();
    }

    public function with(): array
    {
        return [
            'latestSubjects' => $this->latestSubjects,
        ];
    }
};
?>

<div class="rounded-lg bg-card p-6 shadow-md">
    <h2 class="mb-2 text-lg font-semibold">Latest Subjects</h2>
    <p class="mb-3 text-muted-foreground text-sm">Explore the latest subjects for FPSC, PPSC, NTS, CSS, PMS and
        other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestSubjects as $subject)
            <x-aside.link route="public.subject.show" :params="['subject' => $subject->slug]" label="{{ $subject->name }}"
                icon="heroicon-s-book-open" />
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.subject.index" class="hover:text-primary underline">
                View All Subjects
            </x-nav-link>
        </div>
    </div>
</div>
