export type FieldType = "text" | "textarea" | "number" | "checkbox";

export interface AgentField {
  name: string;
  label: string;
  type: FieldType;
  rows?: number;
  placeholder?: string;
}

export interface AgentConfig {
  slug: string;
  title: string;
  tagline: string;
  purpose: string;
  accent: string;
  features: string[];
  limitations: string[];
  fields: AgentField[];
  sample: Record<string, string | number | boolean>;
  repo: string;
}

export const agent: AgentConfig = {
  "slug": "plotxyz-prompt-optimizer-agent",
  "title": "Prompt Optimizer",
  "tagline": "Make prompts clearer before they reach the model.",
  "purpose": "Reviews a prompt for ambiguity, missing examples, and weak instructions, then proposes an optimized version with improvement notes.",
  "accent": "#4ade80",
  "features": [
    "Prompt clarity scoring",
    "Targeted improvement suggestions",
    "Before/after patch"
  ],
  "limitations": [
    "Optimizations are heuristic; test on real inputs before relying on them.",
    "The rewrite preserves intent only approximately."
  ],
  "fields": [
    {
      "name": "prompt",
      "label": "Prompt text",
      "type": "textarea",
      "rows": 8,
      "placeholder": ""
    },
    {
      "name": "task_type",
      "label": "Task (general, coding, summary, analysis)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    },
    {
      "name": "audience",
      "label": "Audience (beginner, expert, general)",
      "type": "text",
      "rows": 4,
      "placeholder": ""
    }
  ],
  "sample": {
    "prompt": "Write a function that processes data",
    "task_type": "coding",
    "audience": "beginner"
  },
  "repo": "https://github.com/sukhee-2626/plotxyz-prompt-optimizer-agent"
};
