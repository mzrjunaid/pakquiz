@props(['route'])

@php
$active = request()->routeIs($route);
@endphp

<a href="{{ route($route) }}"
    wire:navigate
    {{ $attributes->merge(['class' => 'flex flex-row px-3 py-2 transition-all' . ($active ? 'text-primary font-bold border-b-2 border-primary' : 'hover:text-primary')]) }}>
    {{ $slot }}
</a>