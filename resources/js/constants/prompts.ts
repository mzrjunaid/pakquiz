// ─────────────────────────────────────────────────────────────────────────────
// Dynamic MCQ prompt builder — all prompts are functions that accept a config
// ─────────────────────────────────────────────────────────────────────────────

export interface PromptConfig {
    topicSlug?: string;        // single selected topic slug (overrides topic list)
    topics?: string[];         // allowed topic slugs (subset filter)
    subjectSlug?: string;      // e.g. "current-affairs"
    quantity?: number;         // number of MCQs to generate
    createdBy?: number;        // DB user id
    dateScope?: string;        // "yesterday" | "last week" | custom
    paperSlug?: string;        // null or paper slug string
    customInstruction?: string;
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

const ALL_CURRENT_AFFAIRS_TOPICS = [
    'appointments-resignations',
    'ai-and-technology',
    'awards-and-honours',
    'climate-and-environment',
    'defense-and-security',
    'education-and-social',
    'elections-and-democracy',
    'foreign-relations',
    'global-economy',
    'global-energy',
    'health-and-medicine',
    'important-days-and-events',
    'international-organizations',
    'natural-disasters',
    'pakistan-economy',
    'pakistan-politics',
    'reports-and-rankings',
    'science-and-technology',
    'space-and-exploration',
    'sports-current-affairs',
    'summits-and-conferences',
    'terrorism-and-conflicts',
    'trade-and-commerce',
    'treaties-and-agreements',
];

const buildTopicInstruction = (topicSlug?: string, topics?: string[], fallback = ALL_CURRENT_AFFAIRS_TOPICS): string => {
    if (topicSlug) {
        return `Always use this exact topic slug for ALL MCQs:\n**${topicSlug}**`;
    }
    const list = (topics && topics.length > 0 ? topics : fallback)
        .map((t) => `- ${t}`)
        .join('\n');
    return `Choose the **most relevant topic slug** from this list:\n\n${list}`;
};

const sharedOutputFormat = (subjectSlug: string, createdBy: number, paperSlug: string) => `
# STRICT OUTPUT FORMAT

Return **ALL MCQs strictly in this exact Markdown format**. Do not change the structure.

\`\`\`
# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single|multiple
Subject Slug: ${subjectSlug}
Topic Slug: {topic-slug}
Paper Slug: ${paperSlug}
Created By: ${createdBy}
Tags: {comma, hyphenated, tags}
Options:
A) {option text}
B) {option text} [correct]
C) {option text}
D) {option text}
Explanation: {explanation text}
---
\`\`\`
`;

const sharedFieldRules = `
# FIELD RULES

## Slug
- Lowercase, hyphen-separated, unique, SEO-friendly
- Example: \`who-was-appointed-new-chairman-of-ogra-april-2026\`

## Difficulty
- **easy** = direct factual recall
- **medium** = slightly analytical / detail-based
- **hard** = deeper or less obvious fact

## MCQ Type
- \`single\` = one correct answer (default)
- \`multiple\` = only if more than one option is genuinely correct

## Tags
- 3–8 tags, lowercase, hyphenated, topic-relevant
- Include entity names where useful
- Example: \`pakistan, ogra, chairman-appointment, energy, regulation\`

## Options
- Always 4 options (A–D)
- Realistic, plausible distractors — no obviously fake answers
- Mark correct answer with \`[correct]\`
- **Randomise correct answer position** across A/B/C/D — do NOT cluster on A or B

## Explanation
- 1–3 lines
- Explain why the answer is correct with factual context
- May include markdown emphasis or a Wikipedia link if applicable
`;

// ─── Current Affairs ──────────────────────────────────────────────────────────

const currentAffairsPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'current-affairs',
        quantity = 50,
        createdBy = 1,
        dateScope = 'yesterday',
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Current Affairs researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Current Affairs MCQs based ONLY on ${dateScope}'s important events**.

These MCQs are for a **Pakistan competitive exam preparation platform** suitable for:
FPSC, PPSC, NTS, CSS, PMS, General Job Tests, Current Affairs quiz preparation.

The output must be: factually accurate, exam-oriented, non-repetitive, import-ready, in strict Markdown format.

---

# DATE SCOPE

Generate MCQs only from **important events that happened ${dateScope}**.
If an event started earlier but had a **major update ${dateScope}**, it may be included.
Do **not** include outdated or irrelevant old news unless it had a significant development ${dateScope}.

---

# CONTENT COVERAGE

Cover ${dateScope}'s important developments from these areas:

- Pakistan Current Affairs
- International Current Affairs
- Economy & Business
- Science, Technology & AI
- Environment, Climate & Disasters
- Sports
- Awards, Appointments & Obituaries
- Reports, Rankings & Indexes
- International Organisations / Summits / Agreements
- Government, Politics, Defence, Foreign Affairs

---

# QUESTION QUALITY RULES

Prefer questions about:
appointments, resignations, awards, honours, reports, rankings, summits, conferences, treaties, agreements, international organizations, capitals/countries/currencies, dates/venues/hosts, winners/titles/records, policy decisions, official announcements, Pakistan government affairs, elections, trade, defense, health breakthroughs, space/science discoveries, natural disasters, AI/technology updates, terrorism/conflict updates.

Avoid: opinion-based questions, vague wording, trick questions, gossip/entertainment, duplicate questions.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics)}

