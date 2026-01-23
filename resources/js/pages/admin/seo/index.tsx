import { TextHeading } from '@/components/ui/typography';
import seo from '@/routes/admin/seo';
import { CommonFilters, SeoMetaResource } from '@/types/admin';
import { SeoMetaStats } from '@/types/seo';
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
            <TextHeading as="h1" size="xl" textColor="primary">
                SEO Meta
            </TextHeading>

            {/* Stats Grid */}
            <div className="grid auto-rows-min gap-4 sm:grid-cols-3 md:grid-cols-6">
                <StatsCard title="Total SEO Meta" total={stats.total} />
                <StatsCard title="MCQs" total={stats.by_type.Mcq} />
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
            />
        </AdminLayout>
    );
}
