import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const AboutUs = ({ seo }: { seo: any }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <h1>Contact Us</h1>
            <pre>{JSON.stringify(seo, null, 2)}</pre>
        </AppLayout>
    );
};

export default AboutUs;
