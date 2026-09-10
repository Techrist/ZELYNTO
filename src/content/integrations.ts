import outlookIcon from "../assets/icons/outlook.webp";
import teamsIcon from "../assets/icons/teams.webp";
import sharepointIcon from "../assets/icons/sharepoint.webp";
import entraIcon from "../assets/icons/entra-id.webp";
import { assetUrl } from "../assets/asset";

export interface Integration {
  icon: string;
  label: string;
  alt: string;
}

export const integrations: Integration[] = [
  { icon: assetUrl(outlookIcon), label: "Outlook", alt: "Microsoft Outlook" },
  { icon: assetUrl(teamsIcon), label: "Teams", alt: "Microsoft Teams" },
  { icon: assetUrl(sharepointIcon), label: "SharePoint", alt: "Microsoft SharePoint" },
  { icon: assetUrl(entraIcon), label: "Entra ID", alt: "Microsoft Entra ID" }
];
