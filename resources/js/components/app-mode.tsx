import { Button } from '@/components/ui/button';
import { useAppearance } from '@/hooks/use-appearance';
import { useIsMobile } from '@/hooks/use-mobile';
import { useQuizMode } from '@/hooks/use-quiz-mode';

import { Monitor, Moon, Sun } from 'lucide-react';

interface Props {
    className?: string;
}

const modeButton = (appearance: string) => {
    const baseClass =
        'cursor-pointer text-secondary-foreground hover:text-primary';

    switch (appearance) {
        case 'light':
            return <Moon className={baseClass} />;
        case 'dark':
            return <Sun className={baseClass} />;
        default:
            return <Monitor className={baseClass} />;
    }
};

export default function AppMode({ className }: Props) {
    const { appearance, updateAppearance } = useAppearance();
    const { isQuizMode, setIsQuizMode } = useQuizMode();
    const isMobile = useIsMobile();

    // toggle function
    const toggleMode = () => {
        if (appearance === 'light') updateAppearance('dark');
        else if (appearance === 'dark') updateAppearance('system');
        else updateAppearance('light');
    };

    const handleMcqToggle = (): void => {
        setIsQuizMode(!isQuizMode);
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Button
                variant="default"
                size={isMobile ? 'xs' : 'sm'}
                onClick={handleMcqToggle}
            >
                {isQuizMode ? 'Study' : 'Quiz'}
            </Button>
            <Button
                onClick={toggleMode}
                variant="link"
                size="icon"
                className="mx-2 size-6"
                asChild
            >
                {modeButton(appearance)}
            </Button>
        </div>
    );
}
