import { QueryFilters } from '@/types/admin';

export function cleanFilters<T extends QueryFilters>(filters: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(filters).filter(
            ([, value]) =>
                value !== '' && value !== null && value !== undefined,
        ),
    ) as Partial<T>;
}