---

${sharedFieldRules}

---

# IMPORTANT MCQ RULES

- Randomise correct answers — distribute naturally across A, B, C, and D
- Do not repeat the same fact in multiple questions
- Base all questions on **high-value ${dateScope} events**
- If not enough strong events exist, prioritise **quality over quantity**

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return the response in a **single fenced code block** (\`\`\`).
Clean Markdown only. Exact structure as specified.
Do not include introductions, notes, apologies, or section headings outside MCQ blocks.
`.trim();
};

// ─── History ──────────────────────────────────────────────────────────────────

const ALL_HISTORY_TOPICS = [
    'ancient-history',
    'medieval-history',
    'mughal-empire',
    'british-india',
    'pakistan-movement',
    'world-war-i',
    'world-war-ii',
    'cold-war',
    'modern-history',
    'islamic-history',
];

const historyPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'history',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **History researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality History MCQs** in a **topic-by-topic structured format**.

These MCQs are for **Pakistan competitive exams**: FPSC, PPSC, NTS, CSS, PMS, General Job Tests.

---

# OBJECTIVE

Generate **exam-oriented, factual, and non-repetitive MCQs** covering History in a systematic topic-wise manner.

---

# QUESTION QUALITY RULES

Each MCQ must be:
- Factual, exam-relevant, concise, non-ambiguous

Focus on: dates, battles, policies, systems, personalities, contributions, causes and effects.

Avoid: opinions, vague questions, repeated facts.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_HISTORY_TOPICS)}

---

${sharedFieldRules}

---

# IMPORTANT MCQ RULES

- Randomize correct answers (A/B/C/D distribution)
- Do NOT repeat facts
- Maintain conceptual clarity
- Keep options realistic
- Ensure historical accuracy

---

# OUTPUT QUANTITY

