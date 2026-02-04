import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const SubjectsPage = ({ subjects, seo }: { subjects: any; seo: any }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(subjects, null, 2)}</pre>
        </AppLayout>
    );
};

export default SubjectsPage;
