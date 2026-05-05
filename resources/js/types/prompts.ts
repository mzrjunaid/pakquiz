export interface PromptConfig {
  topics?: string[];          // e.g. ["pakistan-politics", "sports-current-affairs"]
  subjectSlug?: string;       // e.g. "current-affairs"
  topicSlug?: string;         // e.g. "mughal-empire"
  quantity?: number;          // e.g. 30
  createdBy?: number;         // user ID
  dateScope?: string;         // e.g. "yesterday" | "last week"
  paperSlug?: string;         // e.g. null | "css-2024"
  customInstruction?: string; // any extra instruction
}