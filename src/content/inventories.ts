import entraIdLogo from "../assets/ms365-icons/entra-id.webp";
import exchangeLogo from "../assets/ms365-icons/exchange.webp";
import sharepointLogo from "../assets/ms365-icons/sharepoint.webp";
import onedriveLogo from "../assets/ms365-icons/onedrive.png";
import teamsLogo from "../assets/ms365-icons/teams.png";
import powerPlatformLogo from "../assets/ms365-icons/power-platform.webp";
import intuneLogo from "../assets/ms365-icons/intune.webp";
import { Crown, ShieldAlert, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface InventoryStatDefinition {
  icon: LucideIcon;
  tone: "neutral" | "success" | "danger";
}

export interface InventoryDefinition {
  id: string;
  i18nKey: string;
  logo: string;
  stats: InventoryStatDefinition[];
  hasThresholds?: boolean;
}

// Order must match the i18n object inventories.items
export const inventoryDefinitions: InventoryDefinition[] = [
  {
    id: "entra-id",
    i18nKey: "entraId",
    logo: entraIdLogo,
    stats: [
      { icon: Crown, tone: "neutral" },
      { icon: ShieldAlert, tone: "danger" }
    ]
  },
  {
    id: "exchange",
    i18nKey: "exchange",
    logo: exchangeLogo,
    stats: [
      { icon: Users, tone: "success" },
      { icon: Users, tone: "neutral" }
    ],
    hasThresholds: true
  },
  {
    id: "sharepoint",
    i18nKey: "sharepoint",
    logo: sharepointLogo,
    stats: [
      { icon: Users, tone: "neutral" },
      { icon: Users, tone: "danger" }
    ],
    hasThresholds: true
  },
  {
    id: "onedrive",
    i18nKey: "onedrive",
    logo: onedriveLogo,
    stats: [
      { icon: Users, tone: "success" },
      { icon: Users, tone: "danger" }
    ],
    hasThresholds: true
  },
  {
    id: "teams",
    i18nKey: "teams",
    logo: teamsLogo,
    stats: [
      { icon: Users, tone: "success" },
      { icon: Users, tone: "danger" }
    ],
    hasThresholds: true
  },
  {
    id: "power-platform",
    i18nKey: "powerPlatform",
    logo: powerPlatformLogo,
    stats: [
      { icon: ShieldAlert, tone: "neutral" },
      { icon: Users, tone: "danger" }
    ],
    hasThresholds: true
  },
  {
    id: "intune",
    i18nKey: "intune",
    logo: intuneLogo,
    stats: [
      { icon: Users, tone: "success" },
      { icon: ShieldAlert, tone: "danger" }
    ]
  }
];