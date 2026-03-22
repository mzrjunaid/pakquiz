import { TextHeading } from '@/components/ui/typography';
import admin from '@/routes/admin';
import mcqsRoute from '@/routes/admin/mcqs';
import { CommonFilters, McqsResource, Stats } from '@/types/admin';
import { Mcq } from '@/types/mcq';
import axios from 'axios';
import { toast } from 'sonner';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import McqsTable from './components/data-table-index';

export default function McqsIndex({
    mcqs,
    stats,
    filters,
}: {
    mcqs: McqsResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    const generateOgImage = async (mcq: Mcq) => {
        try {
            const route = admin.mcq_og_image(mcq.slug);
            const { data } = await axios.get(route.url, {
                withCredentials: true,
            });
            navigator.clipboard.writeText(data.imageUrl);
            toast.success('Image URL copied to clipboard', {
                description: data.message,
            });
            return data.imageUrl;
        } catch (e: any) {
            toast.error('Failed to generate image');
        }
    };

    return (
        <AdminLayout title="MCQs List">
            <TextHeading as="h1" size="xl" textColor="primary">
                MCQs List
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total MCQs" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_entries}
                />
            </div>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <McqsTable
                    tableData={mcqs}
                    filters={filters}
                    url={mcqsRoute.index().url}
                    generateOgImage={generateOgImage}
                />
                {/* <pre>{JSON.stringify(mcqs, null, 2)}</pre> */}
            </section>
        </AdminLayout>
    );
}
