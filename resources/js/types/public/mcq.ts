import { JsonLdThing } from '..';
import { SimpleUser } from '../user';
import { Paper } from './paper';

/* -------------------- */
/* Related Interfaces   */
/* -------------------- */

export interface Option {
    id: number;
    option_text: string;
    sort_order: number;
    is_correct: boolean;
}

export interface Subject {
    name: string;
    slug: string;
    description?: string;
    topics?: Topic[];
}

export interface Topic {
    name: string;
    slug: string;
}

export interface Tag {
    name: string;
    slug: string;
}

/* -------------------- */
/* Enums / Union Types  */
/* -------------------- */

export type McqDifficulty = 'easy' | 'medium' | 'hard';

export type McqType = 'single' | 'multiple' | 'true_false';

export interface Mcq {
    question: string;
    slug: string;
    explanation: string | null;

    options: Option[];

    paper?: Paper | null;
    subject: Subject;
    topic?: Topic | null;

    tags: Tag[];

    difficulty: McqDifficulty;
    mcq_type: McqType;

    created_by: SimpleUser;
    created_at: string;

    /* JSON-LD Schema.org representation */
    schema: JsonLdThing;
}
