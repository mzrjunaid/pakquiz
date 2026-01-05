import { router, usePage } from '@inertiajs/react';
import { useCallback, useMemo } from 'react';
import { useDebouncedCallback } from './use-debounced-callback';

type Primitive = string | number | undefined;
export type ServerTableParams = Record<string, Primitive>;

interface UseServerTableOptions {
    route: string;
    defaults?: ServerTableParams;
    preserveScroll?: boolean;
    debounceMs?: number;
    replace?: boolean;
}

function cleanParams(
    obj: ServerTableParams,
): Record<string, string | number | boolean> {
    const out: Record<string, string | number | boolean> = {};

    for (const [k, v] of Object.entries(obj)) {
        if (v === undefined || v === null) continue;
        if (typeof v === 'string' && v.trim() === '') continue;

        out[k] = v; // ✅ fully type-safe
    }

    return out;
}

export function useServerTable({
    route,
    defaults = {},
    preserveScroll = true,
    debounceMs = 300,
    replace = true,
}: UseServerTableOptions) {
    const { props } = usePage();

    /**
     * ✅ serverFilters is derived INSIDE useMemo
     * ESLint warning gone
     */
    const params = useMemo<ServerTableParams>(() => {
        const serverFilters = (props.filters ?? {}) as ServerTableParams;

        return {
            ...defaults,
            ...serverFilters,
        };
    }, [props.filters, defaults]);

    const visit = useCallback(
        (next: ServerTableParams) => {
            router.get(route, cleanParams({ ...params, ...next }), {
                preserveState: true,
                preserveScroll,
                replace,
            });
        },
        [route, params, preserveScroll, replace],
    );

    const debouncedSetFilter = useDebouncedCallback(
        (key: string, value?: Primitive) => {
            visit({ [key]: value, page: 1 });
        },
        debounceMs,
    );

    const setFilter = useCallback(
        (key: string, value?: Primitive) => {
            visit({ [key]: value, page: 1 });
        },
        [visit],
    );

    const paginate = useCallback(
        (page: number) => {
            visit({ page });
        },
        [visit],
    );

    const sort = useCallback(
        (column: string) => {
            const currentSort = String(params.sort ?? '');
            const currentDir = String(params.direction ?? 'asc');

            const nextDir =
                currentSort === column
                    ? currentDir === 'asc'
                        ? 'desc'
                        : 'asc'
                    : 'asc';

            visit({
                sort: column,
                direction: nextDir,
                page: 1,
            });
        },
        [params.sort, params.direction, visit],
    );

    return {
        params,

        setFilter,
        debouncedSetFilter,

        paginate,
        sort,
    };
}
