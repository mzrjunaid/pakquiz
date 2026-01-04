import { useEffect, useMemo, useRef } from 'react';

export function useDebouncedCallback<T extends (...args: any[]) => void>(
    callback: T,
    delay = 300,
) {
    const cbRef = useRef(callback);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        cbRef.current = callback;
    }, [callback]);

    return useMemo(() => {
        const fn = (...args: Parameters<T>) => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(
                () => cbRef.current(...args),
                delay,
            );
        };

        fn.cancel = () => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
            timerRef.current = null;
        };

        return fn as T & { cancel: () => void };
    }, [delay]);
}
