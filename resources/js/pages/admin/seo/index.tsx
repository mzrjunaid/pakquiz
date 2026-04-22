import { Button } from '@/components/ui/button';
import { TextHeading } from '@/components/ui/typography';
import seo from '@/routes/admin/seo';
import { CommonFilters, SeoMetaResource } from '@/types/admin';
import { SeoMetaStats } from '@/types/seo';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import SeoMetaTable from './components/data-table-index';

interface SeoMetaIndexProps {
    seoMeta: SeoMetaResource;
    filters: CommonFilters;
    stats: SeoMetaStats;
}

export default function SeoMetaIndex({
    seoMeta,
    filters,
    stats,
}: SeoMetaIndexProps) {
    return (
        <AdminLayout title="SEO Meta List">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <TextHeading as="h1" size="xl" textColor="primary">
                    SEO Meta
                </TextHeading>
                <Button asChild>
                    <Link href={seo.create().url}>Create Meta Tag</Link>
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
                <StatsCard title="Total SEO Meta" total={stats.total} />
                <StatsCard title="Departments" total={stats.by_type.Department} />
                <StatsCard title="Jobs" total={stats.by_type.JobPosting} />
                <StatsCard title="MCQs" total={stats.by_type.Mcq} />
                <StatsCard title="Pages" total={stats.by_type.Page} />
                <StatsCard title="Paper" total={stats.by_type.Paper} />
                <StatsCard title="Subject" total={stats.by_type.Subject} />
                <StatsCard title="Topics" total={stats.by_type.Topic} />
                <StatsCard
                    title="Testing Services"
                    total={stats.by_type.TestingService}
                />
            </div>

            {/* Main Content Area */}
            <SeoMetaTable
                tableData={seoMeta}
                filters={filters}
                url={seo.index().url}
                onEdit={(item) => router.visit(seo.edit(item.id).url)}
                onDelete={(item) => {
                    if (
                        window.confirm(
                            `Delete the meta tag for "${item.page_label}"?`,
                        )
                    ) {
                        router.delete(seo.destroy(item.id).url, {
                            preserveScroll: true,
                        });
                    }
                }}
            />
        </AdminLayout>
    );
}
