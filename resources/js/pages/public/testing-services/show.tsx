import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';

const TestingServicePage = ({
    testingService,
    seo,
}: {
    testingService: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <AppCenterHead />
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(testingService, null, 2)}</pre>
        </AppLayout>
    );
};

export default TestingServicePage;
