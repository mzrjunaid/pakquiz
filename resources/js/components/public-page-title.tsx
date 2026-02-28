import { BreadcrumbItem } from '@/types';
import { Breadcrumbs } from './breadcrumbs';

interface Props {
    title: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    className?: string;
    description?: string;
}

const PageTitle: React.FC<Props> = ({
    title,
    subtitle,
    breadcrumbs,
    description,
    className,
}) => {
    return (
        <div
            className={`order-0 flex-1 text-center md:mb-6 lg:order-0 ${className}`}
        >
            {breadcrumbs && breadcrumbs.length > 0 && (
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            )}
            <div className="space-y-6">
                <div className="space-y-0">
                    <h1 className="text-xl leading-tight font-bold lg:text-3xl xl:text-2xl">
                        {title}
                    </h1>
                    {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
                </div>
                {description && (
                    <div className='text-left'>
                        <p className="mt-2 text-muted">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageTitle;
