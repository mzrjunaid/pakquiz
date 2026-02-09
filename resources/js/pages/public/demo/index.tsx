import AppLayout from '@/layouts/app-layout';
import { DemoProps } from '@/types/public/demo';
import { Head } from '@inertiajs/react';
import QuizPage from './components/quiz-page';

const DemoPage = ({ demoMcqs, seo }: DemoProps) => {
    return (
        <AppLayout>
            <Head title={seo.title}></Head>
            <section className="flex h-full w-full items-center justify-center">
                <QuizPage data={demoMcqs.data} />
            </section>
        </AppLayout>
    );
};

export default DemoPage;
