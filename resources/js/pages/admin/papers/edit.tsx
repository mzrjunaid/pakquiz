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
import { SeoMeta } from '@/types/seo';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
    subject_id: number | undefined;
    testing_service_id: number;
    is_active: boolean;
    type: 'official' | 'mock';
    tags: string;
}

interface PaperEditProps {
    paper: EditablePaper;
    departments: SelectOption[];
    subjects: SelectOption[];
    testingServices: SelectOption[];
    paperTags: { name: string; slug: string }[];
    seoData: SeoMeta;
}

export default function PapersEdit({
    paper,
    departments,
    subjects,
    testingServices,
    paperTags,
    seoData,
}: PaperEditProps) {
    const { base_url } = usePage().props;
    const [descriptionPreview, setDescriptionPreview] = useState(
        paper.description ?? '',
    );

    const form = useForm({
        name: paper.name,
        slug: paper.slug,
        description: paper.description ?? '',
        schedule_at: paper.schedule_at ?? '',
        paper_year: paper.paper_year?.toString() ?? '',
        department_id: paper.department_id.toString(),
        subject_id: paper.subject_id?.toString() ?? '',
        testing_service_id: paper.testing_service_id.toString(),
        is_active: paper.is_active,
        type: paper.type,
        tags: paperTags.map((tag) => tag.name).join(','),
        seo_title: seoData?.title ?? '',
        seo_description: seoData?.description ?? '',
        seo_og_title: seoData?.og_title ?? '',
        seo_og_description: seoData?.og_description ?? '',
        seo_og_image: seoData?.og_image ?? '',
    });

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.put(admin.papers.update(paper.slug).url, {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout title={`Edit Paper - ${paper.name}`}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Edit Paper
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Update the paper details used on the admin and
                            public side.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={admin.papers.index().url}>
                            Back to papers
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row">
                    <form
                        onSubmit={submit}
                        className="w-full space-y-6 rounded-xl border bg-card p-6 shadow-xs lg:w-2/3"
                    >
                        <FieldGroup className="gap-5">
                            <Field>
                                <FieldLabel htmlFor="name">
                                    Paper Name
                                </FieldLabel>
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

                            <div className="grid gap-5 md:grid-cols-2">
                                <Field>
                                    <FieldLabel htmlFor="slug">Slug</FieldLabel>
                                    <Input
                                        id="slug"
                                        value={form.data.slug}
                                        onChange={(event) =>
                                            form.setData(
                                                'slug',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="paper-slug"
                                    />
                                    <InputError message={form.errors.slug} />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="tags">Tags</FieldLabel>
                                    <Input
                                        id="tags"
                                        value={form.data.tags}
                                        onChange={(event) =>
                                            form.setData(
                                                'tags',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="pakistan, geography, current affairs"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Separate tags with commas.
                                    </p>
                                    <InputError message={form.errors.tags} />
                                </Field>
                            </div>

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
                                    <InputError
                                        message={form.errors.schedule_at}
                                    />
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
                                    <InputError
                                        message={form.errors.paper_year}
                                    />
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
                                    <InputError
                                        message={form.errors.department_id}
                                    />
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
                                    <InputError
                                        message={form.errors.subject_id}
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Testing Service</FieldLabel>
                                    <Select
                                        value={form.data.testing_service_id}
                                        onValueChange={(value) =>
                                            form.setData(
                                                'testing_service_id',
                                                value,
                                            )
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
                                        onValueChange={(
                                            value: 'official' | 'mock',
                                        ) => form.setData('type', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="official">
                                                Official
                                            </SelectItem>
                                            <SelectItem value="mock">
                                                Mock
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={form.errors.type} />
                                </Field>

                                <Field className="justify-between rounded-lg border px-4 py-3 md:flex-row md:items-center">
                                    <div className="space-y-1">
                                        <FieldLabel htmlFor="is_active">
                                            Active Status
                                        </FieldLabel>
                                        <p className="text-sm text-muted-foreground">
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
                                    <InputError
                                        message={form.errors.is_active}
                                    />
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="description">
                                    Description
                                </FieldLabel>
                                <Textarea
                                    id="description"
                                    value={form.data.description}
                                    onChange={(event) => {
                                        setDescriptionPreview(
                                            event.target.value,
                                        );
                                        form.setData(
                                            'description',
                                            event.target.value,
                                        );
                                    }}
                                    rows={5}
                                    placeholder="Add a short description for this paper"
                                />
                                <InputError message={form.errors.description} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="seo_title">
                                    SEO Title
                                </FieldLabel>
                                <Input
                                    id="seo_title"
                                    value={form.data.seo_title}
                                    onChange={(event) => {
                                        form.setData(
                                            'seo_title',
                                            event.target.value,
                                        );
                                    }}
                                    placeholder="Add a short SEO title for this paper"
                                />
                                <InputError message={form.errors.seo_title} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="seo_description">
                                    SEO Description
                                </FieldLabel>
                                <Textarea
                                    id="seo_description"
                                    value={form.data.seo_description}
                                    onChange={(event) => {
                                        form.setData(
                                            'seo_description',
                                            event.target.value,
                                        );
                                    }}
                                    rows={5}
                                    placeholder="Add a short SEO description for this paper"
                                />
                                <InputError
                                    message={form.errors.seo_description}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="seo_og_title">
                                    SEO OG Title
                                </FieldLabel>
                                <Input
                                    id="seo_og_title"
                                    value={form.data.seo_og_title}
                                    onChange={(event) => {
                                        form.setData(
                                            'seo_og_title',
                                            event.target.value,
                                        );
                                    }}
                                    placeholder="Add a short SEO OG title for this paper"
                                />
                                <InputError
                                    message={form.errors.seo_og_title}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="seo_og_description">
                                    SEO OG Description
                                </FieldLabel>
                                <Textarea
                                    id="seo_og_description"
                                    value={form.data.seo_og_description}
                                    onChange={(event) => {
                                        form.setData(
                                            'seo_og_description',
                                            event.target.value,
                                        );
                                    }}
                                    rows={5}
                                    placeholder="Add a short SEO OG description for this paper"
                                />
                                <InputError
                                    message={form.errors.seo_og_description}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="seo_og_image">
                                    SEO OG Image
                                </FieldLabel>
                                <Input
                                    type="file"
                                    id="seo_og_image"
                                    accept="image/*"
                                    // value={form.data.seo_og_image}
                                    onChange={(event) => {
                                        form.setData(
                                            'seo_og_image',
                                            event.target.files?.[0] ?? '',
                                        );
                                    }}
                                    placeholder="Add a short SEO OG image for this paper"
                                />
                                <InputError
                                    message={form.errors.seo_og_image}
                                />
                            </Field>
                        </FieldGroup>

                        <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                            <Button type="button" variant="outline" asChild>
                                <Link href={admin.papers.index().url}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button type="submit" disabled={form.processing}>
                                {form.processing ? 'Saving...' : 'Update Paper'}
                            </Button>
                        </div>
                    </form>

                    <div className="w-full rounded-xl border bg-card p-6 shadow-xs lg:w-1/3">
                        <h2 className="mb-2 text-lg font-semibold">
                            Description Preview
                        </h2>
                        <div className="prose prose-sm">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {descriptionPreview}
                            </Markdown>
                        </div>
                    </div>
                </div>

                {paperTags && (
                    <div className="rounded-xl border bg-card p-6 shadow-xs">
                        <h2 className="text-lg font-semibold">Tags</h2>
                        <p className="text-sm text-muted-foreground">
                            Manage tags for this paper.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {paperTags.map((tag) => (
                                <Link
                                    key={tag.slug}
                                    href={'/admin/tags/' + tag.slug}
                                    className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 hover:bg-blue-200"
                                >
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    {form.data.seo_og_image && (
                        <img
                            src={
                                base_url +
                                '/' +
                                form.data.seo_og_image.toString()
                            }
                            alt="OG Image"
                        />
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
