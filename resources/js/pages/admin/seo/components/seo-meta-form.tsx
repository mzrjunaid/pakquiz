import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import seo from '@/routes/admin/seo';
import {
    SeoMeta,
    SeoPageOption,
    SeoPageOptions,
    SeoPageTypeOption,
} from '@/types/seo';
import { Link, useForm } from '@inertiajs/react';
import { FormEvent, useMemo } from 'react';

type SeoMetaFormData = {
    title: string;
    description: string;
    keywords: string;
    og_title: string;
    og_description: string;
    og_image: string;
    page_type: string;
    page_id: string;
};

interface SeoMetaFormProps {
    mode: 'create' | 'edit';
    pageTypeOptions: SeoPageTypeOption[];
    pageOptions: SeoPageOptions;
    seoMeta?: SeoMeta;
}

export default function SeoMetaForm({
    mode,
    pageTypeOptions,
    pageOptions,
    seoMeta,
}: SeoMetaFormProps) {
    const form = useForm<SeoMetaFormData>({
        title: seoMeta?.title ?? '',
        description: seoMeta?.description ?? '',
        keywords: seoMeta?.keywords ?? '',
        og_title: seoMeta?.og_title ?? '',
        og_description: seoMeta?.og_description ?? '',
        og_image: typeof seoMeta?.og_image === 'string' ? seoMeta.og_image : '',
        page_type: seoMeta?.page_type ?? '',
        page_id: seoMeta?.page_id ? seoMeta.page_id.toString() : '',
    });

    const selectedPageOptions = useMemo<SeoPageOption[]>(
        () => pageOptions[form.data.page_type] ?? [],
        [form.data.page_type, pageOptions],
    );

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (mode === 'create') {
            form.post(seo.store().url, {
                preserveScroll: true,
            });

            return;
        }

        if (!seoMeta) {
            return;
        }

        form.put(seo.update(seoMeta.id).url, {
            preserveScroll: true,
        });
    };

    const pageSelectionHelper =
        form.data.page_type === 'Mcq'
            ? 'Showing the 250 most recent MCQs to keep the selector fast.'
            : 'Choose the page or record this meta tag belongs to.';

    return (
        <form
            onSubmit={submit}
            className="space-y-6 rounded-xl border bg-card p-6 shadow-xs"
        >
            <FieldGroup className="gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                    <Field>
                        <FieldLabel>Page Type</FieldLabel>
                        <Select
                            value={form.data.page_type}
                            onValueChange={(value) => {
                                form.setData('page_type', value);
                                form.setData('page_id', '');
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select page type" />
                            </SelectTrigger>
                            <SelectContent>
                                {pageTypeOptions.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={form.errors.page_type} />
                    </Field>

                    <Field>
                        <FieldLabel>Target Page</FieldLabel>
                        <Select
                            value={form.data.page_id}
                            onValueChange={(value) =>
                                form.setData('page_id', value)
                            }
                            disabled={!form.data.page_type}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue
                                    placeholder={
                                        form.data.page_type
                                            ? 'Select target page'
                                            : 'Choose page type first'
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent>
                                {selectedPageOptions.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value.toString()}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FieldDescription>
                            {pageSelectionHelper}
                        </FieldDescription>
                        <InputError message={form.errors.page_id} />
                    </Field>
                </div>

                <Field>
                    <FieldLabel htmlFor="title">Meta Title</FieldLabel>
                    <Input
                        id="title"
                        value={form.data.title}
                        onChange={(event) =>
                            form.setData('title', event.target.value)
                        }
                        placeholder="Enter the SEO title"
                    />
                    <InputError message={form.errors.title} />
                </Field>

                <Field>
                    <FieldLabel htmlFor="description">
                        Meta Description
                    </FieldLabel>
                    <Textarea
                        id="description"
                        rows={4}
                        value={form.data.description}
                        onChange={(event) =>
                            form.setData('description', event.target.value)
                        }
                        placeholder="Write the meta description"
                    />
                    <InputError message={form.errors.description} />
                </Field>

                <Field>
                    <FieldLabel htmlFor="keywords">Keywords</FieldLabel>
                    <Textarea
                        id="keywords"
                        rows={3}
                        value={form.data.keywords}
                        onChange={(event) =>
                            form.setData('keywords', event.target.value)
                        }
                        placeholder="keyword one, keyword two, keyword three"
                    />
                    <FieldDescription>
                        Separate keywords with commas.
                    </FieldDescription>
                    <InputError message={form.errors.keywords} />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                    <Field>
                        <FieldLabel htmlFor="og_title">OG Title</FieldLabel>
                        <Input
                            id="og_title"
                            value={form.data.og_title}
                            onChange={(event) =>
                                form.setData('og_title', event.target.value)
                            }
                            placeholder="Optional Open Graph title"
                        />
                        <InputError message={form.errors.og_title} />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="og_image">OG Image</FieldLabel>
                        <Input
                            id="og_image"
                            value={form.data.og_image}
                            onChange={(event) =>
                                form.setData('og_image', event.target.value)
                            }
                            placeholder="/assets/images/example.webp or https://..."
                        />
                        <InputError message={form.errors.og_image} />
                    </Field>
                </div>

                <Field>
                    <FieldLabel htmlFor="og_description">
                        OG Description
                    </FieldLabel>
                    <Textarea
                        id="og_description"
                        rows={4}
                        value={form.data.og_description}
                        onChange={(event) =>
                            form.setData('og_description', event.target.value)
                        }
                        placeholder="Optional Open Graph description"
                    />
                    <InputError message={form.errors.og_description} />
                </Field>
            </FieldGroup>

            <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" asChild>
                    <Link href={seo.index().url}>Cancel</Link>
                </Button>
                <Button type="submit" disabled={form.processing}>
                    {form.processing
                        ? mode === 'create'
                            ? 'Saving...'
                            : 'Updating...'
                        : mode === 'create'
                          ? 'Create Meta Tag'
                          : 'Update Meta Tag'}
                </Button>
            </div>
        </form>
    );
}
