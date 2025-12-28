<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Department>
 */
class DepartmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Department::class;

    public function definition(): array
    {

        $name = $this->faker->unique()->company;

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(12),
            'type' => $this->faker->randomElement(['private', 'government']),
            'created_by' => User::query()->inRandomOrder()->first()->id ?? User::factory(),
        ];
    }
}
