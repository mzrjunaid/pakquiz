import AppLayout from '@/layouts/app-layout';
import { breadcrumb } from '@/lib/breadcrumbs-utils';
import { Head, usePage } from '@inertiajs/react';
import { ReactNode, useMemo } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
    title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
    const { url } = usePage();
    const breadcrumbs = useMemo(() => breadcrumb(url), [url]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {children}
            </div>
        </AppLayout>
    );
}
