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
            'year' => date('Y'),
        ];
    }
};
?>

<footer class="py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
            <div class="col-span-2 sm:col-span-3 md:col-span-2 space-y-2">
                <div class="mb-4 flex items-center justify-center space-x-3">
                    <a href="{{ route('home') }}" class="text-2xl font-bold ">
                        <img src="{{ asset('logo.svg') }}" title="PakQuiz" class="h-full w-full md:max-h-24" />
                    </a>
                </div>
                <p class="text-sm text-center">
                    AI-powered MCQ platform for comprehensive exam
                    preparation.
                </p>
                <div class="social-icons flex gap-2 justify-center">
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=61588211743083" target="_blank"
                            rel="noopener noreferrer" title="PakQuiz Facebook">
                            <x-ri-facebook-box-fill name="facebook" class="size-9 text-blue-900 hover:text-blue-700" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@pakquiz-ai" target="_blank" rel="noopener noreferrer"
                            title="PakQuiz Youtube">
                            <x-ri-youtube-fill name="youtube" class="size-9 text-red-600 hover:text-red-400" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.tiktok.com/@pakquiz_ai" target="_blank" rel="noopener noreferrer"
                            title="PakQuiz Tiktok">
                            <x-ri-tiktok-fill name="tiktok" class="size-9 hover:text-gray-600" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/pakquiz_ai" target="_blank" rel="noopener noreferrer"
                            title="PakQuiz Instagram">
                            <x-ri-instagram-line name="instagram"
                                class="size-9 text-orange-600 hover:text-orange-400" />
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="mb-3 font-semibold">
                    Coming Soon Features
                </h3>
                <ul class="space-y-2 text-sm">
                    <li>AI-Enhanced MCQs</li>
                    <li>Mock Tests</li>
                    <li>Custom Tests</li>
                    <li>Subject-Based Practice</li>
                </ul>
            </div>

            <div>
                <h3 class="mb-3 font-semibold">Papers</h3>
                <ul class="space-y-2 text-sm">
                    @foreach ($papers as $item)
                        <li key="{{ $item['title'] }}">
                            <a href="{{ $item['link'] }}"
                                class="hover:text-primary hover:underline">{{ $item['title'] }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>

            <div>
                <h3 class="mb-3 font-semibold">Subjects</h3>
                <ul class="space-y-2 text-sm">
                    @foreach ($subjects as $item)
                        <li key="{{ $item['title'] }}">
                            <a href="{{ $item['link'] }}"
                                class="hover:text-primary hover:underline">{{ $item['title'] }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>

            <div>
                <h3 class="mb-3 font-semibold">Support</h3>
                <ul class="space-y-2 text-sm">
                    @foreach ($about_us as $item)
                        <li key="{{ $item['title'] }}">
                            <a href="{{ $item['link'] }}"
                                class="hover:text-primary hover:underline">{{ $item['title'] }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="mt-8 border-t pt-8 text-center text-sm">
            <p>&copy; {{ $year }} PAKQUIZ.COM. All rights reserved.</p>
            <p>Made with ❤️ by <a href="https://mzrjunaid.github.io" target="_blank"
                    class="hover:text-primary hover:underline">Junaid Mazhar</a></p>
        </div>
    </div>
</footer>
