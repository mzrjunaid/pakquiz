<?php

namespace Database\Factories;

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mcq>
 */
class McqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Mcq::class;

    public function definition(): array
    {

        $question = $this->faker->sentence(12);
        $subject = Subject::query()->inRandomOrder()->first();
        $topic = Topic::query()->inRandomOrder()->first();
        $paper = Paper::query()->inRandomOrder()->first();
        $user = User::query()->inRandomOrder()->first();



        return [
            'paper_id' => $paper?->id ?? Paper::factory(),
            'subject_id' => $subject?->id ?? Subject::factory(),
            'topic_id' => $topic?->id ?? Topic::factory(),

            'question' => $question,
            'slug' => Str::slug($question),
            'explanation' => $this->faker->paragraph(2),

            'difficulty' => $this->faker->randomElement(['easy', 'medium', 'hard']),
            'mcq_type' => $this->faker->randomElement(['single', 'multiple', 'true_false']),

            'is_active' => $this->faker->boolean(90), // 90% active
            'created_by' => $user?->id ?? User::factory(),
        ];
    }
}
