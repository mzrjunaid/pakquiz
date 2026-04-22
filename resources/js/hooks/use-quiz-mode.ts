import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';

export function useQuizMode() {
    const { isQuizMode } = usePage<SharedData>().props;

    const setIsQuizMode = (value: boolean) => {
        router.put(
            "/set-quiz-mode",
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
