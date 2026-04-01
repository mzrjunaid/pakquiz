@props([
    'href',
    'target' => '_blank',
    'rel' => 'noopener noreferrer',
    'text' => 'Click Here',
    'icon' => '',
    'class' => '',
])

<a 
    href="{{ $href }}" 
    target="{{ $target }}" 
    rel="{{ $rel }}" 
    class="text-primary hover:underline {{ $class }} group" 
    wire:navigate>
    {{ $text }} 
    @if($icon)
        <x-dynamic-component :component="$icon" class="w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
    @endif
</a>