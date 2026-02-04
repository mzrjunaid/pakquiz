import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const TermsOfService = ({ seo }: { seo: any }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
        </AppLayout>
    );
};

export default TermsOfService;
