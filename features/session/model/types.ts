export const CallStatus = {
    INACTIVE: "INACTIVE",
    CONNECTING: "CONNECTING",
    ACTIVE: "ACTIVE",
    FINISHED: "FINISHED",
} as const;

export type CallStatusType = typeof CallStatus[keyof typeof CallStatus];

type Role =  "user" | "system" | "assistant"

export interface SavedMessage {
    role: Role;
    content: string;
}

export interface AgentProps {
    userName: string;
    userId: string;
    interviewId?: string;
    feedbackId?: string;
    type: "generate" | "interview";
    questions?: string[];
}