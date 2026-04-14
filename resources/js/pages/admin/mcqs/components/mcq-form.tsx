import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';
import { Link, useForm } from '@inertiajs/react';
import { Plus, Trash2 } from 'lucide-react';
import type { FormEvent } from 'react';

interface SelectOption {
    id: number;
    name: string;
}

interface TopicOption extends SelectOption {
    subject_id: number;
}

interface PaperOption extends SelectOption {
    subject_id: number;
}

interface McqFormOption {
    id?: number;
    option_text: string;
    is_correct: boolean;
    sort_order: number;
}

interface EditableMcq {
    id: number;
    question: string;
    slug: string;
    explanation: string;
    subject_id: number;
    topic_id: number | null;
    paper_id: number | null;
    difficulty: 'easy' | 'medium' | 'hard';
    mcq_type: 'single' | 'multiple' | 'true_false';
    is_active: boolean;
    tags: string;
    options: McqFormOption[];
}

interface McqFormProps {
    mcq: EditableMcq;
    subjects: SelectOption[];
    topics: TopicOption[];
    papers: PaperOption[];
}

const buildEmptyOption = (sortOrder: number): McqFormOption => ({
    option_text: '',
    is_correct: false,
    sort_order: sortOrder,
});

export default function McqForm({
    mcq,
    subjects,
    topics,
    papers,
}: McqFormProps) {
    const form = useForm({
        question: mcq.question,
        slug: mcq.slug,
        explanation: mcq.explanation ?? '',
        subject_id: mcq.subject_id.toString(),
        topic_id: mcq.topic_id ? mcq.topic_id.toString() : 'none',
        paper_id: mcq.paper_id ? mcq.paper_id.toString() : 'none',
        difficulty: mcq.difficulty,
        mcq_type: mcq.mcq_type,
        is_active: mcq.is_active,
        tags: mcq.tags ?? '',
        options:
            mcq.options.length > 0
                ? mcq.options.map((option, index) => ({
                    ...option,
                    sort_order: index + 1,
                }))
                : [buildEmptyOption(1), buildEmptyOption(2)],
    });

    const selectedSubjectId = Number(form.data.subject_id);

    const filteredTopics = topics.filter(
        (topic) => topic.subject_id === selectedSubjectId,
    );

    // const filteredPapers = papers.filter(
    //     (paper) => paper.subject_id === selectedSubjectId,
    // );

    const updateOption = (
        index: number,
        key: keyof McqFormOption,
        value: string | boolean | number,
    ) => {
        form.setData(
            'options',
            form.data.options.map((option, optionIndex) =>
                optionIndex === index ? { ...option, [key]: value } : option,
            ),
        );
    };

    const addOption = () => {
        form.setData('options', [
            ...form.data.options,
            buildEmptyOption(form.data.options.length + 1),
        ]);
    };

    const removeOption = (index: number) => {
        if (form.data.options.length <= 2) {
            return;
        }

        const nextOptions = form.data.options
            .filter((_, optionIndex) => optionIndex !== index)
            .map((option, optionIndex) => ({
                ...option,
                sort_order: optionIndex + 1,
            }));

        form.setData('options', nextOptions);
    };

    const selectCorrectOption = (index: number) => {
        form.setData(
            'options',
            form.data.options.map((option, optionIndex) => ({
                ...option,
                is_correct:
                    form.data.mcq_type === 'multiple'
                        ? optionIndex === index
                            ? !option.is_correct
                            : option.is_correct
                        : optionIndex === index,
            })),
        );
    };

    const handleSubjectChange = (value: string) => {
        form.setData((current) => ({
            ...current,
            subject_id: value,
            topic_id: 'none',
            paper_id: 'none',
        }));
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.transform((data) => ({
            ...data,
            subject_id: Number(data.subject_id),
            topic_id: data.topic_id === 'none' ? null : Number(data.topic_id),
            paper_id: data.paper_id === 'none' ? null : Number(data.paper_id),
            options: data.options.map((option, index) => ({
                option_text: option.option_text,
                is_correct: option.is_correct,
                sort_order: index + 1,
            })),
        }));

        form.put(admin.mcqs.update(mcq.slug).url, {
            preserveScroll: true,
        });
    };

    return (
        <form
            onSubmit={submit}
            className="bg-card space-y-6 rounded-xl border p-6 shadow-xs"
        >
            <FieldGroup className="gap-5">
                <Field>
                    <FieldLabel htmlFor="question">Question</FieldLabel>
                    <Textarea
                        id="question"
                        rows={4}
                        value={form.data.question}
                        onChange={(event) =>
                            form.setData('question', event.target.value)
                        }
                        placeholder="Write the MCQ question"
                    />
                    <InputError message={form.errors.question} />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                    <Field>
                        <FieldLabel htmlFor="slug">Slug</FieldLabel>
                        <Input
                            id="slug"
                            value={form.data.slug}
                            onChange={(event) =>
                                form.setData('slug', event.target.value)
                            }
                            placeholder="mcq-slug"
                        />
                        <InputError message={form.errors.slug} />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="tags">Tags</FieldLabel>
                        <Input
                            id="tags"
                            value={form.data.tags}
                            onChange={(event) =>
                                form.setData('tags', event.target.value)
                            }
                            placeholder="pakistan, geography, current affairs"
                        />
                        <p className="text-muted-foreground text-xs">
                            Separate tags with commas.
                        </p>
                        <InputError message={form.errors.tags} />
                    </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <Field>
                        <FieldLabel>Subject</FieldLabel>
                        <Select
                            value={form.data.subject_id}
                            onValueChange={handleSubjectChange}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                                {subjects.map((subject) => (
                                    <SelectItem
                                        key={subject.id}
                                        value={subject.id.toString()}
                                    >
                                        {subject.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.subject_id} />
                    </Field>

                    <Field>
                        <FieldLabel>Topic</FieldLabel>
                        <Select
                            value={form.data.topic_id}
                            onValueChange={(value) =>
                                form.setData('topic_id', value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">No topic</SelectItem>
                                {filteredTopics.map((topic) => (
                                    <SelectItem
                                        key={topic.id}
                                        value={topic.id.toString()}
                                    >
                                        {topic.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.topic_id} />
                    </Field>

                    <Field>
                        <FieldLabel>Paper</FieldLabel>
                        <Select
                            value={form.data.paper_id}
                            onValueChange={(value) =>
                                form.setData('paper_id', value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select paper" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">No paper</SelectItem>
                                {papers.map((paper) => (
                                    <SelectItem
                                        key={paper.id}
                                        value={paper.id.toString()}
                                    >
                                        {paper.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.paper_id} />
                    </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <Field>
                        <FieldLabel>Difficulty</FieldLabel>
                        <Select
                            value={form.data.difficulty}
                            onValueChange={(value: EditableMcq['difficulty']) =>
                                form.setData('difficulty', value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.difficulty} />
                    </Field>

                    <Field>
                        <FieldLabel>MCQ Type</FieldLabel>
                        <Select
                            value={form.data.mcq_type}
                            onValueChange={(
                                value: EditableMcq['mcq_type'],
                            ) => form.setData('mcq_type', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="single">
                                    Single Choice
                                </SelectItem>
                                <SelectItem value="multiple">
                                    Multiple Choice
                                </SelectItem>
                                <SelectItem value="true_false">
                                    True / False
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.mcq_type} />
                    </Field>
                </div>

                <Field className="justify-between rounded-lg border px-4 py-3 md:flex-row md:items-center">
                    <div className="space-y-1">
                        <FieldLabel htmlFor="is_active">Active Status</FieldLabel>
                        <p className="text-muted-foreground text-sm">
                            Control whether this MCQ should appear in active
                            flows.
                        </p>
                    </div>
                    <Switch
                        id="is_active"
                        checked={form.data.is_active}
                        onCheckedChange={(checked) =>
                            form.setData('is_active', checked)
                        }
                    />
                    <InputError message={form.errors.is_active} />
                </Field>

                <Field>
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                            <FieldLabel>Options</FieldLabel>
                            <p className="text-muted-foreground text-sm">
                                Mark the correct answer from the list below.
                            </p>
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={addOption}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Option
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {form.data.options.map((option, index) => (
                            <div
                                key={index}
                                className="rounded-lg border p-4 space-y-3"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-sm font-medium">
                                        Option {String.fromCharCode(65 + index)}
                                    </span>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeOption(index)}
                                        disabled={form.data.options.length <= 2}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>

                                <Textarea
                                    rows={2}
                                    value={option.option_text}
                                    onChange={(event) =>
                                        updateOption(
                                            index,
                                            'option_text',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="Write option text"
                                />
                                <InputError
                                    message={
                                        form.errors[
                                        `options.${index}.option_text` as keyof typeof form.errors
                                        ]
                                    }
                                />

                                <label className="flex items-center gap-3 text-sm">
                                    <input
                                        type={
                                            form.data.mcq_type === 'multiple'
                                                ? 'checkbox'
                                                : 'radio'
                                        }
                                        name="correct-option"
                                        checked={option.is_correct}
                                        onChange={() => selectCorrectOption(index)}
                                    />
                                    <span>
                                        {form.data.mcq_type === 'multiple'
                                            ? 'Mark as correct answer'
                                            : 'Set as correct answer'}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <InputError message={form.errors.options} />
                </Field>

                <Field>
                    <FieldLabel htmlFor="explanation">Explanation</FieldLabel>
                    <Textarea
                        id="explanation"
                        rows={5}
                        value={form.data.explanation}
                        onChange={(event) =>
                            form.setData('explanation', event.target.value)
                        }
                        placeholder="Explain why the answer is correct"
                    />
                    <InputError message={form.errors.explanation} />
                </Field>
            </FieldGroup>

            <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" asChild>
                    <Link href={admin.mcqs.index().url}>Cancel</Link>
                </Button>
                <Button type="submit" disabled={form.processing}>
                    {form.processing ? 'Saving...' : 'Update MCQ'}
                </Button>
            </div>
        </form>
    );
}
