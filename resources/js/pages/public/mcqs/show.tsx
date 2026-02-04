import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const McqShow = ({ mcq, seo }: { mcq: any; seo: any }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <h1>MCQ Show</h1>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(mcq, null, 2)}</pre>
        </AppLayout>
    );
};

export default McqShow;
