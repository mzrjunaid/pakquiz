import { Button } from '@/components/ui/button';
import seo from '@/routes/admin/seo';
import { SeoMeta } from '@/types/seo';
import { Link } from '@inertiajs/react';
import SeoMetaDetails from './components/seo-meta-details';
import AdminLayout from '../components/admin-layout';

interface SeoMetaShowProps {
    seoMeta: SeoMeta;
}

export default function SeoMetaShow({ seoMeta }: SeoMetaShowProps) {
    return (
        <AdminLayout title="Meta Tag Details">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Meta Tag Details
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Review the stored SEO metadata and its assigned page target.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button asChild>
                            <Link href={seo.edit(seoMeta.id).url}>Edit</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={seo.index()}>Back to meta tags</Link>
                        </Button>
                    </div>
                </div>

                <SeoMetaDetails seoMeta={seoMeta} />
            </div>
        </AdminLayout>
    );
}
