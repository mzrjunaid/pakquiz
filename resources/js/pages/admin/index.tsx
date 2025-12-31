import { DashboardProps } from '@/types/admin';
import AdminLayout from './components/admin-layout';
import DashboardTable from './components/dashboard-table';
import { SectionCards } from './components/section-stat-cards';

export default function SeoMetaIndex({ stats, latest }: DashboardProps) {
    return (
        <AdminLayout title="Dashboard List">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <SectionCards stats={stats} />
            {/* <pre>{JSON.stringify(stats, null, 2)}</pre> */}
            <h2 className="text-xl font-bold">Latest Mcqs / Papers</h2>
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <DashboardTable latest={latest} />
            </div>
        </AdminLayout>
    );
}
