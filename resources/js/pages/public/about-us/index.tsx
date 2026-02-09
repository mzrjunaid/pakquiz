import AppLayout from '@/layouts/app-layout';
import { Seo } from '@/types';
import { Head } from '@inertiajs/react';
import AboutPakQuiz from './components/about-us-page';

const AboutUs = ({ seo }: { seo: Seo }) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <AboutPakQuiz />
        </AppLayout>
    );
};

export default AboutUs;
