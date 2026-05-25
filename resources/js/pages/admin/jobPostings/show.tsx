import { TextHeading } from '@/components/ui/typography';
import admin from '@/routes/admin';
import { CommonFilters, McqsResource, Stats } from '@/types/admin';
import { Mcq } from '@/types/mcq';
import { Subject, Topic } from '@/types/subject';
import { router } from '@inertiajs/react';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import McqsTable from '../mcqs/components/data-table-index';
import TopicManagement from './components/topic-management';

export default function SubjectsShow({
    subject,
    topics,
    mcqs,
    stats,
    filters,
}: {
    subject: Subject;
    topics: Topic[];
    mcqs: McqsResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    const generateOgImage = (mcq: Mcq, action: 'generate' | 'regenerate') => {
        router.get(admin.mcq_og_image(mcq.slug).url, {
            preserveScroll: true,
            data: {
                action,
            },
        });
    };

    return (
        <AdminLayout title="MCQs List">
            <TextHeading as="h1" size="xl" textColor="primary">
                {subject.name} MCQs List
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
            <section className="space-y-4">
                <TextHeading as="h2" size="lg" textColor="primary">
                    Topic Management
                </TextHeading>
                <TopicManagement subject={subject} topics={topics} />
            </section>
            <section className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <McqsTable
                    tableData={mcqs}
                    filters={filters}
                    url={admin.subjects.show(subject.slug).url}
                    generateOgImage={generateOgImage}
                />
                {/* <pre>{JSON.stringify(mcqs, null, 2)}</pre> */}
            </section>
        </AdminLayout>
    );
}
