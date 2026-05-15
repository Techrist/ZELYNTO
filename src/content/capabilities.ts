export type CapabilityVariant = "explore" | "security" | "automation" | "compliance";

export interface Capability {
  id: string;
  variant: CapabilityVariant;
  reverse: boolean;
}

export const capabilities: Capability[] = [
  { id: "exploration", variant: "explore", reverse: false },
  { id: "security-copilot", variant: "security", reverse: true },
  { id: "automation", variant: "automation", reverse: false },
  { id: "compliance", variant: "compliance", reverse: true }
];
