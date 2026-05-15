import outlookIcon from "../assets/icons/outlook.svg";
import teamsIcon from "../assets/icons/teams.svg";
import sharepointIcon from "../assets/icons/sharepoint.svg";
import entraIcon from "../assets/icons/entra-id.svg";

export interface Integration {
  icon: string;
  label: string;
  alt: string;
}

export const integrations: Integration[] = [
  { icon: outlookIcon, label: "Outlook", alt: "Microsoft Outlook" },
  { icon: teamsIcon, label: "Teams", alt: "Microsoft Teams" },
  { icon: sharepointIcon, label: "SharePoint", alt: "Microsoft SharePoint" },
  { icon: entraIcon, label: "Entra ID", alt: "Microsoft Entra ID" }
];
