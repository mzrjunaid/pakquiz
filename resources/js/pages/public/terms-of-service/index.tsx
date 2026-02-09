import PageTitle from '@/components/public-page-title';
import AppLayout from '@/layouts/app-layout';
import { Seo } from '@/types';
import { Head } from '@inertiajs/react';
import { TermsOfServicePage } from './components/terms-of-service';

const TermsOfService = ({ seo }: { seo: Seo }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <section className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                <PageTitle
                    title="Terms of Service"
                    subtitle="Last updated: October 2, 2025"
                />
                <TermsOfServicePage />
            </section>
            {/* <pre>{JSON.stringify(seo, null, 2)}</pre> */}
        </AppLayout>
    );
};

export default TermsOfService;
