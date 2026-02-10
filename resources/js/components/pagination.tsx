// components/data-table-pagination.tsx
import { Field, FieldLabel } from '@/components/ui/field';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PaginationMeta } from '@/types/pagination';
import { router } from '@inertiajs/react';

interface PaginationProps {
    meta: PaginationMeta;
}

export function SitePagination({ meta }: PaginationProps) {
    const { path, from, to, total, per_page, links } = meta;

    const handlePerPageChange = (value: string) => {
        router.visit(`${path}?per_page=${value}`);
        // onPerPageChange(Number(value));
    };

    // Don't render if there's no data
    if (total === 0) {
        return null;
    }

    // Filter out "Previous" and "Next" links from the main links array
    const pageLinks = links.filter(
        (link) =>
            link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;',
    );

    // Get Previous and Next links
    const previousLink = links.find(
        (link) => link.label === '&laquo; Previous',
    );
    const nextLink = links.find((link) => link.label === 'Next &raquo;');

    return (
        <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row md:px-6">
            {/* Left side: Per page selector and results info */}
            <div className="flex items-center gap-6">
                <Field orientation="horizontal" className="w-fit">
                    <FieldLabel
                        htmlFor="per-page"
                        className="text-sm text-muted-foreground"
                    >
                        Per page
                    </FieldLabel>
                    <Select
                        value={String(per_page)}
                        onValueChange={handlePerPageChange}
                    >
                        <SelectTrigger className="h-9 w-20" id="per-page">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent align="start">
                            <SelectGroup>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="25">25</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>

                {/* Results summary */}
                <p className="text-sm text-muted-foreground">
                    {from && to ? (
                        <>
                            Showing <span className="font-medium">{from}</span>{' '}
                            to <span className="font-medium">{to}</span> of{' '}
                            <span className="font-medium">{total}</span> results
                        </>
                    ) : (
                        <>No results</>
                    )}
                </p>
            </div>

            {/* Right side: Pagination controls */}
            {pageLinks.length > 1 && (
                <Pagination className="w-fit">
                    <PaginationContent>
                        {/* Previous button */}
                        <PaginationItem>
                            <PaginationPrevious
                                aria-label="Go to previous page"
                                href={previousLink?.url?.toString()}
                                aria-disabled={!previousLink?.url}
                                className={
                                    !previousLink?.url
                                        ? 'pointer-events-none opacity-50'
                                        : 'cursor-pointer'
                                }
                            />
                        </PaginationItem>

                        {/* Page numbers */}
                        {pageLinks.map((link, index) => (
                            <PaginationItem key={`page-${link.page}-${index}`}>
                                {link.label === '...' ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationLink
                                        href={link.url?.toString()}
                                        isActive={link.active}
                                        aria-label={`Go to page ${link.label}`}
                                        aria-current={
                                            link.active ? 'page' : undefined
                                        }
                                    >
                                        {link.label}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                        ))}

                        {/* Next button */}
                        <PaginationItem>
                            <PaginationNext
                                aria-label="Go to next page"
                                href={nextLink?.url?.toString()}
                                aria-disabled={!nextLink?.url}
                                className={
                                    !nextLink?.url
                                        ? 'pointer-events-none opacity-50'
                                        : 'cursor-pointer'
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}
