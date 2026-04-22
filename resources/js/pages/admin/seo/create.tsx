import { Button } from '@/components/ui/button';
import seo from '@/routes/admin/seo';
import {
    SeoPageOptions,
    SeoPageTypeOption,
} from '@/types/seo';
import { Link } from '@inertiajs/react';
import SeoMetaForm from './components/seo-meta-form';
import AdminLayout from '../components/admin-layout';

interface SeoMetaCreateProps {
    pageTypeOptions: SeoPageTypeOption[];
    pageOptions: SeoPageOptions;
}

export default function SeoMetaCreate({
    pageTypeOptions,
    pageOptions,
}: SeoMetaCreateProps) {
    return (
        <AdminLayout title="Create Meta Tag">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create Meta Tag
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Add SEO metadata for a page, MCQ, paper, or static page record.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={seo.index().url}>Back to meta tags</Link>
                    </Button>
                </div>

                <SeoMetaForm
                    mode="create"
                    pageTypeOptions={pageTypeOptions}
                    pageOptions={pageOptions}
                />
            </div>
        </AdminLayout>
    );
}
