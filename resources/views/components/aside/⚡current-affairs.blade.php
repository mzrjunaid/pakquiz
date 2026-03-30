<?php

use App\Models\Topic;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Computed]
    public function currentAffairs()
    {
        return Topic::query()->select('id', 'name', 'slug', 'subject_id')->with('subject:id,name,slug')->where('subject_id', 39)->latest()->limit(5)->get();
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
    <p class="mb-3 text-muted-foreground text-sm">Stay updated with the latest current affairs for FPSC, PPSC, NTS, CSS,
        PMS
        and other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($currentAffairs as $currentAffair)
            <x-aside.link route="public.subject.topic.show" :params="['subject' => $currentAffair->subject->slug, 'topic' => $currentAffair->slug]" label="{{ $currentAffair->name }}"
                icon="heroicon-s-book-open" />
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.subject.show" :params="['subject' => 'current-affairs-mcqs']" class="hover:text-primary underline">
                View All Current Affairs
            </x-nav-link>
        </div>
    </div>
</div>
