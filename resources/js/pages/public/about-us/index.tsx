import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';
import AboutPakQuiz from './components/about-us-page';

const AboutUs = () => {
    return (
        <AppLayout>
            <AppCenterHead />
            <AboutPakQuiz />
        </AppLayout>
    );
};

export default AboutUs;
