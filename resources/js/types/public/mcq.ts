import { SimpleUser } from '../user';
import { Paper } from './paper';

export interface Mcq {
    question: string;
    slug: string;
    options: Options[];
    explanation: string;
    paper: Paper;
    subject: {
        name: string;
        slug: string;
    };
    topic: {
        name: string;
        slug: string;
    };
    tags: {
        name: string;
        slug: string;
    };
    difficulty: string;
    mcq_type: string;
    created_by: SimpleUser;
    created_at: string;
}

export interface Options {
    option: string;
    is_correct: boolean;
}
