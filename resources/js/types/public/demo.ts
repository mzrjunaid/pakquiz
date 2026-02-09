import { Seo } from '..';

export interface DemoMcqOptions {
    id: number;
    text: string;
    correct: boolean;
    sort: number;
}

export interface DemoMcq {
    id: number;
    question: string;
    slug: string;
    explanation: string;
    mcq_type: string;
    difficulty: string;
    tags: {
        id: number;
        name: string;
    };
    subject: {
        id: number;
        name: string;
    };
    topic: {
        id: number;
        name: string;
    };
    options: DemoMcqOptions[];
}

export interface DemoProps {
    demoMcqs: {
        data: DemoMcq[];
    };
    seo: Seo;
}

export interface SelectedAnswers {
    [key: number]: number;
}

export interface ShowExplanation {
    [key: number]: boolean;
}
