<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Paper extends Model
{
    /** @use HasFactory<\Database\Factories\PaperFactory> */
    use HasFactory, SoftDeletes, Filterable;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'schedule_at',
        'paper_year',
        'department_id',
        'testing_service_id',
        'subject_id',
        'is_active',
        'created_by'
    ];

    protected $casts = [
        'schedule_at' => 'datetime',
        'is_active' => 'boolean',
        'deleted_at' => 'datetime',
        'paper_year' => 'integer',
        'created_by' => 'integer',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function testingService()
    {
        return $this->belongsTo(TestingService::class, 'testing_service_id');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function mcqs()
    {
        return $this->hasmany(Mcq::class, 'paper_id');
    }

    public function job()
    {
        return $this->belongsTo(JobPosting::class, 'job_id');
    }

    public function syllabus()
    {
        return $this->hasMany(PaperSyllabus::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault([
            'name' => 'Unknown User'
        ]);
    }

    public function scopeWithoutMcqs($query)
    {
        return $query->doesntHave('mcqs');
    }

    public function fullTitle(): string
    {
        $year = $this->schedule_at->format('Y');
        return "$this->name - ($year)";
    }

    public function seo()
    {
        return $this->morphOne(SeoMeta::class, 'page');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function canonicalUrl()
    {
        return route('public.papers.show', $this);
    }

    // Fetch only official past papers
    public function scopeOfficial($query)
    {
        return $query->where('type', 'official');
    }

    // Fetch only mock exams
    public function scopeMock($query)
    {
        return $query->where('type', 'mock');
    }

    // Logic to check if it's dynamic
    public function isDynamic()
    {
        return $this->type === 'mock';
    }

    public function generateMockQuestions()
    {
        $allQuestions = collect();

        foreach ($this->syllabus as $weight) {
            $questions = Mcq::where('subject_id', $weight->subject_id)
                ->inRandomOrder()
                ->limit($weight->question_count)
                ->get();

            $allQuestions = $allQuestions->concat($questions);
        }

        return $allQuestions;
    }
}
