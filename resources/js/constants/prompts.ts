const currentAffairsPrompt = `
You are an expert **Current Affairs researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Current Affairs MCQs based ONLY on Yesterday's important events**.

These MCQs are being created for a **Pakistan competitive exam preparation platform** and must be suitable for:

- FPSC
- PPSC
- NTS
- CSS
- PMS
- General Job Tests
- Current Affairs quiz preparation

The output must be:
- **factually accurate**
- **exam-oriented**
- **non-repetitive**
- **import-ready**
- returned in my **STRICT custom Markdown format**

---

# DATE SCOPE

Generate MCQs only from **important events that happened yesterday**.

If an event started earlier but had a **major update yesterday**, it may be included.

Do **not** include outdated or irrelevant old news unless it had a significant development yesterday.

---

# CONTENT COVERAGE

Cover yesterday’s important developments from these areas:

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

Create MCQs that are:
- factual
- objective
- exam-relevant
- concise
- useful for daily current affairs prep

Prefer questions about:
- appointments and resignations
- awards and honours
- reports and rankings
- summits and conferences
- treaties and agreements
- international organizations
- capitals, countries and currencies (when relevant)
- dates, venues and hosts
- winners, titles and records
- policy decisions and official announcements
- international affairs
- Pakistan government affairs
- elections and democracy
- trade and commerce
- defense and security developments
- health and medical breakthroughs
- space and science discoveries
- natural disasters and climate events
- AI and technology updates
- terrorism and conflict updates

Avoid:
- opinion-based questions
- vague wording
- trick questions without value
- gossip/entertainment fluff
- duplicate questions
- unnecessary complexity

---

# STRICT OUTPUT FORMAT (VERY IMPORTANT)

Return **ALL MCQs strictly in the following Markdown format**.

Do not change the structure.

Do not add extra commentary before or after.

Use this exact format:

# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single|multiple
Subject Slug: {subject-slug}
Topic Slug: {topic-slug}
Paper Slug: null
Created By: 1
Tags: {comma, hyphanated, tags}
Options:
A) {option text}
B) {option text} [correct]
C) {option text}
D) {option text}
Explanation: {explanation text}
---

---

# FIELD RULES

## 1) Question
- Write a clear, grammatically correct MCQ question
- Keep it concise and exam-friendly
- Avoid ambiguous wording

## 2) Slug
Generate a **clean SEO-friendly unique slug** based on the question.

Rules:
- lowercase only
- words separated by hyphens
- no special characters
- no duplicate slugs

Example:
who-was-appointed-new-chairman-of-ogra-april-2026

## 3) Difficulty
Use only one of:
- easy
- medium
- hard

Guideline:
- **easy** = direct factual recall
- **medium** = slightly analytical / detail-based
- **hard** = deeper or less obvious fact

## 4) MCQ Type
Use:
- 'single' for one correct answer
- 'multiple' only if more than one option is correct

Default to 'single' unless necessary.

## 5) Subject Slug
Always use:
current-affairs

## 6) Topic Slug
Choose the **following relevant topic slug** based on the question.

-appointments-resignations
-ai-and-technology
-awards-and-honours
-climate-and-environment
-defense-and-security
-education-and-social
-elections-and-democracy
-foreign-relations
-global-economy
-global-energy
-health-and-medicine
-important-days-and-events
-international-organizations
-natural-disasters
-pakistan-economy
-pakistan-politics
-reports-and-rankings
-science-and-technology
-space-and-exploration
-sports-current-affairs
-summits-and-conferences
-terrorism-and-conflicts
-trade-and-commerce
-treaties-and-agreements

Use the **best-matching topic slug** for each MCQ. Don't use any other topic unless it is very necessary.

## 7) Paper Slug
Always use:
null

## 8) Created By
Always use the exact user ID I provided

## 9) Tags
Generate **relevant comma-separated tags** for each MCQ.

Rules:
- 3 to 8 tags
- lowercase preferred
- Hyphenated
- use topic-relevant tags
- include entity names where useful
- avoid useless generic tags

Example:
pakistan, ogra, chairman-nadra, appointment, energy, regulation

## 10) Options
Rules:
- Always provide **4 options**
- Keep options realistic and plausible
- Avoid obviously fake distractors
- Mark the correct option using:
  [correct]

Example:
A) Islamabad
B) Lahore [correct]
C) Karachi
D) Peshawar

## 11) Explanation
Write a **short but useful explanation**:
- 1 to 3 lines
- explain why the answer is correct
- You can use MD Format to emphasise information or give a reference to the source, or highlight with class "text-primary" link with Wikipedia if the source is found on Wikipedia.
- include factual context where useful

---

# IMPORTANT MCQ RULES

- **Randomise correct answers**
  Do NOT keep all correct answers on Option A or B.
- Make sure answer positions are naturally distributed across A, B, C, and D.
- Do not repeat the same fact in multiple questions unless asked.
- Questions must be based on **high-value yesterday current affairs**.
- If there are not enough strong events, prioritise **quality over quantity**.

---

# OUTPUT QUANTITY

Generate **50 high-quality MCQs**.

If there are enough important events, you may generate up to **50 MCQs**, but prioritise **quality, uniqueness, and exam relevance**.

---

# FINAL INSTRUCTION

Return the response in a code block to keep the format accurate, **clean Markdown only**, and in the exact structure requested.

Do not include:
- introductions
- notes
- apologies
- explanations outside the MCQ format
- section headings other than the MCQ blocks

`;

