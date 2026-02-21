<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\Paper;
use App\Models\Mcq;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate scalable sitemap for large datasets';

    public function handle()
    {
        $this->generateStatic();
        $this->generateSubjects();
        $this->generateTopics();
        $this->generatePapers();
        $this->generateMcqs();

        $this->generateIndex();

        $this->info('Large-scale sitemap generated successfully.');
    }

    /* ---------------- STATIC ---------------- */

    private function generateStatic()
    {
        $handle = $this->openFile('sitemap-static.xml');

        $pages = [
            '/' => ['weekly', '1.0'],
            '/about-us' => ['monthly', '0.8'],
            '/contact-us' => ['monthly', '0.8'],
            '/help-center' => ['monthly', '0.7'],
            '/privacy-policy' => ['yearly', '0.5'],
            '/terms-of-service' => ['yearly', '0.5'],
            '/join-us' => ['monthly', '0.8'],
        ];

        foreach ($pages as $uri => [$freq, $priority]) {
            $this->writeUrl(
                $handle,
                url($uri),
                now(),
                $freq,
                $priority
            );
        }

        $this->closeFile($handle);
    }

    /* ---------------- SUBJECTS ---------------- */

    private function generateSubjects()
    {
        $handle = $this->openFile('sitemap-subjects.xml');

        Subject::select('slug', 'updated_at')
            ->chunk(200, function ($subjects) use ($handle) {
                foreach ($subjects as $subject) {
                    $this->writeUrl(
                        $handle,
                        url("/subjects/{$subject->slug}"),
                        $subject->updated_at,
                        'weekly',
                        '0.9'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ---------------- TOPICS ---------------- */

    private function generateTopics()
    {
        $handle = $this->openFile('sitemap-topics.xml');

        Topic::select('slug', 'updated_at')
            ->chunk(200, function ($topics) use ($handle) {
                foreach ($topics as $topic) {
                    $this->writeUrl(
                        $handle,
                        url("/topics/{$topic->slug}"),
                        $topic->updated_at,
                        'weekly',
                        '0.8'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ---------------- PAPERS ---------------- */

    private function generatePapers()
    {
        $handle = $this->openFile('sitemap-papers.xml');

        Paper::select('slug', 'updated_at')
            ->chunk(200, function ($papers) use ($handle) {
                foreach ($papers as $paper) {
                    $this->writeUrl(
                        $handle,
                        url("/papers/{$paper->slug}"),
                        $paper->updated_at,
                        'weekly',
                        '0.8'
                    );
                }
            });

        $this->closeFile($handle);
    }

    /* ---------------- MCQs (Split Automatically) ---------------- */

    private function generateMcqs()
    {
        $fileIndex = 1;
        $urlCount = 0;
        $handle = $this->openFile("sitemap-mcqs-{$fileIndex}.xml");

        Mcq::with(['subject:id,slug', 'topic:id,slug', 'paper:id,slug'])
            ->select('id', 'slug', 'updated_at', 'subject_id', 'topic_id', 'paper_id')
            ->chunk(1000, function ($mcqs) use (&$handle, &$fileIndex, &$urlCount) {

                foreach ($mcqs as $mcq) {

                    if ($urlCount >= 50000) {
                        $this->closeFile($handle);
                        $fileIndex++;
                        $handle = $this->openFile("sitemap-mcqs-{$fileIndex}.xml");
                        $urlCount = 0;
                    }

                    $url = $this->buildMcqUrl($mcq);

                    if (!$url) {
                        continue; // skip broken relations safely
                    }

                    $this->writeUrl(
                        $handle,
                        $url,
                        $mcq->updated_at,
                        'daily',
                        '0.7'
                    );

                    $urlCount++;
                }
            });

        $this->closeFile($handle);
    }

    /* ---------------- INDEX FILE ---------------- */

    private function generateIndex()
    {
        $path = public_path('sitemap.xml');
        $handle = fopen($path, 'w');

        fwrite($handle, '<?xml version="1.0" encoding="UTF-8"?>');
        fwrite($handle, '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

        foreach (glob(public_path('sitemap-*.xml')) as $file) {
            $filename = basename($file);

            fwrite($handle, '<sitemap>');
            fwrite($handle, '<loc>' . url($filename) . '</loc>');
            fwrite($handle, '<lastmod>' . now()->toAtomString() . '</lastmod>');
            fwrite($handle, '</sitemap>');
        }

        fwrite($handle, '</sitemapindex>');
        fclose($handle);
    }

    /* ---------------- HELPERS ---------------- */

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

    private function buildMcqUrl($mcq)
    {
        // If belongs to paper
        if ($mcq->paper) {
            return url("/papers/{$mcq->paper->slug}/mcqs/{$mcq->slug}");
        }

        // If belongs to subject + topic
        if ($mcq->subject && $mcq->topic) {
            return url("/subjects/{$mcq->subject->slug}/topics/{$mcq->topic->slug}/mcqs/{$mcq->slug}");
        }

        // If only subject
        if ($mcq->subject) {
            return url("/subjects/{$mcq->subject->slug}/mcqs/{$mcq->slug}");
        }

        // Orphan fallback
        return url("/mcqs/{$mcq->slug}");
    }
}
