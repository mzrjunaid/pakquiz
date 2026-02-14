import AppLayout from '@/layouts/app-layout';
import { Seo, SharedData } from '@/types';
import { Mcq } from '@/types/public/mcq';
import { Head, usePage } from '@inertiajs/react';

interface McqProps extends SharedData {
    mcq: Mcq;
    seo: Seo;
}

const McqShow = () => {
    const { seo, mcq } = usePage<McqProps>().props;
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
