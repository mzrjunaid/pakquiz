import PageTitle from '@/components/public-page-title';
import AppLayout from '@/layouts/app-layout';
import { Seo } from '@/types';
import { Head } from '@inertiajs/react';
import { ContactPage } from './components/contact-us';

const ContactUs = ({ seo }: { seo: Seo }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <section className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                <PageTitle
                    title={seo.title}
                    subtitle="Get in touch with our team"
                />
                <ContactPage />
            </section>
            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default ContactUs;