Generate **${quantity} MCQs total**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**.
Do NOT include explanations outside MCQs, headings, or commentary.
`.trim();
};

// ─── Pakistan Studies ─────────────────────────────────────────────────────────

const ALL_PAK_STUDIES_TOPICS = [
    'geography-of-pakistan',
    'pakistan-movement',
    'constitutional-history',
    'government-and-politics',
    'economy-of-pakistan',
    'foreign-policy',
    'culture-and-society',
    'education-system',
    'natural-resources',
    'provinces-and-regions',
];

const pakStudiesPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'pak-studies',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Pakistan Studies researcher**, **competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Pakistan Studies MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: geography, constitutional milestones, political history, economy, foreign policy, culture, provinces, natural resources.

Avoid: opinions, ambiguous questions, repeated facts.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_PAK_STUDIES_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Islamic Studies ──────────────────────────────────────────────────────────

const ALL_ISLAMIC_STUDIES_TOPICS = [
    'quran-and-tafseer',
    'hadith-and-sunnah',
    'fiqh-and-jurisprudence',
    'islamic-history',
    'prophets-and-companions',
    'pillars-of-islam',
    'islamic-ethics',
    'islamic-civilization',
    'contemporary-islamic-issues',
];

const islamicStudiesPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'islamic-studies',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Islamic Studies scholar**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Islamic Studies MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: Quran, Hadith, Fiqh, Islamic history, prophets, companions, pillars of Islam, Islamic ethics and civilization.

Avoid: sectarian bias, ambiguous questions, opinion-based queries.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_ISLAMIC_STUDIES_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── General Knowledge ────────────────────────────────────────────────────────

const ALL_GK_TOPICS = [
    'world-geography',
    'world-history',
    'science-general',
    'inventions-and-discoveries',
    'books-and-authors',
    'world-organizations',
    'capitals-and-currencies',
    'famous-personalities',
    'sports-general',
    'arts-and-culture',
];

const generalKnowledgePrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'general-knowledge',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **General Knowledge researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality General Knowledge MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS, and job tests.

---

# QUESTION QUALITY RULES

Focus on: world geography, history, science, inventions, books/authors, world organizations, capitals/currencies, famous personalities, sports, arts & culture.

Avoid: highly obscure trivia, ambiguous questions, duplicate facts.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_GK_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── English ──────────────────────────────────────────────────────────────────

const ALL_ENGLISH_TOPICS = [
    'grammar',
    'vocabulary',
    'synonyms-antonyms',
    'idioms-and-phrases',
    'sentence-correction',
    'fill-in-the-blanks',
    'comprehension',
    'active-passive-voice',
    'direct-indirect-speech',
    'spelling',
];

const englishPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'english',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **English language teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality English MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: grammar rules, vocabulary, synonyms/antonyms, idioms/phrases, sentence correction, fill-in-the-blanks, comprehension, voice, speech, spelling.

Avoid: ambiguous questions, culturally biased content, overly obscure vocabulary.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_ENGLISH_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Math ─────────────────────────────────────────────────────────────────────

const ALL_MATH_TOPICS = [
    'arithmetic',
    'algebra',
    'geometry',
    'trigonometry',
    'statistics',
    'probability',
    'number-system',
    'ratio-and-proportion',
    'percentage',
    'time-and-work',
    'profit-and-loss',
];

const mathPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'math',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Mathematics teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Mathematics MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: arithmetic, algebra, geometry, trigonometry, statistics, probability, number system, ratio & proportion, percentage, time & work, profit & loss.

Each MCQ must include a clear, solvable problem with one unambiguous correct answer.

Avoid: overly complex multi-step problems, ambiguous wording, trick questions without educational value.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_MATH_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Geography ────────────────────────────────────────────────────────────────

const ALL_GEOGRAPHY_TOPICS = [
    'physical-geography',
    'human-geography',
    'world-oceans-and-seas',
    'world-mountains-and-rivers',
    'continents-and-regions',
    'climate-and-weather',
    'pakistan-geography',
    'maps-and-directions',
    'natural-resources-geography',
    'environmental-geography',
];

const geographyPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'geography',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Geography teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Geography MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: physical geography, human geography, oceans/seas, mountains/rivers, continents, climate/weather, Pakistan geography, maps, natural resources, environment.

Avoid: overly obscure facts, ambiguous questions, repeated content.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_GEOGRAPHY_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Science ──────────────────────────────────────────────────────────────────

const ALL_SCIENCE_TOPICS = [
    'physics-basics',
    'chemistry-basics',
    'biology-basics',
    'scientific-inventions',
    'human-body',
    'plants-and-animals',
    'space-and-astronomy',
    'environment-and-ecology',
    'technology-and-computers',
];

const sciencePrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'science',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Science teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality General Science MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: physics basics, chemistry basics, biology basics, scientific inventions, human body, plants & animals, space & astronomy, environment & ecology, technology & computers.

Avoid: overly technical derivations, ambiguous questions, repeated facts.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_SCIENCE_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Computer ─────────────────────────────────────────────────────────────────

const ALL_COMPUTER_TOPICS = [
    'computer-basics',
    'ms-office',
    'internet-and-networking',
    'operating-systems',
    'programming-basics',
    'database-basics',
    'hardware-and-software',
    'cyber-security',
    'artificial-intelligence-basics',
];

const computerPrompt = (config: PromptConfig = {}): string => {
    const {
        topicSlug,
        topics,
        subjectSlug = 'computer',
        quantity = 50,
        createdBy = 1,
        paperSlug = 'null',
        customInstruction = '',
    } = config;

    return `
You are an expert **Computer Science teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Computer Science MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: computer basics, MS Office, internet & networking, operating systems, programming basics, database basics, hardware/software, cyber security, AI basics.

Avoid: overly advanced programming questions, ambiguous terminology, repeated content.

---

${sharedOutputFormat(subjectSlug, createdBy, paperSlug)}

---

# TOPIC SLUG RULE

${buildTopicInstruction(topicSlug, topics, ALL_COMPUTER_TOPICS)}

---

${sharedFieldRules}

---

# OUTPUT QUANTITY

Generate **${quantity} high-quality MCQs**.

---

${customInstruction ? `# ADDITIONAL INSTRUCTIONS\n\n${customInstruction}\n\n---` : ''}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim();
};

// ─── Prompt registry ──────────────────────────────────────────────────────────

export type PromptFn = (config?: PromptConfig) => string;

const prompts: Record<string, PromptFn> = {
    'current-affairs':       currentAffairsPrompt,
    'current-affairs-mcqs':  currentAffairsPrompt,
    'history':               historyPrompt,
    'history-mcqs':          historyPrompt,
    'pak-studies':           pakStudiesPrompt,
    'pak-studies-mcqs':      pakStudiesPrompt,
    'islamic-studies':       islamicStudiesPrompt,
    'islamic-studies-mcqs':  islamicStudiesPrompt,
    'general-knowledge':     generalKnowledgePrompt,
    'general-knowledge-mcqs':generalKnowledgePrompt,
    'english':               englishPrompt,
    'english-mcqs':          englishPrompt,
    'math':                  mathPrompt,
    'math-mcqs':             mathPrompt,
    'geography':             geographyPrompt,
    'geography-mcqs':        geographyPrompt,
    'science':               sciencePrompt,
    'science-mcqs':          sciencePrompt,
    'computer':              computerPrompt,
    'computer-mcqs':         computerPrompt,
};

export default prompts;