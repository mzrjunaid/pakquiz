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
        <section className="border-b" ref={scrollRef}>
            <div className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                <div
                    className={`grid gap-6 lg:grid-cols-3 lg:gap-8 ${className}`}
                >
                    {children}
                </div>
            </div>
        </section>
    );
};

export default MainSectionWithSidebarLayout;
