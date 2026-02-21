import { setQuizMode } from '@/actions/App/Http/Controllers/Public/HomeController';
import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';

export function useMcqMode() {
    const { isQuizMode } = usePage<SharedData>().props;

    const setIsQuizMode = (value: boolean) => {
        router.put(
            setQuizMode(),
            {
                isQuizMode: value,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    return { isQuizMode, setIsQuizMode };
}
