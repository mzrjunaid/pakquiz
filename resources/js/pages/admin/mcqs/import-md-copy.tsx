import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import AdminLayout from '../components/admin-layout';
import { Copy, Check, FileText, Eye, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { useForm } from "@inertiajs/react";
import mcqs_import from "@/routes/admin/mcqs_import";
import { toast } from "sonner";

interface Mcq {
    question: string,
    slug: string,
    difficulty: keyof DIFF_STYLES | string,
    mcq_type: string,
    subject_slug: string,
    topic_slug: string,
    paper_slug: string | null,
    created_by: number,
    tags: string[],
    options: OPTIONS[],
    explanation: string
}

interface OPTIONS {
    option_text: string,
    is_correct: boolean,
    sort_order: number
}

interface DIFF_STYLES {
    easy: string;
    medium: string;
    hard: string;
}



// ─── Parser ──────────────────────────────────────────────────────────────────

function parseMcqMarkdown(text: string) {
    const blocks = text.split(/\n---+\n?/).map((b) => b.trim()).filter(Boolean);
    return blocks.map(parseBlock);
}

function parseBlock(block: string) {
    return {
        question: field(block, "Question"),
        slug: field(block, "Slug"),
        difficulty: field(block, "Difficulty").toLowerCase(),
        mcq_type: field(block, "MCQ Type").toLowerCase(),
        subject_slug: field(block, "Subject Slug"),
        topic_slug: field(block, "Topic Slug"),
        paper_slug: nullable(block, "Paper Slug"),
        created_by: parseInt(field(block, "Created By"), 10) || 1,
        tags: parseTags(block),
        options: parseOptions(block),
        explanation: field(block, "Explanation"),
    };
}

function field(block: string, key: string) {
    const m = block.match(new RegExp(`^${key}:\\s*(.+)$`, "im"));
    return m ? m[1].trim() : "";
}

function nullable(block: string, key: string) {
    const v = field(block, key);
    return !v || v.toLowerCase() === "null" ? null : v;
}

function parseTags(block: string) {
    const raw = field(block, "Tags");
    return raw ? raw.split(",").map((t) => t.trim()).filter(Boolean) : [];
}

function parseOptions(block: string) {
    const afterOptions = block.split(/^Options:\s*$/im)[1];
    if (!afterOptions) return [];
    const section = afterOptions.split(/^Explanation:/im)[0];

    let sortOrder = 0;
    return section
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .reduce((acc: OPTIONS[], line: string) => {
            const isCorrect = /\[correct\]/i.test(line);
            const o: RegExpMatchArray | null = line.match(/^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i);
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

function DifficultyBadge({ difficulty }: { difficulty: keyof DIFF_STYLES | string }) {
    const styles: Record<keyof DIFF_STYLES | string, string> = {
        easy: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
        medium: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
        hard: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    };
    return (
        <span className={cn("text-xs px-2 py-0.5 rounded-full border font-medium capitalize", styles[difficulty] ?? "bg-muted text-muted-foreground border-border")}>
            {difficulty}
        </span>
    );
}

// ─── MCQ Card ────────────────────────────────────────────────────────────────

function McqCard({ mcq, index }: { mcq: Mcq, index: number }) {
    const [selected, setSelected] = useState<number | null>(null);

    const handleSelect = (i: number) => {
        if (selected !== null) return;
        setSelected(i);
    };

    const getOptionClass = (opt: OPTIONS, i: number) => {
        const isChosen = selected === i;
        const revealed = selected !== null;
        if (!revealed)
            return "border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer";
        if (opt.is_correct)
            return "border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default";
        if (isChosen && !opt.is_correct)
            return "border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default";
        return "border-border bg-muted/30 text-muted-foreground cursor-default opacity-50";
    };

    return (
        <Card className="mb-3 shadow-none">
            <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-muted/10 text-muted-foreground text-xs font-medium shrink-0 mt-0.5">
                        {index + 1}
                    </span>
                    <p className="text-sm font-medium leading-relaxed">{mcq.question}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {mcq.difficulty && <DifficultyBadge difficulty={mcq.difficulty} />}
                    {mcq.mcq_type && (
                        <Badge variant="secondary" className="text-xs capitalize">{mcq.mcq_type}</Badge>
                    )}
                    {mcq.subject_slug && (
                        <Badge variant="outline" className="text-xs">{mcq.subject_slug}</Badge>
                    )}
                    {mcq.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                    ))}
                </div>
            </CardHeader>

            <CardContent className="px-4 pb-4">
                {/* Options — all always visible */}
                <div className="flex flex-col gap-2 mb-3">
                    {mcq.options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm transition-all",
                                getOptionClass(opt, i)
                            )}
                        >
                            <span className="font-semibold text-xs w-4 shrink-0 text-muted-foreground">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1">{opt.option_text}</span>
                            {selected !== null && opt.is_correct && (
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            )}
                            {selected === i && !opt.is_correct && (
                                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Explanation */}
                {selected !== null && mcq.explanation && (
                    <div className="flex gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-900 text-xs leading-relaxed dark:bg-blue-950/30 dark:border-blue-900 dark:text-blue-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <p>{mcq.explanation}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

// ─── Main ────────────────────────────────────────────────────────────────────


export default function McqMdImporter() {
    const { data, setData, post } = useForm<{
        json: string
    }>()
    const [mdText, setMdText] = useState("");
    const [mcqs, setMcqs] = useState(() => parseMcqMarkdown(mdText));
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const blockCount = mdText.split(/\n---+/).filter(Boolean).length;

    const handleParse = useCallback(() => {
        setError("");
        try {
            const result = parseMcqMarkdown(mdText);
            if (!result.length) {
                setError("No MCQ blocks found. Make sure blocks are separated by ---.");
                return;
            }
            setMcqs(result);
            setData("json", JSON.stringify(result));
            toast.success("MCQs parsed successfully.");
        } catch (e: any) {
            setError("Parse error: " + e.message);
            toast.error("Parse error: " + e.message);
        }
    }, [mdText]);

    const handleImport = useCallback((e: React.FormEvent) => {
        e.preventDefault()

        if (!data.json) {
            setError("No JSON data to import.");
            return;
        }

        data.json = data.json as string

        post(mcqs_import.store().url)
    }, [data, post]);

    const copyJson = useCallback(() => {
        navigator.clipboard.writeText(JSON.stringify(mcqs, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }, [mcqs]);

    return (
        <AdminLayout title="Import MD MCQs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">

                {/* ── Left: textarea ── */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            Markdown input
                        </div>
                        <Badge variant="secondary" className="text-xs">
                            {blockCount} block{blockCount !== 1 ? "s" : ""}
                        </Badge>
                    </div>

                    <Textarea
                        value={mdText}
                        onChange={(e) => setMdText(e.target.value)}
                        placeholder="Paste your MCQ markdown here…"
                        className="flex-1 max-h-[550px] font-mono text-xs resize-none"
                    />

                    {error && (
                        <Alert variant="destructive" className="py-2">
                            <AlertCircle className="w-4 h-4" />
                            <AlertDescription className="text-xs">{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className="flex gap-2">
                        <Button onClick={handleParse} className="flex-1">Parse</Button>
                        <Button
                            variant="outline"
                            onClick={() => { setMdText(""); setMcqs([]); setError(""); }}
                        >
                            Clear
                        </Button>
                    </div>
                </div>

                {/* ── Right: preview / JSON ── */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                            Output
                        </div>
                        <Badge variant="secondary" className="text-xs">
                            {mcqs.length} MCQ{mcqs.length !== 1 ? "s" : ""}
                        </Badge>
                    </div>

                    <Tabs defaultValue="preview" className="flex flex-col gap-3">
                        <TabsList className="w-fit bg-muted/10">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="json">JSON</TabsTrigger>
                        </TabsList>

                        {/* Preview */}
                        <TabsContent value="preview" className="mt-0">
                            <ScrollArea className="h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2">
                                {mcqs.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-[500px] max-h-[500px] text-muted-foreground text-sm gap-2">
                                        <FileText className="w-6 h-6 opacity-30" />
                                        <span>Paste MD on the left and click Parse</span>
                                    </div>
                                ) : (
                                    mcqs.map((mcq, i) => <McqCard key={i} mcq={mcq} index={i} />)
                                )}
                            </ScrollArea>
                        </TabsContent>

                        {/* JSON */}
                        <TabsContent value="json" className="mt-0 flex flex-col gap-2">
                            <ScrollArea className="h-[500px] max-h-[500px] rounded-lg border bg-muted/20">
                                <pre className="p-3 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
                                    {JSON.stringify(mcqs, null, 2)}
                                </pre>
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={copyJson} className="flex-1 gap-2">
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? "Copied!" : "Copy JSON"}
                        </Button>
                        <Button onClick={handleImport} className="flex-1">
                            Send to import service
                        </Button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}