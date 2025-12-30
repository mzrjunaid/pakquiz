import { DashboardProps } from '@/types/admin';
import AdminLayout from './components/admin-layout';
import { SectionCards } from './components/section-stat-cards';

export default function SeoMetaIndex({ dashboardStats }: DashboardProps) {
    return (
        <AdminLayout title="Dashboard List">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <SectionCards overview={dashboardStats.overview} />
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <pre>{JSON.stringify(dashboardStats, null, 2)}</pre>
            </div>
        </AdminLayout>
    );
}
