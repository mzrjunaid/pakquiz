import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const PaperPage = ({
    paper,
    mcqs,
    seo,
}: {
    paper: any;
    mcqs: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(paper, null, 2)}</pre>
            <pre>{JSON.stringify(mcqs, null, 2)}</pre>
        </AppLayout>
    );
};

export default PaperPage;
