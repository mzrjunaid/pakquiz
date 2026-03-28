<?php

namespace App\Services;

class McqMarkdownParser
{
    /**
     * Parse MD text into the array structure for McqImportService.
     */

    public function parse(string $mdText): array
    {
        $blocks = preg_split('/\n---+\n?/', trim($mdText));
        $blocks = array_values(array_filter(array_map('trim', $blocks)));

        return array_map(fn($block) => $this->parseBlock($block), $blocks);
    }

    private function parseBlock(string $block): array
    {
        return [
            'question' => $this->field($block, 'Question'),
            'slug' => $this->field($block, 'Slug'),
            'difficulty' => strtolower($this->field($block, 'Difficulty')),
            'mcq_type' => strtolower($this->field($block, 'MCQ Type')),
            'subject_slug' => $this->field($block, 'Subject Slug'),
            'topic_slug' => $this->field($block, 'Topic Slug'),
            'paper_slug' => $this->nullable($block, 'Paper Slug'),
            'created_by' => (int)$this->field($block, 'Created By'),
            'tags' => $this->tags($block),
            'options' => $this->options($block),
            'explanation' => $this->field($block, 'Explanation'),
        ];
    }

    private function field(string $block, string $key): string
    {
        preg_match('/^' . preg_quote($key, '/') . ':\s*(.+)$/im', $block, $m);
        return isset($m[1]) ? trim($m[1]) : '';
    }

    private function nullable(string $block, string $key): ?string
    {
        $v = $this->field($block, $key);
        return ($v === '' || strtolower($v) === 'null') ? null : $v;
    }

    private function tags(string $block): array
    {
        $raw = $this->field($block, 'Tags');
        return $raw ? array_values(array_filter(array_map('trim', explode(',', $raw)))) : [];
    }

    private function options(string $block): array
    {
        if (!preg_match('/^Options:\n([\s\S]*?)(?=^Explanation:|$)/im', $block, $m)) {
            return [];
        }

        $options = [];
        foreach (explode("\n", trim($m[1])) as $line) {
            if (!preg_match('/^([A-Z])\)\s+(.+?)(\s+\[correct\])?$/i', trim($line), $o))
                continue;
            $options[] = [
                'letter' => strtoupper($o[1]),
                'text' => trim($o[2]),
                'is_correct' => isset($o[3]) && trim($o[3]) !== '',
            ];
        }

        return $options;
    }
}