const pakStudiesPrompt = `
`;

const englishPrompt = `
`;

const islamicStudiesPrompt = `
`;

const mathPrompt = `
`;

const physicsPrompt = `
`;

const chemistryPrompt = `
`;

const biologyPrompt = `
`;

const computerPrompt = `
`;

const generalKnowledgePrompt = `
`;

const historyPrompt = `
You are an expert **History researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Mughal History MCQs** in a **topic-by-topic structured format**.

These MCQs are for **Pakistan competitive exams**, including:

- FPSC
- PPSC
- NTS
- CSS
- PMS
- General Job Tests

---

# OBJECTIVE

Generate **exam-oriented, factual, and non-repetitive MCQs** covering the **Mughal Empire in a systematic topic-wise manner**.

---

# TOPIC-WISE COVERAGE (VERY IMPORTANT)

You must generate MCQs **topic by topic**, not randomly.

Follow this sequence:

1. Foundation of Mughal Empire  
   (Babur, First Battle of Panipat, Central Asian background)

2. Humayun  
   (Struggles, exile, return, Persian influence)

3. Akbar the Great  
   (Administration, Mansabdari system, Din-i-Ilahi, expansion)

4. Jahangir  
   (Policies, Nur Jahan, justice system, foreign relations)

5. Shah Jahan  
   (Architecture, administration, golden age, Taj Mahal)

6. Aurangzeb  
   (Religious policies, Deccan campaigns, decline factors)

7. Mughal Administration  
   (Central administration, revenue system, military system)

8. Mughal Economy & Society  
   (Agriculture, trade, social structure)

9. Mughal Art & Culture  
   (Architecture, painting, literature)

10. Decline of Mughal Empire  
   (Internal weaknesses, invasions, regional powers)

---

# MCQ DISTRIBUTION

- Generate **balanced MCQs from each topic**
- Cover **all major rulers and systems**
- Avoid over-focusing on a single emperor

---

# QUESTION QUALITY RULES

Each MCQ must be:
- factual
- exam-relevant
- concise
- non-ambiguous

Focus on:
- dates
- battles
- policies
- systems
- personalities
- contributions
- causes and effects

Avoid:
- opinions
- vague questions
- repeated facts

---

# STRICT OUTPUT FORMAT (MANDATORY)

Follow this exact Markdown structure:

# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single
Subject Slug: history
Topic Slug: mughal-empire
Paper Slug: null
Created By: 1
Tags: {comma-separated-tags}
Options:
A) {option}
B) {option}
C) {option}
D) {option}
Explanation: {1-2 line explanation}
---

---

# FIELD RULES

## Slug
- lowercase
- hyphen-separated
- unique

## Difficulty
- easy = direct fact
- medium = conceptual/detail
- hard = analytical/deep

## Tags
- 3 to 8 tags
- topic-relevant
- hyphenated

---

# IMPORTANT RULES

- Randomize correct answers (A/B/C/D distribution)
- Do NOT repeat facts
- Maintain conceptual clarity
- Keep options realistic
- Ensure historical accuracy

---

# OUTPUT QUANTITY

- Generate **50 MCQs total**
- Ensure **all topics are covered proportionally**

---

# FINAL INSTRUCTION

Return output in a **single Markdown code block**.

Do NOT include:
- explanations outside MCQs
- headings
- commentary

`;

const geographyPrompt = `
`;

const prompts: Record<string, string> = {
  'current-affairs-mcqs': currentAffairsPrompt,
  'pak-studies-mcqs': pakStudiesPrompt,
  'english-mcqs': englishPrompt,
  'islamic-studies-mcqs': islamicStudiesPrompt,
  'math-mcqs': mathPrompt,
  'physics-mcqs': physicsPrompt,
  'chemistry-mcqs': chemistryPrompt,
  'biology-mcqs': biologyPrompt,
  'computer-mcqs': computerPrompt,
  'general-knowledge-mcqs': generalKnowledgePrompt,
  'history-mcqs': historyPrompt,
  'geography-mcqs': geographyPrompt,

};

export default prompts;
