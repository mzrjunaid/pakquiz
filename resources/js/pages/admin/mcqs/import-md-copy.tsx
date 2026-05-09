import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import mcqs_import from '@/routes/admin/mcqs_import';
import { useForm } from '@inertiajs/react';
import {
    AlertCircle,
    Check,
    CheckCircle2,
    Copy,
    Eye,
    FileText,
    RefreshCw,
    XCircle,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import AdminLayout from '../components/admin-layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import prompts from '@/constants/prompts';

interface Mcq {
    question: string;
    slug: string;
    difficulty: keyof DIFF_STYLES | string;
    mcq_type: string;
    subject_slug: string;
    topic_slug: string;
    paper_slug: string | null;
    created_by: number;
    tags: string[];
    options: OPTIONS[];
    explanation: string;
}

interface OPTIONS {
    option_text: string;
    is_correct: boolean;
    sort_order: number;
}

interface DIFF_STYLES {
    easy: string;
    medium: string;
    hard: string;
}

// ─── Parser ──────────────────────────────────────────────────────────────────

function parseMcqMarkdown(text: string) {
    const blocks = text
        .split(/\n---+\n?/)
        .map((b) => b.trim())
        .filter(Boolean);
    return blocks.map(parseBlock);
}

function parseBlock(block: string) {
    return {
        question: field(block, 'Question'),
        slug: field(block, 'Slug'),
        difficulty: field(block, 'Difficulty').toLowerCase(),
        mcq_type: field(block, 'MCQ Type').toLowerCase(),
        subject_slug: field(block, 'Subject Slug'),
        topic_slug: field(block, 'Topic Slug'),
        paper_slug: nullable(block, 'Paper Slug'),
        created_by: parseInt(field(block, 'Created By'), 10) || 1,
        tags: parseTags(block),
        options: parseOptions(block),
        explanation: field(block, 'Explanation'),
    };
}

function field(block: string, key: string) {
    const m = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'im'));
    return m ? m[1].trim() : '';
}

function nullable(block: string, key: string) {
    const v = field(block, key);
    return !v || v.toLowerCase() === 'null' ? null : v;
}

function parseTags(block: string) {
    const raw = field(block, 'Tags');
    return raw
        ? raw
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
        : [];
}

function parseOptions(block: string) {
    const afterOptions = block.split(/^Options:\s*$/im)[1];
    if (!afterOptions) return [];
    const section = afterOptions.split(/^Explanation:/im)[0];

    let sortOrder = 0;
    return section
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .reduce((acc: OPTIONS[], line: string) => {
            const isCorrect = /\[correct\]/i.test(line);
            const o: RegExpMatchArray | null = line.match(
                /^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i,
            );
            if (o) {
                sortOrder++;
                acc.push({
                    option_text: o[2].trim(),
                    is_correct: isCorrect,
                    sort_order: sortOrder,
                });
            }
            return acc;
        }, []);
}

// ─── Difficulty badge ────────────────────────────────────────────────────────

function DifficultyBadge({
    difficulty,
}: {
    difficulty: keyof DIFF_STYLES | string;
}) {
    const styles: Record<keyof DIFF_STYLES | string, string> = {
        easy: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
        medium: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
        hard: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
    };
    return (
        <span
            className={cn(
                'rounded-full border px-2 py-0.5 text-xs font-medium capitalize',
                styles[difficulty] ??
                'border-border bg-muted text-muted-foreground',
            )}
        >
            {difficulty}
        </span>
    );
}

// ─── MCQ Card ────────────────────────────────────────────────────────────────

