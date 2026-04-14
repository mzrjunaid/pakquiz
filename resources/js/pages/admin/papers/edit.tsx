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
import type { FormEvent } from 'react';
import AdminLayout from '../components/admin-layout';

interface SelectOption {
    id: number;
    name: string;
}

interface EditablePaper {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    schedule_at: string | null;
    paper_year: number | null;
    department_id: number;
    subject_id: number;
    testing_service_id: number;
    is_active: boolean;
    type: 'official' | 'mock';
}

interface PaperEditProps {
    paper: EditablePaper;
    departments: SelectOption[];
    subjects: SelectOption[];
    testingServices: SelectOption[];
}

export default function PapersEdit({
    paper,
    departments,
    subjects,
    testingServices,
}: PaperEditProps) {
    const form = useForm({
        name: paper.name,
        slug: paper.slug,
        description: paper.description ?? '',
        schedule_at: paper.schedule_at ?? '',
        paper_year: paper.paper_year?.toString() ?? '',
        department_id: paper.department_id.toString(),
        subject_id: paper.subject_id.toString(),
        testing_service_id: paper.testing_service_id.toString(),
        is_active: paper.is_active,
        type: paper.type,
    });

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.put(admin.papers.update(paper.slug).url, {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout title={`Edit Paper - ${paper.name}`}>
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Edit Paper
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Update the paper details used on the admin and
                            public side.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={admin.papers.index().url}>Back to papers</Link>
                    </Button>
                </div>

                <form
                    onSubmit={submit}
                    className="bg-card space-y-6 rounded-xl border p-6 shadow-xs"
                >
                    <FieldGroup className="gap-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <Field>
                                <FieldLabel htmlFor="name">Paper Name</FieldLabel>
                                <Input
                                    id="name"
                                    value={form.data.name}
                                    onChange={(event) =>
                                        form.setData('name', event.target.value)
                                    }
                                    placeholder="Enter paper name"
                                />
                                <InputError message={form.errors.name} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="slug">Slug</FieldLabel>
                                <Input
                                    id="slug"
                                    value={form.data.slug}
                                    onChange={(event) =>
                                        form.setData('slug', event.target.value)
                                    }
                                    placeholder="paper-slug"
                                />
                                <InputError message={form.errors.slug} />
                            </Field>
                        </div>

                        <Field>
                            <FieldLabel htmlFor="description">
                                Description
                            </FieldLabel>
                            <Textarea
                                id="description"
                                value={form.data.description}
                                onChange={(event) =>
                                    form.setData(
                                        'description',
                                        event.target.value,
                                    )
                                }
                                rows={5}
                                placeholder="Add a short description for this paper"
                            />
                            <InputError message={form.errors.description} />
                        </Field>

                        <div className="grid gap-5 md:grid-cols-2">
                            <Field>
                                <FieldLabel htmlFor="schedule_at">
                                    Schedule Date
                                </FieldLabel>
                                <Input
                                    id="schedule_at"
                                    type="date"
                                    value={form.data.schedule_at}
                                    onChange={(event) =>
                                        form.setData(
                                            'schedule_at',
                                            event.target.value,
                                        )
                                    }
                                />
                                <InputError message={form.errors.schedule_at} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="paper_year">
                                    Paper Year
                                </FieldLabel>
                                <Input
                                    id="paper_year"
                                    type="number"
                                    min="1900"
                                    max="2100"
                                    value={form.data.paper_year}
                                    onChange={(event) =>
                                        form.setData(
                                            'paper_year',
                                            event.target.value,
                                        )
                                    }
                                    placeholder="2026"
                                />
                                <InputError message={form.errors.paper_year} />
                            </Field>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            <Field>
                                <FieldLabel>Department</FieldLabel>
                                <Select
                                    value={form.data.department_id}
                                    onValueChange={(value) =>
                                        form.setData('department_id', value)
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map((department) => (
                                            <SelectItem
                                                key={department.id}
                                                value={department.id.toString()}
                                            >
                                                {department.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={form.errors.department_id} />
                            </Field>

                            <Field>
                                <FieldLabel>Subject</FieldLabel>
                                <Select
                                    value={form.data.subject_id}
                                    onValueChange={(value) =>
                                        form.setData('subject_id', value)
                                    }
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
                                <FieldLabel>Testing Service</FieldLabel>
                                <Select
                                    value={form.data.testing_service_id}
                                    onValueChange={(value) =>
                                        form.setData('testing_service_id', value)
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {testingServices.map((service) => (
                                            <SelectItem
                                                key={service.id}
                                                value={service.id.toString()}
                                            >
                                                {service.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError
                                    message={form.errors.testing_service_id}
                                />
                            </Field>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <Field>
                                <FieldLabel>Paper Type</FieldLabel>
                                <Select
                                    value={form.data.type}
                                    onValueChange={(value: 'official' | 'mock') =>
                                        form.setData('type', value)
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="official">
                                            Official
                                        </SelectItem>
                                        <SelectItem value="mock">Mock</SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={form.errors.type} />
                            </Field>

                            <Field className="justify-between rounded-lg border px-4 py-3 md:flex-row md:items-center">
                                <div className="space-y-1">
                                    <FieldLabel htmlFor="is_active">
                                        Active Status
                                    </FieldLabel>
                                    <p className="text-muted-foreground text-sm">
                                        Toggle whether this paper should be
                                        treated as active.
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
                        </div>
                    </FieldGroup>

                    <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                        <Button type="button" variant="outline" asChild>
                            <Link href={admin.papers.index().url}>Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={form.processing}>
                            {form.processing ? 'Saving...' : 'Update Paper'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
