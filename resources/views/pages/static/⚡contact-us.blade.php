<?php

use App\Support\SchemaGenerator;
use Livewire\Component;
use Livewire\Attributes\Validate;
use Livewire\Attributes\Computed;

new class extends Component {
    #[Validate('required|string|min:2|max:100')]
    public string $name = '';

    #[Validate('required|email|max:255')]
    public string $email = '';

    #[Validate('nullable|string|regex:/^[0-9\s\+\-\(\)]{7,20}$/')]
    public string $phone = '';

    #[Validate('required|string|min:3|max:150')]
    public string $subject = '';

    #[Validate('required|string|min:10|max:2000')]
    public string $message = '';

    public bool $submitted = false;

    // Contact details shown in the sidebar
    public string $contactPhone = '+92 300 123 4567';
    public string $contactEmail = 'support@pakquiz.com';

    public function submit(): void
    {
        $this->validate();

        // TODO: replace with Mail::to(...)->send(...) or your notification logic
        // \Mail::to('support@pakquiz.com')->send(new \App\Mail\ContactMail([
        //     'name'    => $this->name,
        //     'email'   => $this->email,
        //     'phone'   => $this->phone,
        //     'subject' => $this->subject,
        //     'message' => $this->message,
        // ]));

        $this->reset(['name', 'email', 'phone', 'subject', 'message']);
        $this->submitted = true;
    }

    #[Computed]
    public function schema()
    {
        return array_merge(SchemaGenerator::website(), SchemaGenerator::contactPage());
    }
};
?>

@slot('canonical')
{{ url('/contact') }}
@endslot

@slot('title')
Contact Us – PakQuiz | MCQs Preparation Support
@endslot

@slot('description')
Have a question or feedback? Contact the PakQuiz team for support with FPSC, PPSC, NTS, CSS & PMS exam preparation. We respond within 24 hours.
@endslot

@slot('keywords')
Contact PakQuiz, MCQs preparation support, FPSC exam help, PPSC exam help, NTS exam help, CSS exam help, PMS exam help, exam preparation platform
@endslot


@slot('image')
{{ asset('images/og-image.png') }}
@endslot


<div class="max-w-7xl mx-auto">
    @teleport('head')
    <script type="application/ld+json">
        {!!json_encode($this->schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}
    </script>
    @endteleport
    <div class="space-y-2 py-4">
        <nav class="flex mb-2 text-sm" aria-label="{{ __('Breadcrumb') }}">
            <ol class="inline-flex items-center md:space-x-1">
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-home class="w-4 h-4" />
                    <a href="/" class="hover:text-primary" title="{{ __('Home') }}" aria-label="{{ __('Home') }}">{{ __('Home') }}</a>
                </li>
                <li class="inline-flex gap-1 items-center">
                    <x-heroicon-o-chevron-right class="w-4 h-4" />
                    <span class="font-medium text-primary" title="{{ __('Contact Us') }}" aria-label="{{ __('Contact Us') }}">{{ __('Contact Us') }}</span>
                </li>
            </ol>
        </nav>
        <x-page-header title="Contact Us"
            description="Have a question or feedback? Reach out to PakQuiz support. We respond within 24 hours." />
    </div>
    <div class="mt-6 grid gap-8 md:grid-cols-3 md:py-8">
        {{-- Contact Information --}}
        <div class="space-y-6 sm:col-span-1 order-2">
            <div class="rounded-lg bg-card p-6 shadow-sm">
                <h2 class="mb-6 text-xl font-semibold">Contact Information</h2>

                <div class="space-y-4">

                    {{-- Phone --}}
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                            <x-ri-phone-fill class="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 class="font-medium">Phone</h3>
                            <p class="mt-1 text-sm text-slate-600">{{ $phone }}</p>
                            <p class="text-sm text-slate-600">Mon-Fri 9am-6pm</p>
                        </div>
                    </div>

                    {{-- Email --}}
                    <div class="flex items-start gap-4">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                            <x-ri-mail-fill class="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h3 class="font-medium">Email</h3>
                            <p class="mt-1 text-sm text-slate-600">{{ $email }}</p>
                            <p class="text-sm text-slate-600">We'll respond within 24hrs</p>
                        </div>
                    </div>

                </div>
            </div>

            {{-- FAQ CTA --}}
            <div class="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-sm">
                <h3 class="mb-2 text-lg font-semibold">Need immediate help?</h3>
                <p class="mb-4 text-sm text-blue-100">
                    Check out our FAQ section or reach out to our support team directly.
                </p>
                <a href="{{ route('helpCenter') }}"
                    class="inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50">
                    Visit FAQ
                </a>
            </div>
        </div>

        {{-- Contact Form --}}
        <div class="md:col-span-2">
            <div class="rounded-lg bg-white p-8 shadow-md">
                <h2 class="mb-2 text-2xl font-semibold">Send us a message</h2>
                <p class="mb-6 text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {{-- Success Alert --}}
                @if ($submitted)
                <div class="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
                    <p class="text-sm text-green-800">
                        Thank you for contacting us! We'll get back to you shortly.
                    </p>
                </div>
                @endif

                <div class="space-y-6">

                    {{-- Name & Email --}}
                    <div class="grid gap-6 md:grid-cols-2">
                        <div class="space-y-2">
                            <label for="name" class="text-sm font-medium text-gray-700">Full Name *</label>
                            <input id="name" type="text" wire:model="name" placeholder="John Doe"
                                class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
                                   {{ $errors->has('name') ? 'border-red-500 focus:ring-red-400' : 'border-gray-300' }}" />
                            @error('name')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium text-gray-700">Email Address *</label>
                            <input id="email" type="email" wire:model="email" placeholder="john@example.com"
                                class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
                                   {{ $errors->has('email') ? 'border-red-500 focus:ring-red-400' : 'border-gray-300' }}" />
                            @error('email')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    {{-- Phone & Subject --}}
                    <div class="grid gap-6 md:grid-cols-2">
                        <div class="space-y-2">
                            <label for="phone" class="text-sm font-medium text-gray-700">Phone Number</label>
                            <input id="phone" type="tel" wire:model="phone" placeholder="0300 123 4567"
                                class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
                                   {{ $errors->has('phone') ? 'border-red-500 focus:ring-red-400' : 'border-gray-300' }}" />
                            @error('phone')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="space-y-2">
                            <label for="subject" class="text-sm font-medium text-gray-700">Subject *</label>
                            <input id="subject" type="text" wire:model="subject" placeholder="How can we help?"
                                class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
                                   {{ $errors->has('subject') ? 'border-red-500 focus:ring-red-400' : 'border-gray-300' }}" />
                            @error('subject')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    {{-- Message --}}
                    <div class="space-y-2">
                        <label for="message" class="text-sm font-medium text-gray-700">Message *</label>
                        <textarea id="message" wire:model="message" placeholder="Tell us more about your inquiry..." rows="6"
                            class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary
                               {{ $errors->has('message') ? 'border-red-500 focus:ring-red-400' : 'border-gray-300' }}"></textarea>
                        @error('message')
                        <p class="text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    {{-- Submit --}}
                    <div class="flex items-center justify-between pt-4">
                        <p class="text-sm text-slate-600">* Required fields</p>
                        <button type="button" wire:click="submit" wire:loading.attr="disabled"
                            class="inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60">
                            <span wire:loading.remove wire:target="submit">
                                <x-ri-send-plane-fill class="mr-2 h-4 w-4 inline" />
                                Send Message
                            </span>
                            <span wire:loading wire:target="submit">
                                <x-ri-loader-2-fill class="mr-2 h-4 w-4 inline animate-spin" />
                                Sending...
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>