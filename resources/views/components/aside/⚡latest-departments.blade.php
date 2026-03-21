<?php

use Livewire\Component;
use Livewire\Attributes\Computed;
use App\Models\Department;

new class extends Component {
    #[Computed]
    public function latestDepartments()
    {
        return Department::query()->select('id', 'name', 'slug')->latest()->limit(6)->get();
    }

    public function with()
    {
        return [
            'latestDepartments' => $this->latestDepartments,
        ];
    }
};
?>

<div class="rounded-lg bg-card p-6 shadow-md">
    <h2 class="mb-2 text-lg font-semibold">Latest Departments</h2>
    <p class="mb-3 text-muted-foreground text-sm">Explore the latest departments for FPSC, PPSC, NTS, CSS, PMS
        and other competitive exams in Pakistan.</p>
    <div class="md:px-2">
        @foreach ($latestDepartments as $latestDepartment)
            <x-aside.link route="public.departments.show" :params="[$latestDepartment->slug]" label="{{ $latestDepartment->name }}"
                icon="heroicon-s-chevron-right" />
        @endforeach
        <div class="text-sm text-right flex justify-end mt-2">
            <x-nav-link route="public.departments.index" class="hover:text-primary underline">
                View All Departments
            </x-nav-link>
        </div>
    </div>
</div>
