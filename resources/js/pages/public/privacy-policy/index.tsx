import PageTitle from '@/components/public-page-title';
import AppLayout from '@/layouts/app-layout';
import { Seo } from '@/types';
import { Head } from '@inertiajs/react';
import { PrivacyPolicyPage } from './components/privacy-policy';

const PrivacyPolicy = ({ seo }: { seo: Seo }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <section className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                <PageTitle
                    title={seo.title}
                    subtitle="Last updated: February 2, 2026"
                />
                <PrivacyPolicyPage />
            </section>
        </AppLayout>
    );
};

export default PrivacyPolicy;
