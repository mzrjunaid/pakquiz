@props(['route', 'label', 'icon', 'params' => []])

<div class="group flex items-center gap-1 text-sm">
    <x-dynamic-component :component="$icon"
        class="h-4 w-4 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    <a href="{{ route($route, $params) }}"
        class="my-2 text-sm line-clamp-1 group-hover:text-primary group-hover:translate-x-1 transition-all">
        {{ $label }}
    </a>
</div>
