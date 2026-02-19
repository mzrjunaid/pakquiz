import ComingSoon from '@/components/coming-soon/coming-soon';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function ComingSoonPage() {
    return (
        <AppLayout>
            <Head title="Join Us" />
            <ComingSoon />
        </AppLayout>
    );
}
