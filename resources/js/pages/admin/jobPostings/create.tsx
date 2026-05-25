import InputError from '@/components/input-error';
import { MultiSelect } from '@/components/multi-select';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';
import { SeoMeta } from '@/types/seo';
import { Subject } from '@/types/subject';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AdminLayout from '../components/admin-layout';

interface Tags {
    value: number;
    label: string;
    slug: string;
}

interface SubjectEditProps {
    subject: Subject;
    seoData: SeoMeta;
    keywords: string;
    selectedTagSlugs: string[];
    availableTags: Tags[];
}

export default function SubjectCreate({ availableTags }: SubjectEditProps) {
    const { base_url } = usePage().props;
    const [descriptionPreview, setDescriptionPreview] = useState('');

    const form = useForm<{
        name: string;
        slug: string;

        is_active: boolean;
        description: string;
        seo_title: string;
        seo_description: string;
        og_title: string;
        og_description: string;
        keywords: string;
        tags: string[];

        seo_og_image_url: string;
        seo_og_image: File | null;
    }>({
        name: '',
        slug: '',
        description: '',

        is_active: false,
        seo_title: '',
        seo_description: '',
        og_title: '',
        og_description: '',
        keywords: '',
        tags: [],

        seo_og_image_url: '',
        seo_og_image: null,
    });

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.post(admin.subjects.store().url, {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout title={`Create Subject`}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create Subject
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Update the subject details used on the admin and
                            public side.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={admin.subjects.index().url}>
                            Back to subjects
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
                                    Subject Name
                                </FieldLabel>
                                <Input
                                    id="name"
                                    value={form.data.name}
                                    onChange={(event) =>
                                        form.setData('name', event.target.value)
                                    }
                                    placeholder="Enter subject name"
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
                                        placeholder="subject-slug"
                                    />
                                    <InputError message={form.errors.slug} />
                                </Field>
                                <Field className="flex-row justify-between rounded-lg border px-4 py-3 md:flex-row md:items-center">
                                    <FieldLabel htmlFor="is_active">
                                        Active Status
                                    </FieldLabel>
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
                                <FieldLabel htmlFor="og_title">
                                    OG Title
                                </FieldLabel>
                                <Input
                                    id="og_title"
                                    value={form.data.og_title}
                                    onChange={(event) => {
                                        form.setData(
                                            'og_title',
                                            event.target.value,
                                        );
                                    }}
                                    placeholder="Add a short SEO OG title for this paper"
                                />
                                <InputError message={form.errors.og_title} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="og_description">
                                    OG Description
                                </FieldLabel>
                                <Textarea
                                    id="og_description"
                                    value={form.data.og_description}
                                    onChange={(event) => {
                                        form.setData(
                                            'og_description',
                                            event.target.value,
                                        );
                                    }}
                                    rows={5}
                                    placeholder="Add a short SEO OG description for this paper"
                                />
                                <InputError
                                    message={form.errors.og_description}
                                />
                            </Field>

                            <div className="grid gap-2">
                                <Field>
                                    <FieldLabel htmlFor="tags">Tags</FieldLabel>
                                    <MultiSelect
                                        data={availableTags.map(
                                            (tag) => tag.slug,
                                        )}
                                        value={form.data.tags}
                                        onChange={(values) =>
                                            form.setData('tags', values)
                                        }
                                    />
                                    <InputError message={form.errors.tags} />
                                </Field>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">
                                        Add tags to this testing service to help
                                        users find it when searching or
                                        browsing.
                                    </p>
                                </div>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="keywords">
                                    Keywords
                                </FieldLabel>
                                <Textarea
                                    id="keywords"
                                    value={form.data.keywords}
                                    onChange={(event) => {
                                        form.setData(
                                            'keywords',
                                            event.target.value,
                                        );
                                    }}
                                    rows={5}
                                    placeholder="Add a short SEO keywords separated by commas"
                                />
                                <InputError message={form.errors.keywords} />
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
                                            event.target.files?.[0] ?? null,
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
                                <Link href={admin.subjects.index().url}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button type="submit" disabled={form.processing}>
                                {form.processing
                                    ? 'Saving...'
                                    : 'Update Subject'}
                            </Button>
                        </div>
                    </form>

                    <div className="w-full rounded-xl border bg-card p-6 shadow-xs lg:w-1/3">
                        <h2 className="mb-2 text-lg font-semibold">
                            Description Preview
                        </h2>
                        <div className="prose prose-sm dark:text-gray-200">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {descriptionPreview}
                            </Markdown>
                        </div>
                    </div>
                </div>

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
