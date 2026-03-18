<?php

use Livewire\Component;

new class extends Component
{
    public $isQuizMode;

    public function mount()
    {
        // Pull the initial value from the session when the component loads
        $this->isQuizMode = session('isQuizMode', false);
    }

    public function updatedIsQuizMode($value)
    {
        // Validation (optional but recommended)
        $this->validate([
            'isQuizMode' => 'boolean',
        ]);

        // Update the session
        session(['isQuizMode' => (bool) $value]);

        // Optional: Dispatch an event if other components need to know
        $this->dispatch('quiz-mode-updated', status: (bool) $value);
    }
};
?>


<div class="flex items-center gap-2">

    {{-- Mode label --}}
    <span class="text-sm font-medium text-muted-foreground">
        {{ $isQuizMode ? 'Quiz' : 'Study' }}
    </span>

    {{-- Loading spinner (replaces icon while saving) --}}
    <span wire:loading wire:target="isQuizMode">
        <x-ri-loader-4-line class="h-5 w-5 animate-spin text-muted-foreground" />
    </span>

    {{-- Toggle icon (hidden while loading) --}}
    <button
        wire:loading.remove wire:target="isQuizMode"
        wire:click="$toggle('isQuizMode')"
        class="text-muted-foreground transition-colors hover:text-primary"
        title="{{ $isQuizMode ? 'Switch to Study Mode' : 'Switch to Quiz Mode' }}">


        @if ($isQuizMode)
        <x-ri-toggle-fill class="h-8 w-8 text-primary" />
        @else
        <x-ri-toggle-line class="h-8 w-8" />
        @endif
    </button>

</div>