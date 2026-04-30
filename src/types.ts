export type ZelyntoIntent =
  | "m365_exploration"
  | "security_alerting"
  | "m365_provisioning"
  | "continuous_audit"
  | "unknown";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface ChatRequest {
  prompt: string;
  tenantId?: string;
  dryRun?: boolean;
}

export interface ChatResponse {
  intent: ZelyntoIntent;
  title: string;
  answer: string;
  data: unknown;
  nextActions: string[];
  requiresConfirmation?: boolean;
}

export interface ActionPlan {
  summary: string;
  steps: Array<{
    label: string;
    graphOperation: string;
    risk: RiskLevel;
  }>;
}

export interface AuditFinding {
  id: string;
  title: string;
  category: string;
  severity: RiskLevel;
  status: "pass" | "warning" | "fail";
  evidence: string;
  recommendation: string;
}
