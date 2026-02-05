import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const SubjectPage = ({
    subject,
    mcqs,
    seo,
}: {
    subject: any;
    mcqs: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(subject, null, 2)}</pre>
            <pre>{JSON.stringify(mcqs, null, 2)}</pre>
        </AppLayout>
    );
};

export default SubjectPage;
