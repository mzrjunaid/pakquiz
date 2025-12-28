<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paper>
 */
class PaperFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Paper::class;

    public function definition(): array
    {
        $name = $this->faker->unique()->sentence(3);
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence(15),
            'schedule_at' => $this->faker->dateTimeBetween('-2 months', '+2 months'),
            'is_active' => $this->faker->boolean(90), // 90% active

            'department_id' => Department::query()->inRandomOrder()->first()->id ?? Department::factory(),
            'subject_id' => Subject::query()->inRandomOrder()->first()->id ?? Subject::factory(),
            'testing_service_id' => TestingService::query()->inRandomOrder()->first()->id ?? TestingService::factory(),
            'created_by' => User::query()->inRandomOrder()->first()->id ?? User::factory(),
        ];
    }
}
