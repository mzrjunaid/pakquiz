import { Button } from '@/components/ui/button';
import seo from '@/routes/admin/seo';
import {
    SeoMeta,
    SeoPageOptions,
    SeoPageTypeOption,
} from '@/types/seo';
import { Link } from '@inertiajs/react';
import SeoMetaForm from './components/seo-meta-form';
import AdminLayout from '../components/admin-layout';

interface SeoMetaEditProps {
    seoMeta: SeoMeta;
    pageTypeOptions: SeoPageTypeOption[];
    pageOptions: SeoPageOptions;
}

export default function SeoMetaEdit({
    seoMeta,
    pageTypeOptions,
    pageOptions,
}: SeoMetaEditProps) {
    return (
        <AdminLayout title="Edit Meta Tag">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Edit Meta Tag
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Update SEO content for {seoMeta.page_label}.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" asChild>
                            <Link href={seo.show(seoMeta.id).url}>View details</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={seo.index().url}>Back to meta tags</Link>
                        </Button>
                    </div>
                </div>

                <SeoMetaForm
                    mode="edit"
                    seoMeta={seoMeta}
                    pageTypeOptions={pageTypeOptions}
                    pageOptions={pageOptions}
                />
            </div>
        </AdminLayout>
    );
}
