<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Paper;
use App\Models\Mcq;
use App\Models\Department;
use App\Models\TestingService;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate SEO optimized scalable sitemap';

    protected int $maxUrls = 50000;

    public function handle()
    {
        $this->generateStatic();
        $this->generateSubjects();
        $this->generateTopics();
        $this->generateDepartments();
        $this->generateTestingServices();
        $this->generatePapers();
        $this->generateMcqs();
        $this->generateIndex();

        $this->info('Sitemap generated successfully.');
    }

    /* ================= STATIC ================= */

    private function generateStatic()
    {
        $handle = $this->openFile('sitemap-static.xml');

        $pages = [
            route('home') => ['weekly', '1.0'],
            route('demo') => ['monthly', '0.7'],
            route('aboutUs') => ['monthly', '0.6'],
            route('contactUs') => ['monthly', '0.6'],
            route('joinUs') => ['monthly', '0.6'],
            route('privacyPolicy') => ['yearly', '0.3'],
            route('termsOfService') => ['yearly', '0.3'],
            route('helpCenter') => ['monthly', '0.5'],
            route('public.search') => ['weekly', '0.5'],
            route('public.mcqs.index') => ['daily', '0.9'],
            route('public.papers.index') => ['daily', '0.9'],
            route('public.subject.index') => ['weekly', '0.9'],
            route('public.departments.index') => ['weekly', '0.8'],
            route('public.testing_services.index') => ['weekly', '0.8'],
        ];

        foreach ($pages as $url => [$freq, $priority]) {
            $this->writeUrl($handle, $url, now(), $freq, $priority);
        }

        $this->closeFile($handle);
    }

    /* ================= SUBJECTS ================= */

    private function generateSubjects()
    {
        $handle = $this->openFile('sitemap-subjects.xml');

        Subject::select('slug', 'updated_at')
            ->chunk(500, function ($subjects) use ($handle) {
                foreach ($subjects as $subject) {
                    $this->writeUrl(
                        $handle,
                        route('public.subject.show', $subject->slug),
                        $subject->updated_at,
                        'weekly',
                        '0.95'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ================= TOPICS ================= */

    private function generateTopics()
    {
        $handle = $this->openFile('sitemap-topics.xml');

        Topic::with('subject:id,slug')
            ->select('slug', 'updated_at', 'subject_id')
            ->chunk(500, function ($topics) use ($handle) {

                foreach ($topics as $topic) {

                    if (!$topic->subject) continue;

                    $this->writeUrl(
                        $handle,
                        route('public.subject.topic.show', [
                            'subject' => $topic->subject->slug,
                            'topic'   => $topic->slug,
                        ]),
                        $topic->updated_at,
                        'weekly',
                        '0.85'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ================= DEPARTMENTS ================= */

    private function generateDepartments()
    {
        $handle = $this->openFile('sitemap-departments.xml');

        Department::select('slug', 'updated_at')
            ->chunk(200, function ($departments) use ($handle) {
                foreach ($departments as $dept) {
                    $this->writeUrl(
                        $handle,
                        route('public.departments.show', $dept->slug),
                        $dept->updated_at,
                        'weekly',
                        '0.9'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ================= TESTING SERVICES ================= */

    private function generateTestingServices()
    {
        $handle = $this->openFile('sitemap-testing-services.xml');

        TestingService::select('slug', 'updated_at')
            ->chunk(200, function ($services) use ($handle) {
                foreach ($services as $service) {
                    $this->writeUrl(
                        $handle,
                        route('public.testing_services.show', $service->slug),
                        $service->updated_at,
                        'weekly',
                        '0.9'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ================= PAPERS (CANONICAL ONLY) ================= */

    private function generatePapers()
    {
        $handle = $this->openFile('sitemap-papers.xml');

        Paper::select('slug', 'updated_at')
            ->chunk(500, function ($papers) use ($handle) {

                foreach ($papers as $paper) {

                    $this->writeUrl(
                        $handle,
                        route('public.papers.show', $paper->slug),
                        $paper->updated_at,
                        'weekly',
                        '0.8'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ================= MCQS (AUTO SPLIT) ================= */

    private function generateMcqs()
    {
        $fileIndex = 1;
        $urlCount = 0;

        $handle = $this->openFile("sitemap-mcqs-{$fileIndex}.xml");

        Mcq::select('slug', 'updated_at')
            ->chunk(1000, function ($mcqs) use (&$handle, &$fileIndex, &$urlCount) {

                foreach ($mcqs as $mcq) {

                    if ($urlCount >= $this->maxUrls) {
                        $this->closeFile($handle);
                        $fileIndex++;
                        $handle = $this->openFile("sitemap-mcqs-{$fileIndex}.xml");
                        $urlCount = 0;
                    }

                    $this->writeUrl(
                        $handle,
                        route('public.mcqs.show', $mcq->slug),
                        $mcq->updated_at,
                        'daily',
                        '0.6'
                    );

                    $urlCount++;
                }
            });

        $this->closeFile($handle);
    }

    /* ================= SITEMAP INDEX ================= */

    private function generateIndex()
    {
        $path = public_path('sitemap.xml');
        $handle = fopen($path, 'w');

        fwrite($handle, '<?xml version="1.0" encoding="UTF-8"?>');
        fwrite($handle, '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

        foreach (glob(public_path('sitemap-*.xml')) as $file) {

            if (filesize($file) < 200) continue;

            fwrite($handle, '<sitemap>');
            fwrite($handle, '<loc>' . url(basename($file)) . '</loc>');
            fwrite($handle, '<lastmod>' . date(DATE_ATOM, filemtime($file)) . '</lastmod>');
            fwrite($handle, '</sitemap>');
        }

        fwrite($handle, '</sitemapindex>');
        fclose($handle);
    }

    /* ================= HELPERS ================= */

    private function openFile($filename)
    {
        $path = public_path($filename);
        $handle = fopen($path, 'w');

        fwrite($handle, '<?xml version="1.0" encoding="UTF-8"?>');
        fwrite($handle, '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

        return $handle;
    }

    private function closeFile($handle)
    {
        fwrite($handle, '</urlset>');
        fclose($handle);
    }

    private function writeUrl($handle, $loc, $lastmod, $freq, $priority)
    {
        $lastmod = $lastmod ? $lastmod->toAtomString() : now()->toAtomString();

        fwrite($handle, '<url>');
        fwrite($handle, "<loc>{$loc}</loc>");
        fwrite($handle, "<lastmod>{$lastmod}</lastmod>");
        fwrite($handle, "<changefreq>{$freq}</changefreq>");
        fwrite($handle, "<priority>{$priority}</priority>");
        fwrite($handle, '</url>');
    }
}
