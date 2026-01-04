import type { VisibilityState } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

export function useColumnVisibility(storageKey: string) {
    const [visibility, setVisibility] = useState<VisibilityState>(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            return raw ? (JSON.parse(raw) as VisibilityState) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(visibility));
        } catch {
            // ignore
        }
    }, [storageKey, visibility]);

    return { visibility, setVisibility };
}
