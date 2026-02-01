import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function PublicHeaderLayout({
    children,
    breadcrumbs,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}

import { RefObject } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
}

const MainSectionWithSidebarLayout: React.FC<Props> = ({
    children,
    className,
    scrollRef,
}) => {
    return (
        <section className="px-4 py-6 md:py-16" ref={scrollRef}>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    className={`grid gap-6 lg:grid-cols-3 lg:gap-8 ${className}`}
                >
                    {children}
                </div>
            </div>
        </section>
    );
};

export {};

interface Props {
    children: React.ReactNode;
    className?: string;
    scrollRef?: RefObject<HTMLDivElement | null>;
}

const MainSectionWithoutSidebarLayout: React.FC<Props> = ({
    children,
    className,
    scrollRef,
}) => {
    return (
        <section className="px-4 py-6 md:py-16" ref={scrollRef}>
            <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`}>
                {children}
            </div>
        </section>
    );
};

export { MainSectionWithoutSidebarLayout, MainSectionWithSidebarLayout };
