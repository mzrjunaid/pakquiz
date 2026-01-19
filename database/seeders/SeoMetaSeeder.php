<?php

namespace Database\Seeders;

use App\Models\Mcq;
use App\Models\Paper;
use App\Models\SeoMeta;
use App\Models\Subject;
use App\Models\TestingService;
use App\Models\Topic;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class SeoMetaSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedForModels(Mcq::all());
        $this->seedForModels(Paper::all());
        $this->seedForModels(Subject::all());
        $this->seedForModels(Topic::all());
        $this->seedForModels(TestingService::all());
    }

    protected function seedForModels($models): void
    {
        $models->each(function (Model $model) {

            if (method_exists($model, 'seoMeta') && $model->seoMeta()->exists()) {
                return;
            }

            SeoMeta::factory()
                ->forPage($model, $this->seoOverrides($model))
                ->create();
        });
    }

    protected function seoOverrides(Model $model): array
    {
        return match (true) {

            $model instanceof Mcq => [
                'description' => 'Practice this MCQ: ' . str($model->question)->limit(150),
                'keywords'    => 'mcq,pak quiz,question',
            ],

            $model instanceof TestingService => [
                'keywords' => 'ppsc,nts,fpsc,mcq,pak quiz,' . $model->name,
            ],

            default => [],
        };
    }
}
