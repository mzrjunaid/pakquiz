import { AppContent } from '@/components/app-content';
import AppMode from '@/components/app-mode';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { LmsSidebar } from '@/components/lms/lms-sidebar';
import { LmsSidebarHeader } from '@/components/lms/lms-sidebar-header';
import PublicFooter from '@/components/public-footer';
import PublicHeader from '@/components/site-header';
import { useIsMobile } from '@/hooks/use-mobile';
import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, type PropsWithChildren } from 'react';
import { toast, Toaster } from 'sonner';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { url } = usePage();
    const { auth } = usePage<SharedData>().props;

    const { flash } = usePage<{
        flash: {
            success: string | null
            error: string | null
        }
    }>().props;
    const isAdmin = url.startsWith('/admin') || url.startsWith('/settings');
    const isMobile = useIsMobile();

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success)
        }
        if (flash.error) {
            toast.error(flash.error)
        }
    }, [flash])
    return (
        <AppShell variant="sidebar">
            <LmsSidebar />
            <AppContent variant="sidebar">
                <LmsSidebarHeader breadcrumbs={breadcrumbs} />
                {children}

                <Toaster position="bottom-center" />
                {isMobile && !isAdmin && (
                    <AppMode className="fixed right-8 bottom-8 z-50" />
                )}
            </AppContent>
        </AppShell>
    );
}
