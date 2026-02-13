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
        <section className={`border-b ${className}`} ref={scrollRef}>
            <div className="mx-auto max-w-7xl px-3 py-8 lg:px-0">
                {children}
            </div>
        </section>
    );
};

export default MainSectionWithSidebarLayout;
