import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const TestingServicesPage = ({
    testingServices,
    seo,
}: {
    testingServices: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(testingServices, null, 2)}</pre>
        </AppLayout>
    );
};

export default TestingServicesPage;
