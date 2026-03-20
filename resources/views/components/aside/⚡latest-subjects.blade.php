<?php

use Livewire\Component;
use App\Models\Subject;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function latestSubjects()
    {
        return Subject::latest()->take(10)->get();
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
    <p class="mb-3 text-muted text-sm">Explore the latest subjects for FPSC, PPSC, NTS, CSS, PMS and
        other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestSubjects as $subject)
            <div class="flex items-center gap-1 text-sm">
                <x-heroicon-s-chevron-right class="h-5 w-5" />
                <a href="{{ route('public.subject.show', $subject->slug) }}" class="my-2 block">
                    {{ $subject->name }}
                </a>
            </div>
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <a href="{{ route('public.subject.index') }}" class="text-primary hover:underline">
                View All Subjects
            </a>
        </div>
    </div>
</div>
