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
import { Textarea } from '@/components/ui/textarea';
import admin from '@/routes/admin';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState, type FormEvent } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AdminLayout from '../components/admin-layout';


export default function DepartmentCreate() {
    const { base_url } = usePage().props;
    const [descriptionPreview, setDescriptionPreview] = useState('');

    const form = useForm<{
        name: string;
        slug: string;
        type: string;
        description: string;
        seo_title: string;
        seo_description: string;
        og_title: string;
        og_description: string;
        keywords: string;

        seo_og_image_url: string;
        seo_og_image: string | File;
    }>({
        name: '',
        slug: '',
        type: '',
        description: '',
        seo_title: '',
        seo_description: '',
        og_title: '',
        og_description: '',
        keywords: '',

        seo_og_image_url: '',
        seo_og_image: '',
    });

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.post(admin.departments.store().url, {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout title={`Create Department`}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create Department
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Create a new department.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={admin.departments.index().url}>
                            Back to departments
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
                                    Department Name
                                </FieldLabel>
                                <Input
                                    id="name"
                                    value={form.data.name}
                                    onChange={(event) =>
                                        form.setData('name', event.target.value)
                                    }
                                    placeholder="Enter department name"
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
                                        placeholder="department-slug"
                                    />
                                    <InputError message={form.errors.slug} />
                                </Field>
                                <Field>
                                    <FieldLabel>Type</FieldLabel>
                                    <Select
                                        value={form.data.type}
                                        onValueChange={(value: 'government' | 'private') =>
                                            form.setData('type', value)
                                        }
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {['government', 'private'].map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError
                                        message={form.errors.type}
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
                                    placeholder="Add a short description for this department"
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
                                    placeholder="Add a short SEO title for this department"
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
                                    placeholder="Add a short SEO description for this department"
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
                                    placeholder="Add a short SEO OG title for this department"
                                />
                                <InputError
                                    message={form.errors.og_title}
                                />
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
                                    placeholder="Add a short SEO OG description for this department"
                                />
                                <InputError
                                    message={form.errors.og_description}
                                />
                            </Field>

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
                                <InputError
                                    message={form.errors.keywords}
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
                                    placeholder="Add a short SEO OG image for this department"
                                />
                                <InputError
                                    message={form.errors.seo_og_image}
                                />
                            </Field>
                        </FieldGroup>

                        <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                            <Button type="button" variant="outline" asChild>
                                <Link href={admin.departments.index().url}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button type="submit" disabled={form.processing}>
                                {form.processing ? 'Saving...' : 'Create Department'}
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
