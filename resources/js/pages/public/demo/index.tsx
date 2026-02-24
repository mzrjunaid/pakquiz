import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';
import { DemoProps } from '@/types/public/demo';
import QuizPage from './components/quiz-page';

const DemoPage = ({ demoMcqs }: DemoProps) => {
    return (
        <AppLayout>
            <AppCenterHead />
            <section className="flex h-full w-full items-center justify-center">
                <QuizPage data={demoMcqs.data} />
            </section>
        </AppLayout>
    );
};

export default DemoPage;
