import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';
import { Subject, Topic } from '@/types/subject';
import { useForm } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

interface TopicManagementProps {
    subject: Subject;
    topics: Topic[];
}

interface TopicFormData {
    subject_id: number;
    name: string;
    description: string;
    slug: string;
    sort_order: number;
}

const createInitialForm = (subjectId: number): TopicFormData => ({
    subject_id: subjectId,
    name: '',
    description: '',
    slug: '',
    sort_order: 0,
});

export default function TopicManagement({
    subject,
    topics,
}: TopicManagementProps) {
    const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
    const createForm = useForm<TopicFormData>(createInitialForm(subject.id));
    const editForm = useForm<TopicFormData>(createInitialForm(subject.id));
    const [filteredTopics, setFilteredTopics] = useState<Topic[]>(topics);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setFilteredTopics(
            topics.filter((topic) =>
                topic.name.toLowerCase().includes(filter.toLowerCase()),
            ),
        );
    }, [topics, filter]);

    useEffect(() => {
        if (!editingTopic) {
            editForm.reset();
            editForm.clearErrors();
            editForm.setData(createInitialForm(subject.id));
            return;
        }

        editForm.setData({
            subject_id: subject.id,
            name: editingTopic.name,
            description: editingTopic.description ?? '',
            slug: editingTopic.slug,
            sort_order: editingTopic.sort_order ?? 0,
        });

        editForm.clearErrors();
    }, [editingTopic, subject.id]);

    const submitCreate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createForm.post(admin.topics.store().url, {
            preserveScroll: true,
            onSuccess: () => createForm.reset(),
        });
    };

    const submitUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!editingTopic) {
            return;
        }

        editForm.put(admin.topics.update(editingTopic.slug).url, {
            preserveScroll: true,
            onSuccess: () => {
                setEditingTopic(null);
            },
        });
    };

    const deleteTopic = (topic: Topic) => {
        if (
            !window.confirm(
                `Delete "${topic.name}" from ${subject.name}? MCQs linked to this topic will keep their subject but lose the topic assignment.`,
            )
        ) {
            return;
        }

        editForm.delete(admin.topics.destroy(topic.slug).url, {
            preserveScroll: true,
        });
    };

    return (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
            <Card className="max-h-[550px] overflow-y-auto">
                <CardHeader>
                    <CardTitle>Add Topic</CardTitle>
                    <CardDescription>
                        Create a new topic inside {subject.name}.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submitCreate} className="space-y-4">
                        <FieldGroup className="gap-2">
                            <Field>
                                <FieldLabel htmlFor="topic-name">
                                    Topic name
                                </FieldLabel>
                                <Input
                                    id="topic-name"
                                    value={createForm.data.name}
                                    onChange={(event) =>
                                        createForm.setData(
                                            'name',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="Pakistan Geography"
                                />
                                <InputError message={createForm.errors.name} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="topic-slug">
                                    Slug
                                </FieldLabel>
                                <Input
                                    id="topic-slug"
                                    value={createForm.data.slug}
                                    onChange={(event) =>
                                        createForm.setData(
                                            'slug',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="pakistan-geography"
                                />
                                <InputError message={createForm.errors.slug} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="topic-sort-order">
                                    Sort order
                                </FieldLabel>
                                <Input
                                    id="topic-sort-order"
                                    type="number"
                                    min={0}
                                    max={255}
                                    value={createForm.data.sort_order}
                                    onChange={(event) =>
                                        createForm.setData(
                                            'sort_order',
                                            Number(event.target.value || 0),
                                        )
                                    }
                                />
                                <InputError
                                    message={createForm.errors.sort_order}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="topic-description">
                                    Description
                                </FieldLabel>
                                <Textarea
                                    id="topic-description"
                                    rows={4}
                                    value={createForm.data.description}
                                    onChange={(event) =>
                                        createForm.setData(
                                            'description',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="Optional short description for this topic"
                                />
                                <InputError
                                    message={createForm.errors.description}
                                />
                            </Field>
                        </FieldGroup>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={createForm.processing}
                        >
                            <Plus className="h-4 w-4" />
                            {createForm.processing
                                ? 'Creating...'
                                : 'Create Topic'}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="max-h-[550px] overflow-y-auto">
                <CardHeader>
                    <CardTitle>Manage Topics</CardTitle>
                    <CardDescription>
                        Update or delete topics for this subject.
                    </CardDescription>
                    <Input
                        type="text"
                        placeholder="Search topics..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </CardHeader>
                <CardContent className="space-y-4">
                    {filteredTopics.length === 0 ? (
                        <div className="rounded-lg border border-dashed px-4 py-8 text-center text-sm text-muted-foreground">
                            No topics added for this subject yet.
                        </div>
                    ) : (
                        filteredTopics.map((topic) => (
                            <div
                                key={topic.id}
                                className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-start md:justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-base font-semibold">
                                            {topic.name}
                                        </h3>
                                        <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                                            Order {topic.sort_order}
                                        </span>
                                        <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                                            {topic.mcqs_count ?? 0} MCQs
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {topic.description ||
                                            'No description added yet.'}
                                    </p>

                                    <div className="text-xs text-muted-foreground">
                                        Slug: {topic.slug}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setEditingTopic(topic)}
                                    >
                                        <Pencil className="h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => deleteTopic(topic)}
                                        disabled={editForm.processing}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </CardContent>
            </Card>

            <Dialog
                open={editingTopic !== null}
                onOpenChange={(open) => {
                    if (!open) {
                        setEditingTopic(null);
                    }
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Topic</DialogTitle>
                        <DialogDescription>
                            Update the topic details for {subject.name}.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={submitUpdate} className="space-y-5">
                        <FieldGroup className="gap-4">
                            <Field>
                                <FieldLabel htmlFor="edit-topic-name">
                                    Topic name
                                </FieldLabel>
                                <Input
                                    id="edit-topic-name"
                                    value={editForm.data.name}
                                    onChange={(event) =>
                                        editForm.setData(
                                            'name',
                                            event.target.value,
                                        )
                                    }
                                />
                                <InputError message={editForm.errors.name} />
                            </Field>

                            {/* edit slug */}
                            <Field>
                                <FieldLabel htmlFor="edit-topic-slug">
                                    Topic slug
                                </FieldLabel>
                                <Input
                                    id="edit-topic-slug"
                                    value={editForm.data.slug}
                                    onChange={(event) =>
                                        editForm.setData(
                                            'slug',
                                            event.target.value,
                                        )
                                    }
                                />
                                <InputError message={editForm.errors.slug} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="edit-topic-sort-order">
                                    Sort order
                                </FieldLabel>
                                <Input
                                    id="edit-topic-sort-order"
                                    type="number"
                                    min={0}
                                    max={255}
                                    value={editForm.data.sort_order}
                                    onChange={(event) =>
                                        editForm.setData(
                                            'sort_order',
                                            Number(event.target.value || 0),
                                        )
                                    }
                                />
                                <InputError
                                    message={editForm.errors.sort_order}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="edit-topic-description">
                                    Description
                                </FieldLabel>
                                <Textarea
                                    id="edit-topic-description"
                                    rows={4}
                                    value={editForm.data.description}
                                    onChange={(event) =>
                                        editForm.setData(
                                            'description',
                                            event.target.value,
                                        )
                                    }
                                />
                                <InputError
                                    message={editForm.errors.description}
                                />
                            </Field>
                        </FieldGroup>

                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setEditingTopic(null)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={editForm.processing || !editingTopic}
                            >
                                {editForm.processing
                                    ? 'Saving...'
                                    : 'Update Topic'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
