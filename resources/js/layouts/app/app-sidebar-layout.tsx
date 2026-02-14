import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import PublicFooter from '@/components/public-footer';
import PublicHeader from '@/components/site-header';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { url } = usePage();
    const isAdmin = url.startsWith('/admin') && url.split('/')[1] !== 'admin';
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar">
                {isAdmin ? (
                    <AppSidebarHeader breadcrumbs={breadcrumbs} />
                ) : (
                    <PublicHeader />
                )}
                {children}
                {!isAdmin && <PublicFooter />}

                <Toaster position="bottom-center" />
            </AppContent>
        </AppShell>
    );
}
