<?php

use App\Models\McqSuggestion;
use Livewire\Component;
use Livewire\Attributes\Validate;

new class extends Component
{
    public int $mcq_id;

    #[Validate('required|string|min:3|max:255')]
    public string $name = '';

    #[Validate('required|email')]
    public string $email = '';

    #[Validate('required|string|min:10|max:1000')]
    public string $suggested_content = '';

    public function submit()
    {
        $this->validate();

        McqSuggestion::create([
            'mcq_id' => $this->mcq_id,
            'user_id' => auth()->check() ? auth()->user()->id : null,
            'name' => auth()->check() ? auth()->user()->name : $this->name,
            'email' => auth()->check() ? auth()->user()->email : $this->email,
            'suggested_content' => $this->suggested_content,
        ]);

        $this->reset(['name', 'email', 'suggested_content']);

        session()->flash('success', 'Thank you for your suggestion!');
    }
};
?>


<div class="rounded-lg bg-card p-6 shadow-md relative">
    <div wire:loading.flex wire:target="submit" class="absolute inset-0 z-50 items-center justify-center bg-white/60 backdrop-blur-[1px] rounded-lg">
        <div class="flex flex-col items-center">
            <svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="mt-2 text-sm font-semibold text-primary">Submitting...</span>
        </div>
    </div>

    <h3 class="mb-2 text-lg font-semibold">🚀 Found an error or have a suggestion?</h3>
    <p class="mb-3 text-muted text-sm">Your feedback helps us keep our MCQs accurate and up-to-date.</p>

    <form wire:submit="submit" class="space-y-4">

        <div class="flex flex-col gap-2">
            <label for="name" class="text-foreground block text-sm font-medium">Name</label>
            <input
                id="name"
                wire:model="name"
                type="text"
                placeholder="Your Full Name..."
                class="w-full px-3 py-2 text-foreground border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-primary hover:border-primary" />

            @error('name') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <div class="flex flex-col gap-2">
            <label for="email" class="text-foreground block text-sm font-medium">Email</label>
            <input
                id="email"
                wire:model="email"
                type="text"
                placeholder="Your Email Address..."
                class="w-full px-3 py-2 text-foreground border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-primary hover:border-primary" />

            @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        <div class="flex flex-col gap-2">
            <label for="suggested_content" class="text-foreground block text-sm font-medium">Suggestion</label>
            <textarea id="suggested_content" wire:model="suggested_content" rows="3" placeholder="Your Suggestion..." class="w-full px-3 py-2 text-foreground border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-primary hover:border-primary"></textarea>
            @error('suggested_content') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
        </div>

        @if (session()->has('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline">{{ session('success') }}</span>
        </div>
        @endif

        @if (session()->has('error'))
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{{ session('error') }}</span>
        </div>
        @endif

        <div class="flex items-center justify-between mt-8">
            <p class="text-sm text-gray-500">We appreciate your contribution to improving the quality of our MCQs.</p>
            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <x-heroicon-s-paper-airplane class="h-4 w-4 mr-2" /> Submit Suggestion
            </button>
        </div>
    </form>

</div>