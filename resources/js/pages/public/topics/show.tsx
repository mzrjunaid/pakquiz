import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const TopicsPage = ({
    subject,
    topic,
    seo,
}: {
    subject: any;
    topic: any;
    seo: any;
}) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(subject, null, 2)}</pre>
            <pre>{JSON.stringify(topic, null, 2)}</pre>
        </AppLayout>
    );
};

export default TopicsPage;
