import { TextHeading } from '@/components/ui/typography';
import departmentsRoute from '@/routes/admin/departments';
import { CommonFilters, DepartmentResource, Stats } from '@/types/admin';
import AdminLayout from '../components/admin-layout';
import StatsCard from '../components/stats-card';
import DepartmentTable from './components/data-table-index';
import { Department } from '@/types/department';
import admin from '@/routes/admin';
import { router } from '@inertiajs/react';

export default function DepartmentsIndex({
    departments,
    filters,
    stats,
}: {
    departments: DepartmentResource;
    filters: CommonFilters;
    stats: Stats;
}) {
    const handleEdit = (department: Department) => {
        // console.log('department', department);
        router.visit(admin.departments.edit(department.slug).url);
    };
    return (
        <AdminLayout title="Departments List">
            <TextHeading as="h1" size="xl" textColor="primary">
                Department
            </TextHeading>
            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 md:grid-cols-4">
                <StatsCard title="Total Departments" total={stats.total} />
                <StatsCard title="Today" total={stats.today} />
                <StatsCard title="This Week" total={stats.this_week} />
                <StatsCard
                    title={`Top Creator - ${stats.top_creator?.name}`}
                    total={stats.top_creator?.total_entries}
                />
            </div>

            <div className="relative min-h-[100vh] flex-1 overflow-hidden md:min-h-min">
                <DepartmentTable
                    tableData={departments}
                    filters={filters}
                    url={departmentsRoute.index().url}
                    onEdit={handleEdit}
                />
            </div>
        </AdminLayout>
    );
}