function McqCard({ mcq, index }: { mcq: Mcq; index: number }) {
    const [selected, setSelected] = useState<number | null>(null);

    const handleSelect = (i: number) => {
        if (selected !== null) return;
        setSelected(i);
    };

    const getOptionClass = (opt: OPTIONS, i: number) => {
        const isChosen = selected === i;
        const revealed = selected !== null;
        if (!revealed)
            return 'border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer';
        if (opt.is_correct)
            return 'border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default';
        if (isChosen && !opt.is_correct)
            return 'border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default';
        return 'border-border bg-muted/30 text-muted-foreground cursor-default opacity-50';
    };

    return (
        <Card className="mb-3 shadow-none">
            <CardHeader className="px-4 pt-4 pb-2">
                <div className="flex items-center gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-muted/10 text-xs font-medium text-muted-foreground">
                        {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed font-medium">
                        {mcq.question}
                    </p>
                </div>

                <div className="mt-2 ml-9 flex flex-wrap gap-1.5">
                    {mcq.difficulty && (
                        <DifficultyBadge difficulty={mcq.difficulty} />
                    )}
                    {mcq.mcq_type && (
                        <Badge
                            variant="secondary"
                            className="text-xs capitalize"
                        >
                            {mcq.mcq_type}
                        </Badge>
                    )}
                    {mcq.subject_slug && (
                        <Badge variant="outline" className="text-xs">
                            {mcq.subject_slug}
                        </Badge>
                    )}
                    {mcq.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                            {t}
                        </Badge>
                    ))}
                </div>
            </CardHeader>

            <CardContent className="px-4 pb-4">
                {/* Options — all always visible */}
                <div className="mb-3 flex flex-col gap-2">
                    {mcq.options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={cn(
                                'flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all',
                                getOptionClass(opt, i),
                            )}
                        >
                            <span className="w-4 shrink-0 text-xs font-semibold text-muted-foreground">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1">{opt.option_text}</span>
                            {selected !== null && opt.is_correct && (
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                            )}
                            {selected === i && !opt.is_correct && (
                                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Explanation */}
                {selected !== null && mcq.explanation && (
                    <div className="flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        <p>{mcq.explanation}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

// ─── Main ────────────────────────────────────────────────────────────────────





'use client';
 


import {
    ChevronDown, Sparkles, Settings2,
} from 'lucide-react';
import { PromptConfig } from '@/constants/prompts';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
 
// ─── Types ────────────────────────────────────────────────────────────────────
 
interface Subject {
    id: number;
    name: string;
    slug: string;
}
 
interface Topic {
    id: number;
    name: string;
    slug: string;
    subject_id: number;
}
 
interface Props {
    subjects: Subject[];
    topics: Topic[];
    authUserId?: number;
}
 
// ─── Date scope options ───────────────────────────────────────────────────────
 
const DATE_SCOPE_OPTIONS = [
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Today', value: 'today' },
    { label: 'Last 3 Days', value: 'the last 3 days' },
    { label: 'Last Week', value: 'the last week' },
    { label: 'Last Month', value: 'the last month' },
];
 




export default function McqMdImporter({ subjects, topics, authUserId = 1 }: Props) {
    // ── Inertia form ──
    const { data, setData, post, errors } = useForm<{ json: string }>({ json: '' });
 
    // ── MD / parse state ──
    const [mdText, setMdText] = useState('');
    const [mcqs, setMcqs] = useState<ReturnType<typeof parseMcqMarkdown>>([]);
    const [parseError, setParseError] = useState('');
 
    // ── Copy states ──
    const [copiedPrompt, setCopiedPrompt] = useState(false);
    const [copiedJson, setCopiedJson] = useState(false);
 
    // ── Subject / topic selection ──
    const [selectedSubjectId, setSelectedSubjectId] = useState<number>(
        subjects[0]?.id ?? 0,
    );
    const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
 
    // ── Prompt config ──
    const [quantity, setQuantity] = useState(50);
    const [dateScope, setDateScope] = useState('yesterday');
    const [customInstruction, setCustomInstruction] = useState('');
    const [advancedOpen, setAdvancedOpen] = useState(false);
 
    // ── Derived: filtered topics for current subject ──
    const filteredTopics = useMemo(
        () => topics.filter((t) => t.subject_id === selectedSubjectId),
        [topics, selectedSubjectId],
    );
 
    // ── Derived: current slugs ──
    const selectedSubject = useMemo(
        () => subjects.find((s) => s.id === selectedSubjectId),
        [subjects, selectedSubjectId],
    );
    const selectedTopic = useMemo(
        () => (selectedTopicId ? topics.find((t) => t.id === selectedTopicId) : null),
        [topics, selectedTopicId],
    );
 
    // ── Build prompt ──
    const buildPrompt = useCallback((): string => {
        if (!selectedSubject) return '';
        const promptFn = prompts[selectedSubject.slug];
        if (!promptFn) return `# No prompt template found for: ${selectedSubject.slug}`;
 
        const config: PromptConfig = {
            subjectSlug: selectedSubject.slug,
            topicSlug: selectedTopic?.slug,
            quantity,
            createdBy: authUserId,
            dateScope,
            customInstruction: customInstruction.trim() || undefined,
        };
 
        return promptFn(config);
    }, [selectedSubject, selectedTopic, quantity, dateScope, customInstruction, authUserId]);
 
    // ── Prompt textarea (editable) ──
    const [promptText, setPromptText] = useState<string>(() => buildPrompt());
 
    // ── Regenerate prompt when config changes ──
    useEffect(() => {
        setPromptText(buildPrompt());
    }, [buildPrompt]);
 
    // ── Reset topic when subject changes ──
    useEffect(() => {
        setSelectedTopicId(null);
    }, [selectedSubjectId]);
 
    // ── Derived: block count ──
    const blockCount = useMemo(
        () => mdText.split(/\n---+/).filter(Boolean).length,
        [mdText],
    );
 
    // ── Handlers ──
    const handleParse = useCallback(() => {
        setParseError('');
        try {
            const result = parseMcqMarkdown(mdText);
            if (!result.length) {
                setParseError('No MCQ blocks found. Make sure blocks are separated by ---.');
                return;
            }
            setMcqs(result);
            setData('json', JSON.stringify(result));
            toast.success(`${result.length} MCQ${result.length !== 1 ? 's' : ''} parsed successfully.`);
        } catch (e: any) {
            const msg = 'Parse error: ' + e.message;
            setParseError(msg);
            toast.error(msg);
        }
    }, [mdText, setData]);
 
    const handleImport = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            if (!data.json) {
                toast.error('No data to import. Parse your MCQs first.');
                return;
            }
            post(mcqs_import.store().url, {
                onSuccess: () => toast.success('MCQs imported successfully.'),
                onError: () => toast.error('Import failed. Check errors below.'),
            });
        },
        [data, post],
    );
 
    const handleCopyPrompt = useCallback(() => {
        navigator.clipboard.writeText(promptText);
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 1500);
    }, [promptText]);
 
    const handleCopyJson = useCallback(() => {
        navigator.clipboard.writeText(JSON.stringify(mcqs, null, 2));
        setCopiedJson(true);
        setTimeout(() => setCopiedJson(false), 1500);
    }, [mcqs]);
 
    const handleClear = useCallback(() => {
        setMdText('');
        setMcqs([]);
        setParseError('');
        setData('json', '');
    }, [setData]);
 
    const handleRegeneratePrompt = useCallback(() => {
        setPromptText(buildPrompt());
        toast.success('Prompt regenerated.');
    }, [buildPrompt]);
 
    // ─── Render ───────────────────────────────────────────────────────────────
 
    return (
        <AdminLayout title="Import MD MCQs">
            <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
 
                {/* ── Server-side import errors ── */}
                {errors.json && (
                    <Alert variant="destructive" className="col-span-full">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.json}</AlertDescription>
                    </Alert>
                )}
 
                {/* ════════════════════════════════════════
                    LEFT PANEL — Markdown input + Prompt
                ════════════════════════════════════════ */}
                <div className="flex flex-col gap-3">
 
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            Markdown input
                        </div>
                        <Badge variant="secondary" className="text-xs">
                            {blockCount} block{blockCount !== 1 ? 's' : ''}
                        </Badge>
                    </div>
 
                    {/* Tabs */}
                    <Tabs defaultValue="prompt" className="flex flex-col gap-3">
                        <TabsList className="w-fit bg-muted/10">
                            <TabsTrigger value="md">MD</TabsTrigger>
                            <TabsTrigger value="prompt">
                                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                                Prompt
                            </TabsTrigger>
                        </TabsList>
 
                        {/* ── MD tab ── */}
                        <TabsContent value="md" className="mt-0 flex flex-col gap-2">
                            <div className="min-h-[500px] max-h-[500px] overflow-y-auto">
                                <Textarea
                                    value={mdText}
                                    onChange={(e) => setMdText(e.target.value)}
                                    placeholder="Paste your MCQ markdown here…"
                                    className="min-h-[500px] resize-none font-mono text-xs"
                                />
                            </div>
                            {parseError && (
                                <Alert variant="destructive" className="py-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription className="text-xs">{parseError}</AlertDescription>
                                </Alert>
                            )}
                        </TabsContent>
 
                        {/* ── Prompt tab ── */}
                        <TabsContent value="prompt" className="mt-0 flex flex-col gap-3">
 
                            {/* ── Config row ── */}
                            <div className="flex flex-wrap items-end gap-2">
 
                                {/* Subject */}
                                <div className="flex flex-col gap-1">
                                    <Label className="text-xs text-muted-foreground">Subject</Label>
                                    <Select
                                        value={String(selectedSubjectId)}
                                        onValueChange={(v) => setSelectedSubjectId(Number(v))}
                                    >
                                        <SelectTrigger className="h-8 w-40 text-xs">
                                            <SelectValue placeholder="Subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjects.map((s) => (
                                                <SelectItem key={s.id} value={String(s.id)} className="text-xs">
                                                    {s.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
 
                                {/* Topic */}
                                <div className="flex flex-col gap-1">
                                    <Label className="text-xs text-muted-foreground">
                                        Topic <span className="opacity-50">(optional)</span>
                                    </Label>
                                    <Select
                                        value={selectedTopicId ? String(selectedTopicId) : '__all__'}
                                        onValueChange={(v) =>
                                            setSelectedTopicId(v === '__all__' ? null : Number(v))
                                        }
                                    >
                                        <SelectTrigger className="h-8 w-48 text-xs">
                                            <SelectValue placeholder="All topics" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="__all__" className="text-xs text-muted-foreground">
                                                All topics
                                            </SelectItem>
                                            {filteredTopics.map((t) => (
                                                <SelectItem key={t.id} value={String(t.id)} className="text-xs">
                                                    {t.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
 
                                {/* Quantity */}
                                <div className="flex flex-col gap-1">
                                    <Label className="text-xs text-muted-foreground">Quantity</Label>
                                    <Input
                                        type="number"
                                        min={5}
                                        max={100}
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(5, Math.min(100, Number(e.target.value))))}
                                        className="h-8 w-20 text-xs"
                                    />
                                </div>
 
                                {/* Date scope (shown only for current-affairs subject) */}
                                {selectedSubject?.slug.includes('current-affairs') && (
                                    <div className="flex flex-col gap-1">
                                        <Label className="text-xs text-muted-foreground">Date scope</Label>
                                        <Select value={dateScope} onValueChange={setDateScope}>
                                            <SelectTrigger className="h-8 w-36 text-xs">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {DATE_SCOPE_OPTIONS.map((o) => (
                                                    <SelectItem key={o.value} value={o.value} className="text-xs">
                                                        {o.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
 
                                {/* Spacer */}
                                <div className="flex-1" />
 
                                {/* Actions */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 gap-1.5 text-xs"
                                    onClick={handleRegeneratePrompt}
                                    title="Regenerate prompt from current config"
                                >
                                    <RefreshCw className="h-3.5 w-3.5" />
                                    Reset
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1.5 text-xs"
                                    onClick={handleCopyPrompt}
                                >
                                    {copiedPrompt
                                        ? <><Check className="h-3.5 w-3.5" /> Copied!</>
                                        : <><Copy className="h-3.5 w-3.5" /> Copy prompt</>
                                    }
                                </Button>
                            </div>
 
                            {/* ── Advanced: custom instruction ── */}
                            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                                        <Settings2 className="h-3.5 w-3.5" />
                                        Advanced
                                        <ChevronDown
                                            className={`h-3.5 w-3.5 transition-transform ${advancedOpen ? 'rotate-180' : ''}`}
                                        />
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="flex flex-col gap-1.5 pt-2">
                                    <Label className="text-xs text-muted-foreground">
                                        Custom instruction <span className="opacity-50">(appended to prompt)</span>
                                    </Label>
                                    <Textarea
                                        value={customInstruction}
                                        onChange={(e) => setCustomInstruction(e.target.value)}
                                        placeholder="e.g. Focus only on administrative reforms. Avoid military topics."
                                        className="min-h-[72px] resize-none text-xs"
                                    />
                                </CollapsibleContent>
                            </Collapsible>
 
                            {/* ── Editable prompt textarea ── */}
                            <Textarea
                                value={promptText}
                                onChange={(e) => setPromptText(e.target.value)}
                                placeholder="Prompt will appear here…"
                                className="min-h-[340px] resize-none font-mono text-xs"
                            />
 
                            {/* Info badges */}
                            <div className="flex flex-wrap gap-1.5">
                                {selectedSubject && (
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        subject: {selectedSubject.slug}
                                    </Badge>
                                )}
                                {selectedTopic && (
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        topic: {selectedTopic.slug}
                                    </Badge>
                                )}
                                <Badge variant="secondary" className="text-xs font-mono">
                                    qty: {quantity}
                                </Badge>
                                {selectedSubject?.slug.includes('current-affairs') && (
                                    <Badge variant="secondary" className="text-xs font-mono">
                                        scope: {dateScope}
                                    </Badge>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>
 
                    {/* ── Action buttons ── */}
                    <div className="flex gap-2">
                        <Button onClick={handleParse} className="flex-1">
                            Parse
                        </Button>
                        <Button variant="outline" onClick={handleClear}>
                            Clear
                        </Button>
                    </div>
                </div>
 
                {/* ════════════════════════════════════════
                    RIGHT PANEL — Preview / JSON output
                ════════════════════════════════════════ */}
                <div className="flex flex-col gap-3">
 
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            Output
                        </div>
                        <Badge variant="secondary" className="text-xs">
                            {mcqs.length} MCQ{mcqs.length !== 1 ? 's' : ''}
                        </Badge>
                    </div>
 
                    <Tabs defaultValue="preview" className="flex flex-col gap-3">
                        <TabsList className="w-fit bg-muted/10">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="json">JSON</TabsTrigger>
                        </TabsList>
 
                        {/* ── Preview tab ── */}
                        <TabsContent value="preview" className="mt-0">
                            <ScrollArea className="h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2">
                                {mcqs.length === 0 ? (
                                    <div className="flex h-[500px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
                                        <FileText className="h-6 w-6 opacity-30" />
                                        <span>Paste MD on the left and click Parse</span>
                                    </div>
                                ) : (
                                    mcqs.map((mcq, i) => (
                                        <McqCard key={i} mcq={mcq} index={i} />
                                    ))
                                )}
                            </ScrollArea>
                        </TabsContent>
 
                        {/* ── JSON tab ── */}
                        <TabsContent value="json" className="mt-0 flex flex-col gap-2">
                            <ScrollArea className="h-[500px] max-h-[500px] rounded-lg border bg-muted/20">
                                <pre className="whitespace-pre-wrap break-words p-3 font-mono text-xs leading-relaxed">
                                    {mcqs.length
                                        ? JSON.stringify(mcqs, null, 2)
                                        : '// No MCQs parsed yet'}
                                </pre>
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
 
                    {/* ── Action buttons ── */}
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={handleCopyJson}
                            disabled={!mcqs.length}
                            className="flex-1 gap-2"
                        >
                            {copiedJson
                                ? <><Check className="h-4 w-4" /> Copied!</>
                                : <><Copy className="h-4 w-4" /> Copy JSON</>
                            }
                        </Button>
                        <Button
                            onClick={handleImport}
                            disabled={!data.json}
                            className="flex-1"
                        >
                            Send to import service
                        </Button>
                    </div>
                </div>
 
            </div>
        </AdminLayout>
    );
}
