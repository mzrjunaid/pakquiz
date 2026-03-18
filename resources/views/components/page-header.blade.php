@props([
'title' => '',
'description' => '',
])

<div>
    <h1 class="text-3xl font-bold">{{ $title }}</h1>
    <p class="text-gray-600">{{ $description }}</p>
</div>