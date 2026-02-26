import AppCenterHead from '@/components/app-center-head';
import AppLayout from '@/layouts/app-layout';

const TopicsPage = ({ topics, seo }: { topics: any; seo: any }) => {
    return (
        <AppLayout>
            <AppCenterHead />
            <pre>{JSON.stringify(seo, null, 2)}</pre>
            <pre>{JSON.stringify(topics, null, 2)}</pre>
        </AppLayout>
    );
};

export default TopicsPage;
