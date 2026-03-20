<?php

use App\Models\Topic;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function currentAffairs()
    {
        return Topic::select('id', 'name', 'slug', 'subject_id')->with('subject:id,name,slug')->where('subject_id', 39)->latest()->limit(5)->get();
    }

    public function with()
    {
        return [
            'currentAffairs' => $this->currentAffairs,
        ];
    }
};
?>

<div class="rounded-lg bg-card p-6 shadow-md">
    <h2 class="mb-2 text-lg font-semibold">Current Affairs</h2>
    <p class="mb-3 text-muted text-sm">Stay updated with the latest current affairs for FPSC, PPSC, NTS, CSS, PMS
        and other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($currentAffairs as $currentAffair)
            <div class="group flex items-center gap-1">
                <x-heroicon-s-chevron-right
                    class="h-4 w-4 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                <a href="{{ route('public.subject.topic.show', ['subject' => $currentAffair->subject->slug, 'topic' => $currentAffair->slug]) }}"
                    class="my-2 text-sm line-clamp-1 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    {{ $currentAffair->name }}
                </a>
            </div>
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.mcqs.index" class="text-primary hover:underline">
                View All Current Affairs
            </x-nav-link>
        </div>
    </div>
</div>
