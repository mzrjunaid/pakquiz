@props(['route', 'params' => []])

@php
$active = request()->routeIs($route);
@endphp

<a href="{{ route($route, $params) }}"
    wire:navigate
    {{ $attributes->merge(['class' => 'flex flex-row px-3 py-2 transition-all hover:text-primary' . ($active ? 'text-primary font-bold border-b-2 border-primary' : '')]) }}>
    {{ $slot }}
</a>