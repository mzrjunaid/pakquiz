<?php

namespace Database\Factories;

use App\Models\Subject;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Topic>
 */
class TopicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Topic::class;

    public function definition(): array
    {

        $name = $this->faker->unique()->words(2, true);
        return [
            'name' => $name,
            'slug' => Str::slug($name), // SEO-friendly
            'description' => $this->faker->sentence(12),

            'subject_id' => Subject::query()->inRandomOrder()->first()->id ?? Subject::factory(),
            'created_by' => User::query()->inRandomOrder()->first()->id ?? User::factory(),
        ];
    }
}
