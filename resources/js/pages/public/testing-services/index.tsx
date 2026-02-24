import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';

const TestingServicesPage = ({
    testingServices,
    seo,
}: {
    testingServices: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <AppCenterHead />
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(testingServices, null, 2)}</pre>
        </AppLayout>
    );
};

export default TestingServicesPage;
