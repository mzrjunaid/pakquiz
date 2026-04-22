import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import seo from '@/routes/admin/seo';
import { SeoMeta } from '@/types/seo';
import { Link } from '@inertiajs/react';

interface SeoMetaDetailsProps {
    seoMeta: SeoMeta;
}

function DetailItem({ label, value }: { label: string; value?: string | number | null }) {
    return (
        <div className="rounded-lg border p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {label}
            </p>
            <p className="mt-2 whitespace-pre-wrap text-sm text-foreground">
                {value || 'Not provided'}
            </p>
        </div>
    );
}

export default function SeoMetaDetails({ seoMeta }: SeoMetaDetailsProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                        <CardTitle className="text-2xl">{seoMeta.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">{seoMeta.page_type}</Badge>
                            <Badge variant="outline">ID #{seoMeta.id}</Badge>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href={seo.edit(seoMeta.id).url}>Edit Meta Tag</Link>
                    </Button>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <DetailItem label="Target Page" value={seoMeta.page_label} />
                    <DetailItem label="Page ID" value={seoMeta.page_id} />
                    <DetailItem label="Created At" value={seoMeta.created_at} />
                    <DetailItem label="Updated At" value={seoMeta.updated_at} />
                    <DetailItem label="Meta Description" value={seoMeta.description} />
                    {/* <DetailItem label="Keywords" value={seoMeta.keywords} /> */}
                    <DetailItem label="OG Title" value={seoMeta.og_title} />
                    <DetailItem label="OG Description" value={seoMeta.og_description} />
                    <DetailItem label="OG Image" value={seoMeta.og_image as string | null} />
                </CardContent>
            </Card>
        </div>
    );
}
