<?php

use Livewire\Component;

new class extends Component {
    public function with()
    {
        return [
            'nav' => config('navigation.public.nav'),
            'subjects' => config('navigation.public.subjects'),
            'papers' => config('navigation.public.papers'),
            'about_us' => config('navigation.public.about_us'),
        ];
    }
};
?>

<header
    class="w-full relative shadow-sm text-sm not-has-[nav]:hidden sticky top-0 right-0 left-0 z-50 shadow-sm backdrop-blur-lg"
    x-data="{ mobileMenuOpen: false }">
    <div class="flex max-w-7xl px-4 xl:px-0 lg:mx-auto items-center justify-between gap-4">
        <div class="w-full lg:w-lg">
            <a href="{{ route('home') }}" title="PakQuiz" class="text-2xl font-bold ">
                <img src="{{ asset('logo.svg') }}" alt="PakQuiz" class="h-12 w-auto" height="48px" width="112px"
                    loading="lazy" fetchpriority="high" decoding="async" />
            </a>
        </div>

        <nav class="w-full flex justify-start py-3 lg:justify-between items-center gap-4 flex-row-reverse lg:flex-row">
            <div>
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-3">
                    <!-- Regular Link -->
                    <x-nav-link route="home">Home</x-nav-link>

                    <!-- Dropdown Menu -->
                    <div x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false" class="relative">
                        <x-nav-link route="public.subject.index">
                            Subjects
                            <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </x-nav-link>

                        <!-- Dropdown Content -->
                        <div x-show="open" x-transition:enter="transition ease-out duration-200"
                            x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-150"
                            x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                            class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            x-cloak>
                            <div class="py-1">
                                @foreach ($subjects as $item)
                                    <a href="{{ $item['link'] }}"
                                        class="block px-4 py-2 text-sm hover:bg-gray-100">{{ $item['title'] }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <!-- Another Dropdown -->
                    <div x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false" class="relative">
                        <x-nav-link route="public.papers.index">
                            Papers
                            <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </x-nav-link>

                        <div x-show="open" x-transition
                            class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            x-cloak>
                            <div class="py-1">
                                @foreach ($papers as $item)
                                    <a href="{{ $item['link'] }}"
                                        class="block px-4 py-2 hover:rounded text-sm hover:bg-gray-100">{{ $item['title'] }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false" class="relative">
                        <x-nav-link route="aboutUs">
                            About Us
                            <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </x-nav-link>

                        <div x-show="open" x-transition
                            class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            x-cloak>
                            <div class="py-1">
                                @foreach ($about_us as $item)
                                    <a href="{{ $item['link'] }}"
                                        class="block px-4 py-2 hover:rounded text-sm hover:bg-gray-100">{{ $item['title'] }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <x-nav-link route="demo">Demo</x-nav-link>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden flex items-center">
                    <button aria-label="Mobile Menu" name="menu" @click="mobileMenuOpen = !mobileMenuOpen"
                        class="hover:text-primary p-2">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path x-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path x-show="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex items-center gap-4">

                @if (Route::has('login'))
                    @auth
                        <x-nav-link route="admin.dashboard">Dashboard</x-nav-link>
                    @else
                        <x-nav-link route="login">Log in</x-nav-link>

                        @if (Route::has('register'))
                            <x-nav-link route="register" class="hidden md:block">Register</x-nav-link>
                        @endif
                    @endauth
                @endif
                <livewire:quiz-settings :class="'hidden md:block'" />
            </div>
        </nav>
    </div>
    <!-- Mobile Menu -->
    <div x-show="mobileMenuOpen" x-transition class="lg:hidden py-3 absolute shadow-sm bg-background w-full" x-cloak>
        <div class="px-2 space-y-2">
            <!-- Regular Link -->
            <a href="{{ route('home') }}"
                class="block  hover:text-primary w-full hover:bg-gray-100 px-3 py-2 rounded-sm">
                Home
            </a>

            <!-- Dropdown Menu -->
            <div x-data="{ open: false }" @click.away="open = false" class="relative">
                <button aria-label="Subjects" name="subjects" @click="open = !open"
                    class="block  hover:text-primary w-full hover:bg-gray-100 px-3 py-2 flex items-center rounded-sm">
                    Subjects
                    <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Dropdown Content -->
                <div x-show="open" x-transition:enter="transition ease-out duration-200"
                    x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                    x-cloak>
                    <div class="py-1">
                        @foreach ($subjects as $item)
                            <a href="{{ $item['link'] }}"
                                class="block px-4 py-2 text-sm  hover:bg-gray-100 rounded-sm">{{ $item['title'] }}</a>
                        @endforeach
                    </div>
                </div>
            </div>

            <!-- Another Dropdown -->
            <div x-data="{ open: false }" @click.away="open = false" class="relative">
                <button aria-label="Papers" name="papers" @click="open = !open"
                    class="block  hover:text-primary w-full hover:bg-gray-100 px-3 py-2 flex items-center rounded-sm">
                    Papers
                    <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <div x-show="open" x-transition x-cloak>
                    <div class="py-1">
                        @foreach ($papers as $item)
                            <a href="{{ $item['link'] }}"
                                class="block px-4 py-2 hover:rounded text-sm  hover:bg-gray-100 rounded-sm">{{ $item['title'] }}</a>
                        @endforeach
                    </div>
                </div>
            </div>

            <div x-data="{ open: false }" @click.away="open = false" class="relative">
                <button aria-label="About Us" name="about_us" @click="open = !open"
                    class="block w-full  hover:text-primary px-3 py-2 flex items-center hover:bg-gray-100 rounded-sm">
                    About Us
                    <svg class="ml-1 h-5 w-5 transition-transform" :class="{ 'rotate-180': open }" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>

                <div x-show="open" x-transition x-cloak>
                    <div class="py-1">
                        @foreach ($about_us as $item)
                            <a href="{{ $item['link'] }}"
                                class="block px-4 py-2 hover:rounded text-sm  hover:bg-gray-100">{{ $item['title'] }}</a>
                        @endforeach
                    </div>
                </div>
            </div>

            <a href="/demo" class="block  hover:text-primary w-full hover:bg-gray-100 px-3 py-2 rounded-sm">Demo</a>
        </div>
    </div>

</header>



<style>
    [x-cloak] {
        display: none !important;
    }
</style>
