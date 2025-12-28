<?php

namespace Database\Factories;

use App\Models\Mcq;
use App\Models\McqOption;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\McqOption>
 */
class McqOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = McqOption::class;

    public function definition(): array
    {

        $mcq = Mcq::query()->inRandomOrder()->first();
        return [
            'mcq_id' => $mcq?->id ?? Mcq::factory(),

            'option_text' => $this->faker->sentence(6),
            'is_correct' => $this->faker->boolean(25), // 25% chance correct
            'sort_order' => $this->faker->numberBetween(1, 4), // 4 options per MCQ
        ];
    }
}
