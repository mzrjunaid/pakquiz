import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';
import { Department } from '@/types/department';

const DepartmentsPage = ({ department }: { department: Department }) => {
    return (
        <AppLayout>
            <AppCenterHead />
            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
            <pre>{JSON.stringify(department, null, 2)}</pre>
        </AppLayout>
    );
};

export default DepartmentsPage;
