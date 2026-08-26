export interface AuditHighlightDefinition {
  id: string;
  i18nKey: string;
}

export const auditHighlightDefinitions: AuditHighlightDefinition[] = [
  { id: "scoring", i18nKey: "scoring" },
  { id: "prioritized", i18nKey: "prioritized" },
  { id: "exportReady", i18nKey: "exportReady" }
];


export interface AuditControlDefinition {
  id: string;
  code: string;
  sourceI18nKey: string; 
  severity: "high" | "medium" | "low";
}

export const auditControlDefinitions: AuditControlDefinition[] = [
  { id: "external-tags", code: "ZL-74", sourceI18nKey: "outlook", severity: "high" },
  { id: "global-admins-range", code: "ZL-2", sourceI18nKey: "entraId", severity: "medium" },
  { id: "security-defaults-disabled", code: "ZL-4", sourceI18nKey: "entraId", severity: "medium" },
  { id: "guest-access-restricted", code: "ZL-5", sourceI18nKey: "entraId", severity: "medium" },
  { id: "app-creation-restricted", code: "ZL-6", sourceI18nKey: "entraId", severity: "medium" }
];