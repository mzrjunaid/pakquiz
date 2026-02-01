import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function PublicSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}

// // import { BreadcrumbItem } from '@/types';
// import AppMode from '@/components/app-mode';
// import CallToAction from '@/components/call-to-action';
// import FlashHandler from '@/components/flash-handler';
// import PublicFooter from '@/components/public-footer';
// import { PublicSidebar } from '@/components/public-sidebar';
// import PublicHeader from '@/components/site-header';

// // import { SiteHeader } from '@/components/site-header';
// import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
// import { useIsMobile } from '@/hooks/use-mobile';
// import { Toaster } from 'sonner';

// interface Props {
//     children: React.ReactNode;
// }

// export function PublicLayout({ children }: Props) {
//     const isMobile = useIsMobile();
//     return (
//         <SidebarProvider defaultOpen={false}>
//             <PublicSidebar />
//             <SidebarInset className="relative">
//                 <PublicHeader />
//                 <FlashHandler />
//                 <div className="min-h-screen">
//                     {/* Main Contents */}
//                     {children}
//                     {/* Call to Action */}
//                     <CallToAction />
//                     {/* Footer */}
//                     <PublicFooter />
//                 </div>
//                 {isMobile && <AppMode className="fixed right-2 bottom-5" />}

//                 <Toaster
//                     position="bottom-center"
//                     duration={4000}
//                     expand={false}
//                     visibleToasts={5}
//                 />
//             </SidebarInset>
//         </SidebarProvider>
//     );
// }
