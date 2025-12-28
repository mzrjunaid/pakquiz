<?php

namespace Database\Factories;

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\SeoMeta;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SeoMeta>
 */
class SeoMetaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = SeoMeta::class;
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'keywords' => implode(',', $this->faker->words(5)),
            'og_title' => $this->faker->sentence(),
            'og_description' => $this->faker->paragraph(),
            'og_image' => $this->faker->imageUrl(800, 600),
            'page_type' => null, // will be set in seeder
            'page_id' => null,   // will be set in seeder
        ];
    }

    /**
     * SEO for MCQ
     */
    public function forMcq(Mcq $mcq)
    {
        return $this->state(function () use ($mcq) {
            return [
                'page_type' => 'mcq',
                'page_id' => $mcq->id,
                'title' => substr($mcq->question, 0, 60), // first 60 chars of question
                'description' => 'Practice this MCQ: ' . substr($mcq->question, 0, 150),
                'keywords' => 'mcq,pak quiz,question',
                'og_title' => 'Pak Quiz MCQ',
                'og_description' => substr($mcq->question, 0, 150),
            ];
        });
    }

    /**
     * SEO for Paper
     */
    public function forPaper(Paper $paper)
    {
        return $this->state(function () use ($paper) {
            return [
                'page_type' => 'paper',
                'page_id' => $paper->id,
                'title' => $paper->name,
                'description' => 'Solve MCQs for ' . $paper->name,
                'keywords' => 'paper,mcq,pak quiz,' . $paper->name,
                'og_title' => $paper->name,
                'og_description' => 'Test yourself with ' . $paper->name . ' paper',
            ];
        });
    }

    /**
     * SEO for Subject
     */
    public function forSubject(Subject $subject)
    {
        return $this->state(function () use ($subject) {
            return [
                'page_type' => 'subject',
                'page_id' => $subject->id,
                'title' => $subject->name,
                'description' => 'Explore MCQs for ' . $subject->name,
                'keywords' => 'subject,mcq,pak quiz,' . $subject->name,
                'og_title' => $subject->name,
                'og_description' => 'Learn and practice ' . $subject->name,
            ];
        });
    }

    /**
     * SEO for Topic
     */
    public function forTopic(Topic $topic)
    {
        return $this->state(function () use ($topic) {
            return [
                'page_type' => 'topic',
                'page_id' => $topic->id,
                'title' => $topic->name,
                'description' => 'Practice MCQs for ' . $topic->name,
                'keywords' => 'topic,mcq,pak quiz,' . $topic->name,
                'og_title' => $topic->name,
                'og_description' => 'Prepare yourself for ' . $topic->name,
            ];
        });
    }

    public function forTestingService(TestingService $testingService)
    {
        return $this->state(function () use ($testingService) {
            return [
                'page_type' => 'service',
                'page_id' => $testingService->id,
                'title' => $testingService->name,
                'description' => 'Practice MCQs for ' . $testingService->name,
                'keywords' => 'ppsc,nts,fpsc,mcq,pak quiz,' . $testingService->name,
                'og_title' => $testingService->name,
                'og_description' => 'Prepare yourself for ' . $testingService->name,
            ];
        });
    }
}
