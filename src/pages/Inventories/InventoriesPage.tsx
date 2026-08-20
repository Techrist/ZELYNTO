import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Archive,
  ArrowRightCircle,
  AppWindow,
  Ban,
  Bot,
  Building2,
  CheckCircle2,
  Cloud,
  Contact,
  Database,
  FileText,
  Folder,
  Globe,
  Grid2x2,
  HardDrive,
  HelpCircle,
  History,
  Inbox,
  Infinity as InfinityIcon,
  Laptop,
  Link,
  List,
  Lock,
  Megaphone,
  Monitor,
  Moon,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  Smartphone,
  Trash2,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { inventoryDefinitions } from "../../content/inventories";
import inventoriesHeroImage from "../../assets/inventories-hero.png";
import "./Inventories.css";

interface InventoryItemText {
  name: string;
  subtitle: string;
  stats: string[];
}

interface GhostBanner {
  tone: "success" | "progress" | "warning";
  /** bold first line, only used when the banner has two lines (e.g. warning) */
  title?: string;
  text: string;
  /** 0-100, only used when tone === "progress" */
  percent?: number;
}

interface GhostHeaderThreshold {
  label: string;
  options: string[];
  active: string;
}

interface GhostStatCard {
  value: number | string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  /** small pill shown top-right of the card, e.g. "+90d" */
  cornerTag?: string;
}

interface GhostThresholdSelector {
  options: string[];
  active: string;
}

interface GhostStatGroup {
  title: string;
  thresholds?: GhostThresholdSelector;
  cards: GhostStatCard[];
}

interface GhostBadge {
  label: string;
  value: number | string;
  icon: LucideIcon;
  /** shows a small checkbox indicator, e.g. Exchange "Attributes & risk" */
  checkbox?: boolean;
}

interface GhostBadgeGroup {
  title: string;
  /** small note next to the title, e.g. "(all selected must match)" */
  note?: string;
  badges: GhostBadge[];
}

interface GhostTabContent {
  banner?: GhostBanner;
  /** threshold selector shown in the panel header instead of inline in a stat group (e.g. SharePoint) */
  headerThreshold?: GhostHeaderThreshold;
  statGroups: GhostStatGroup[];
  badgeGroups: GhostBadgeGroup[];
  selectionCount: number;
  /** small note under "Selection (X)", e.g. "No active filter" */
  selectionNote?: string;
  tableColumns: string[];
  /** a cell is either plain text, or a list of tags rendered as separate pills (e.g. ["Inactive", "Guests"]) */
  rows: (string | string[])[][];
}

interface GhostTabDefinition {
  key: string;
  label: string;
}

interface GhostServiceSection {
  /** must match an id in inventoryDefinitions, used to highlight the row in the list card */
  id: string;
  /** visible page heading shown above the section, e.g. "Exchange" */
  heading: string;
  /** short descriptive line under the heading, specific to this service */
  subheading: string;
  /** where the visible heading sits above the stage; defaults to left */
  headingAlign?: "left" | "right";
  /** title shown inside the small blurred detail panel, e.g. "Exchange — overview" */
  title: string;
  description: string;
  tabs: GhostTabDefinition[];
  content: Record<string, GhostTabContent>;
}

const POSITIVE_CELLS = ["Active", "Enabled", "Compliant", "Used"];
const NEGATIVE_CELLS = ["Inactive", "Non-compliant", "Disabled", "Stale", "Unused"];
const WARNING_TAGS = ["Archived"];
const INFO_TAGS = ["Guests"];

function cellTone(value: string): "success" | "danger" | "neutral" {
  if (POSITIVE_CELLS.some((word) => value.includes(word))) return "success";
  if (NEGATIVE_CELLS.some((word) => value.includes(word))) return "danger";
  return "neutral";
}

/** tone for a standalone tag pill within a multi-tag cell (e.g. "Archived", "Guests") */
function tagTone(value: string): "success" | "danger" | "warning" | "info" | "neutral" {
  if (WARNING_TAGS.some((word) => value.includes(word))) return "warning";
  if (INFO_TAGS.some((word) => value.includes(word))) return "info";
  return cellTone(value);
}

/**
 * The ghost detail panel content below is written once in English as the
 * source of truth (icons, layout and copy live together for readability).
 * Each string rendered from it is looked up in inventories.detail.labels
 * via a slug of its own text, falling back to the English text itself when
 * no translation exists (numbers, dashes and proper nouns like people or
 * team names are intentionally left untranslated this way).
 */
function slugifyGhostLabel(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

const ghostSections: GhostServiceSection[] = [
  {
    id: "entra-id",
    heading: "Entra ID",
    subheading: "Identities, groups and devices across your tenant, with risk signals surfaced up front.",
    title: "Entra ID — overview",
    description: "Counters follow your selection",
    tabs: [
      { key: "users", label: "Users" },
      { key: "groups", label: "Groups" },
      { key: "devices", label: "Devices" }
    ],
    content: {
      users: {
        banner: {
          tone: "success",
          text: "Breakglass accounts: 2. Excluded from the filters below."
        },
        statGroups: [
          {
            title: "Account status",
            cards: [
              { value: 218, label: "All", icon: Grid2x2, active: true },
              { value: 114, label: "Enabled", icon: UserCheck },
              { value: 104, label: "Disabled", icon: UserX }
            ]
          },
          {
            title: "Activity",
            cards: [
              { value: 218, label: "All", icon: Grid2x2, active: true },
              { value: 12, label: "Active", icon: Activity },
              { value: 206, label: "Inactive", icon: Moon }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Type & source",
            badges: [
              { label: "Member", value: 216, icon: User },
              { label: "Guest", value: 2, icon: UserPlus },
              { label: "Licensed", value: 25, icon: CheckCircle2 },
              { label: "Cloud-only", value: 218, icon: Cloud }
            ]
          },
          {
            title: "Risk signals",
            badges: [
              { label: "No MFA", value: 207, icon: ShieldAlert },
              { label: "Never expires", value: 3, icon: InfinityIcon },
              { label: "Legacy auth", value: 0, icon: History },
              { label: "No manager", value: 201, icon: UserMinus }
            ]
          }
        ],
        selectionCount: 218,
        tableColumns: ["User", "Type", "Status", "Last activity", "Signals"],
        rows: [
          ["Adele Vance", "Member", "Enabled", "738d ago", "No MFA · Never expires"],
          ["Alex Wilber", "Member", "Enabled", "738d ago", "No MFA · Never expires"],
          ["ATS_Fredy", "Member", "Enabled", "—", "No MFA · No manager"],
          ["Diego Siciliani", "Member", "Enabled", "738d ago", "No MFA"]
        ]
      },
      groups: {
        statGroups: [
          {
            title: "Group type",
            cards: [
              { value: 195, label: "All", icon: Grid2x2, active: true },
              { value: 54, label: "Security", icon: Shield },
              { value: 40, label: "M365", icon: Cloud },
              { value: 101, label: "Other", icon: HelpCircle }
            ]
          },
          {
            title: "Synchronization",
            cards: [
              { value: 195, label: "All", icon: Grid2x2, active: true },
              { value: 0, label: "Synced", icon: RefreshCw },
              { value: 195, label: "Cloud-only", icon: Cloud }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Attributes & risk",
            badges: [
              { label: "Dynamic", value: 2, icon: Zap },
              { label: "Empty", value: 5, icon: Inbox },
              { label: "No owner", value: 157, icon: UserX },
              { label: "External members", value: 11, icon: Globe }
            ]
          }
        ],
        selectionCount: 195,
        tableColumns: ["Group", "Type", "Sync", "Signals"],
        rows: [
          ["zltseed-dl-0096", "Other", "Cloud-only", "No owner"],
          ["zltseed-dl-0067", "Other", "Cloud-only", "No owner"],
          ["zltseed-dl-0005", "Other", "Cloud-only", "No owner"],
          ["Vinci Test", "M365", "Cloud-only", "External members"]
        ]
      },
      devices: {
        statGroups: [
          {
            title: "Management",
            cards: [
              { value: 7, label: "Total", icon: Grid2x2, active: true },
              { value: 2, label: "Managed", icon: ShieldCheck },
              { value: 5, label: "Unmanaged", icon: ShieldOff }
            ]
          },
          {
            title: "Activity",
            cards: [
              { value: 7, label: "All", icon: Grid2x2, active: true },
              { value: 4, label: "Active", icon: Activity },
              { value: 3, label: "Inactive", icon: Moon }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Compliance & state",
            badges: [
              { label: "Compliant", value: 1, icon: ShieldCheck },
              { label: "Non-compliant", value: 1, icon: ShieldAlert },
              { label: "Stale", value: 1, icon: History }
            ]
          },
          {
            title: "Operating system",
            badges: [
              { label: "Windows", value: 5, icon: AppWindow },
              { label: "Android", value: 2, icon: Smartphone },
              { label: "iOS", value: 0, icon: Smartphone },
              { label: "macOS", value: 0, icon: Laptop },
              { label: "Others", value: 0, icon: HelpCircle }
            ]
          },
          {
            title: "Ownership",
            badges: [
              { label: "Corporate", value: 6, icon: Building2 },
              { label: "Personal", value: 1, icon: User },
              { label: "Autopilot", value: 0, icon: Rocket }
            ]
          }
        ],
        selectionCount: 7,
        tableColumns: ["Device", "OS", "Join type", "Ownership", "Last activity", "Status"],
        rows: [
          ["IAMSURFACE", "Windows", "Entra ID joined", "Corporate", "5d ago", "Compliant · Active"],
          ["TECNOTECNO KJ5", "Android", "Azure AD registered", "Corporate", "99d ago", "Inactive"],
          ["DESKTOP-EGE856T", "Windows", "—", "Personal", "277d ago", "Non-compliant · Inactive"],
          ["samsungSM-A716S", "Android", "Azure AD registered", "Corporate", "3d ago", "Active"]
        ]
      }
    }
  },
  {
    id: "exchange",
    heading: "Exchange",
    subheading: "Mailboxes, shared resources and distribution lists, flagged for retention and forwarding risks.",
    title: "Exchange — overview",
    description: "Counters follow your selection",
    tabs: [
      { key: "mailboxes", label: "Mailboxes" },
      { key: "listsContacts", label: "Lists & contacts" }
    ],
    content: {
      mailboxes: {
        banner: {
          tone: "progress",
          text: "Data completion in progress — the list below updates automatically (99%).",
          percent: 99
        },
        statGroups: [
          {
            title: "Mailbox type",
            cards: [
              { value: 203, label: "All", icon: Grid2x2, active: true },
              { value: 23, label: "User", icon: User },
              { value: 102, label: "Shared", icon: UserPlus },
              { value: 61, label: "Room", icon: Building2 },
              { value: 16, label: "Equipment", icon: Monitor },
              { value: 1, label: "Discovery", icon: Search }
            ]
          },
          {
            title: "Activity",
            thresholds: { options: ["30d", "90d", "180d"], active: "90d" },
            cards: [
              { value: 203, label: "All", icon: Grid2x2, active: true },
              { value: 77, label: "Active", icon: Activity },
              { value: 126, label: "Inactive", icon: Moon, cornerTag: "+90d" }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Attributes & risk",
            note: "(all selected must match)",
            badges: [
              { label: "Archive-enabled", value: 2, icon: Archive, checkbox: true },
              { label: "Litigation hold", value: 1, icon: Scale, checkbox: true },
              { label: "Soft deleted", value: 1, icon: Trash2, checkbox: true },
              { label: "Without delegates", value: 102, icon: UserMinus, checkbox: true },
              { label: "Forwarding enabled", value: 2, icon: ArrowRightCircle, checkbox: true },
              { label: "External forwarding", value: 1, icon: Globe, checkbox: true }
            ]
          }
        ],
        selectionCount: 203,
        selectionNote: "No active filter",
        tableColumns: ["Mailbox", "Type", "Size (GB)", "Last activity", "Signals"],
        rows: [
          ["Joseph MBA", "User", "0", "—", "—"],
          ["Megan Bowen", "User", "0", "—", "Archive · Litigation hold · Ext. forwarding"],
          ["Isaiah Langer", "User", "0", "—", "—"],
          ["Grace NGUESSI", "User", "0", "—", "—"],
          ["Grady Archie", "User", "0", "—", "—"]
        ]
      },
      listsContacts: {
        banner: {
          tone: "progress",
          text: "Data completion in progress — the list below updates automatically (99%).",
          percent: 99
        },
        statGroups: [
          {
            title: "Object type",
            cards: [
              { value: 106, label: "All", icon: Grid2x2, active: true },
              { value: 1, label: "Distribution list", icon: List },
              { value: 1, label: "Dynamic DL", icon: RefreshCw },
              { value: 1, label: "Mail-enabled group", icon: ShieldCheck },
              { value: 1, label: "Room list", icon: Building2 },
              { value: 100, label: "Mail contact", icon: Contact },
              { value: 2, label: "Mail user", icon: User }
            ]
          },
          {
            title: "Usage (based on Message Trace — window shown per row)",
            cards: [
              { value: 106, label: "All", icon: Grid2x2, active: true },
              { value: 0, label: "Used", icon: CheckCircle2 },
              { value: 0, label: "Unused", icon: Moon }
            ]
          }
        ],
        badgeGroups: [],
        selectionCount: 106,
        selectionNote: "No active filter",
        tableColumns: ["Name", "Type", "Status"],
        rows: [
          ["—", "Distribution list", "—"],
          ["—", "Mail-enabled group", "—"],
          ["—", "Dynamic DL", "—"],
          ["External Contact Test", "Mail contact", "—"],
          ["zltseed-contact-0001", "Mail contact", "—"]
        ]
      }
    }
  },
  {
    id: "sharepoint",
    heading: "SharePoint",
    subheading: "Sites, storage and sharing across the tenant, with governance risks called out.",
    title: "SharePoint — overview",
    description: "Counters follow your selection",
    tabs: [{ key: "sites", label: "Sites" }],
    content: {
      sites: {
        banner: {
          tone: "warning",
          title: "User names are hidden in this tenant's reports",
          text: "An administrator can disable this in the Microsoft 365 admin center (Settings > Org settings > Reports) to show Owner/UPN normally."
        },
        headerThreshold: { label: "Inactivity:", options: ["30d", "90d", "180d"], active: "90d" },
        statGroups: [
          {
            title: "Summary — informative",
            cards: [
              { value: 0, label: "Files", icon: FileText },
              { value: "0 B", label: "Storage used", icon: Database },
              { value: 0, label: "External sharing enabled", icon: Globe }
            ]
          },
          {
            title: "Site type",
            cards: [
              { value: 97, label: "All", icon: Grid2x2, active: true },
              { value: 0, label: "Team-connected", icon: User },
              { value: 0, label: "Private channel", icon: Lock },
              { value: 0, label: "Communication", icon: Megaphone },
              { value: 97, label: "Other", icon: Folder }
            ]
          },
          {
            title: "Activity",
            cards: [
              { value: 97, label: "All", icon: Grid2x2, active: true },
              { value: 0, label: "Active", icon: Activity },
              { value: 97, label: "Inactive", icon: Moon, cornerTag: "+90d" }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Governance & risk",
            note: "(all selected must match)",
            badges: [
              { label: "External sharing", value: 0, icon: Globe, checkbox: true },
              { label: "Anonymous links", value: 0, icon: Link, checkbox: true },
              { label: "Orphans", value: 76, icon: UserX, checkbox: true },
              { label: "Oversized (>100GB)", value: 0, icon: HardDrive, checkbox: true }
            ]
          }
        ],
        selectionCount: 97,
        selectionNote: "No active filter",
        tableColumns: ["Site", "Template", "Storage (GB)", "Owners", "Last activity", "Signals"],
        rows: [
          ["Joseph MBA", "Other", "0", "1", "—", "—"],
          ["Grace NGUESSI", "Other", "0", "1", "—", "—"],
          ["Test Teams 6", "Other", "0", "0", "—", "Orphan"],
          ["Test orphan 4", "Other", "0", "0", "—", "Orphan"]
        ]
      }
    }
  },
  {
    id: "onedrive",
    heading: "OneDrive",
    subheading: "Personal drives and their storage footprint, with orphaned accounts flagged.",
    title: "OneDrive — overview",
    description: "Counters follow your selection",
    tabs: [{ key: "accounts", label: "Accounts" }],
    content: {
      accounts: {
        banner: {
          tone: "warning",
          title: "User names are hidden in this tenant's reports",
          text: "An administrator can disable this in the Microsoft 365 admin center (Settings > Org settings > Reports) to show Owner/UPN normally."
        },
        headerThreshold: { label: "Inactivity:", options: ["30d", "90d", "180d"], active: "90d" },
        statGroups: [
          {
            title: "Summary — informative",
            cards: [
              { value: 70, label: "Files", icon: FileText },
              { value: "16 MB", label: "Storage used", icon: Database }
            ]
          },
          {
            title: "Activity",
            cards: [
              { value: 21, label: "All", icon: Grid2x2, active: true },
              { value: 1, label: "Active", icon: Activity },
              { value: 20, label: "Inactive", icon: Moon, cornerTag: "+90d" }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Governance & risk",
            note: "(External sharing / Anonymous links unavailable on OneDrive)",
            badges: [{ label: "Orphaned", value: 0, icon: UserX, checkbox: true }]
          }
        ],
        selectionCount: 21,
        selectionNote: "No active filter",
        tableColumns: ["Owner", "UPN", "Storage (GB)", "Last activity", "Signals"],
        rows: [
          ["2352592493D36BA883FCB25A3789684F", "635A15A9C5BE6817F41175F26C39B7E8", "0", "—", "—"],
          ["EC0FCCDD7C1CAAE3463EF4020E325E41", "75E15CC2A31AD93A77385DC4FE4BB1CB", "0", "—", "—"],
          ["A46EC9FBA75C50F15B1728A154FA7768", "18F09C2397B9940454AB5264A885CB43", "0.01", "21d ago", "—"]
        ]
      }
    }
  },
  {
    id: "teams",
    heading: "Teams",
    subheading: "Teams and their visibility across the tenant, with archived and guest-owned teams flagged.",
    title: "Teams — overview",
    description: "Counters follow your selection",
    tabs: [{ key: "teams", label: "Teams" }],
    content: {
      teams: {
        headerThreshold: { label: "Inactivity:", options: ["30d", "90d", "180d"], active: "90d" },
        statGroups: [
          {
            title: "Status",
            cards: [
              { value: 24, label: "All", icon: Grid2x2, active: true },
              { value: 5, label: "Active", icon: Activity },
              { value: 19, label: "Inactive", icon: Moon, cornerTag: "+90d" }
            ]
          },
          {
            title: "Visibility",
            cards: [
              { value: 24, label: "All", icon: Grid2x2, active: true },
              { value: 15, label: "Private", icon: Lock },
              { value: 9, label: "Public", icon: Globe }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Refine",
            badges: [
              { label: "Archived", value: 3, icon: Archive, checkbox: true },
              { label: "With guests", value: 3, icon: UserPlus, checkbox: true },
              { label: "Orphaned", value: 0, icon: User, checkbox: true }
            ]
          }
        ],
        selectionCount: 24,
        selectionNote: "No active filter",
        tableColumns: ["Team", "Visibility", "Last activity", "Status"],
        rows: [
          ["MSFT", "Public", "—", ["Inactive"]],
          ["U.S. Sales", "Public", "—", ["Inactive"]],
          ["Equipe Zelynto", "Public", "176d ago", ["Inactive", "Guests"]],
          ["Projet Test_MCP", "Private", "134d ago", ["Inactive", "Archived"]]
        ]
      }
    }
  },
  {
    id: "power-platform",
    heading: "Power Platform",
    subheading: "Environments, apps and flows across the tenant, with inactive and disabled items surfaced.",
    title: "Power Platform — overview",
    description: "Counters follow your selection",
    tabs: [{ key: "overview", label: "Overview" }],
    content: {
      overview: {
        headerThreshold: { label: "Inactivity:", options: ["30d", "90d", "180d"], active: "90d" },
        statGroups: [
          {
            title: "Object type",
            cards: [
              { value: 7, label: "All", icon: Grid2x2, active: true },
              { value: 4, label: "Environment", icon: Server },
              { value: 3, label: "Canvas Apps", icon: AppWindow },
              { value: 0, label: "Model-Driven Apps", icon: Database },
              { value: 0, label: "Cloud Flows", icon: Zap },
              { value: 0, label: "Desktop Flows", icon: Bot }
            ]
          },
          {
            title: "Activity",
            cards: [
              { value: 7, label: "All", icon: Grid2x2, active: true },
              { value: 3, label: "Active", icon: Activity },
              { value: 4, label: "Inactive", icon: Moon, cornerTag: "+90d" }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "State — Apps and Flows only",
            badges: [{ label: "Disabled", value: 0, icon: Ban, checkbox: true }]
          }
        ],
        selectionCount: 7,
        selectionNote: "No active filter",
        tableColumns: ["Name", "Type", "Environment", "Last activity", "Status"],
        rows: [
          ["dev-test-zelynto", "Environment", "—", "30d ago", "—"],
          ["MSFT", "Environment", "—", "132d ago", "—"],
          ["DemandesInternes", "Canvas Apps", "MSFT (default)", "141d ago", "Enabled"],
          ["Cas d'usage APP Gouvernance V2", "Canvas Apps", "[DEV] - Vinci Solutions", "51d ago", "Enabled"]
        ]
      }
    }
  },
  {
    id: "intune",
    heading: "Intune",
    subheading: "Managed devices and their compliance status across platforms.",
    title: "Intune — overview",
    description: "Counters follow your selection",
    tabs: [{ key: "devices", label: "Devices" }],
    content: {
      devices: {
        statGroups: [
          {
            title: "Status",
            cards: [
              { value: 3, label: "Total", icon: Grid2x2, active: true },
              { value: 1, label: "Compliant", icon: ShieldCheck },
              { value: 2, label: "Non-compliant", icon: ShieldOff }
            ]
          }
        ],
        badgeGroups: [
          {
            title: "Platform",
            badges: [
              { label: "Windows", value: 2, icon: Monitor, checkbox: true },
              { label: "Android", value: 0, icon: Smartphone, checkbox: true },
              { label: "iOS", value: 0, icon: Smartphone, checkbox: true },
              { label: "macOS", value: 0, icon: Laptop, checkbox: true }
            ]
          }
        ],
        selectionCount: 3,
        selectionNote: "No active filter",
        tableColumns: ["Device", "Platform", "User", "Status"],
        rows: [
          ["IAMSURFACE", "Windows", "Fredy TABOUTSA", "Compliant"],
          ["fredy.taboutsa_Windows_7/7/2026_2:40 PM", "other", "Fredy TABOUTSA", "Non-compliant"],
          ["DESKTOP-EGE856T", "Windows", "valione test", "Non-compliant"]
        ]
      }
    }
  }
];

export function InventoriesPage() {
  const { t } = useTranslation();
  const tt = (value: string) =>
    t(`inventories.detail.labels.${slugifyGhostLabel(value)}`, { defaultValue: value });
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>(() =>
    Object.fromEntries(ghostSections.map((section) => [section.id, section.tabs[0]?.key ?? ""]))
  );

  return (
    <section className="inventoriesHero">
      <div className="inventoriesHeroInner">
        <div className="inventoriesIntro">
        <div className="inventoriesIntroText">
          <span className="sectionLabel">{t("inventories.label")}</span>
          <h1>{t("inventories.title")}</h1>
          <p>{t("inventories.description")}</p>
        </div>
        <img
          src={inventoriesHeroImage}
          alt=""
          className="inventoriesIntroImage"
        />
      </div>

        {ghostSections.map((section) => {
          // activeTabKey is always defined: the initial state sets one entry per
          // section, and setActiveTabs only ever writes a key taken from
          // section.tabs — so it always matches a key in section.content.
          const activeTabKey = activeTabs[section.id] ?? section.tabs[0]?.key ?? "";
          const currentGhost = section.content[activeTabKey]!;
          const tableGridStyle = {
            gridTemplateColumns: `repeat(${currentGhost.tableColumns.length}, minmax(0, 1fr))`
          };

          return (
            <React.Fragment key={section.id}>
              <div
                className={
                  section.headingAlign === "right"
                    ? "inventoriesSectionHeader alignRight"
                    : "inventoriesSectionHeader"
                }
              >
                <h2>{tt(section.heading)}</h2>
                <p>{tt(section.subheading)}</p>
              </div>

              <div className="inventoriesStage">
              {/* Background ghost — blurred detail preview, interactive tabs */}
              <div className="inventoriesDetailGhost">
                <div className="ghostHeader">
                  <div>
                    <strong>{tt(section.title)}</strong>
                    <span>{tt(section.description)}</span>
                  </div>
                  {section.tabs.length > 1 ? (
                    <div className="ghostTabs">
                      {section.tabs.map((tab) => (
                        <button
                          key={tab.key}
                          type="button"
                          className={
                            activeTabKey === tab.key ? "ghostTab isActive" : "ghostTab"
                          }
                          onClick={() =>
                            setActiveTabs((prev) => ({ ...prev, [section.id]: tab.key }))
                          }
                        >
                          {tt(tab.label)}
                        </button>
                      ))}
                    </div>
                  ) : (
                    currentGhost.headerThreshold && (
                      <div className="ghostThresholds ghostThresholdsHeader">
                        <span className="ghostThresholdCaption">
                          {tt(currentGhost.headerThreshold.label)}
                        </span>
                        {currentGhost.headerThreshold.options.map((option) => (
                          <span
                            key={option}
                            className={
                              option === currentGhost.headerThreshold!.active
                                ? "ghostThreshold isActive"
                                : "ghostThreshold"
                            }
                          >
                            {t(`inventories.thresholds.${option}`, { defaultValue: option })}
                          </span>
                        ))}
                      </div>
                    )
                  )}
                </div>

                {currentGhost.banner?.tone === "success" && (
                  <div className="ghostBanner">
                    <span>{tt(currentGhost.banner.text)}</span>
                  </div>
                )}

                {currentGhost.banner?.tone === "progress" && (
                  <div className="ghostBannerProgress">
                    <span>{tt(currentGhost.banner.text)}</span>
                    <div className="ghostProgressTrack">
                      <div
                        className="ghostProgressFill"
                        style={{ width: `${currentGhost.banner.percent ?? 0}%` }}
                      />
                    </div>
                  </div>
                )}

                {currentGhost.banner?.tone === "warning" && (
                  <div className="ghostBannerWarning">
                    <AlertTriangle size={15} className="ghostBannerWarningIcon" />
                    <div>
                      {currentGhost.banner.title && <strong>{tt(currentGhost.banner.title)}</strong>}
                      <span>{tt(currentGhost.banner.text)}</span>
                    </div>
                  </div>
                )}

                {currentGhost.statGroups.map((group) => (
                  <React.Fragment key={group.title}>
                    <div className="ghostSectionLabelRow">
                      <span className="ghostSectionLabel">{tt(group.title)}</span>
                      {group.thresholds && (
                        <div className="ghostThresholds">
                          <span className="ghostThresholdCaption">{tt("Threshold:")}</span>
                          {group.thresholds.options.map((option) => (
                            <span
                              key={option}
                              className={
                                option === group.thresholds!.active
                                  ? "ghostThreshold isActive"
                                  : "ghostThreshold"
                              }
                            >
                              {t(`inventories.thresholds.${option}`, { defaultValue: option })}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="ghostStatGrid">
                      {group.cards.map((card) => (
                        <div
                          className={card.active ? "ghostStat isActive" : "ghostStat"}
                          key={card.label}
                        >
                          {card.cornerTag && (
                            <span className="ghostStatCorner">{tt(card.cornerTag)}</span>
                          )}
                          <card.icon size={13} className="ghostStatIcon" />
                          <strong>{card.value}</strong>
                          <span>{tt(card.label)}</span>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ))}

                {currentGhost.badgeGroups.map((group) => (
                  <React.Fragment key={group.title}>
                    <span className="ghostSectionLabel">
                      {tt(group.title)}
                      {group.note && <span className="ghostSectionNote"> {tt(group.note)}</span>}
                    </span>
                    <div className="ghostBadgeRow">
                      {group.badges.map((badge) => (
                        <span className="ghostFilterBadge" key={badge.label}>
                          <badge.icon size={11} /> {tt(badge.label)} <strong>{badge.value}</strong>
                          {badge.checkbox && <span className="ghostBadgeCheckbox" />}
                        </span>
                      ))}
                    </div>
                  </React.Fragment>
                ))}

                <div className="ghostSelectionHeader">
                  <div>
                    <span>
                      {tt("Selection")} ({currentGhost.selectionCount})
                    </span>
                    {currentGhost.selectionNote && (
                      <span className="ghostSelectionNote">{tt(currentGhost.selectionNote)}</span>
                    )}
                  </div>
                  <span className="ghostDownload">
                    {tt("Download")} ({currentGhost.selectionCount})
                  </span>
                </div>

                <div className="ghostTable">
                  <div className="ghostTableHeadRow" style={tableGridStyle}>
                    {currentGhost.tableColumns.map((col) => (
                      <span key={col}>{tt(col)}</span>
                    ))}
                  </div>
                  {currentGhost.rows.map((row, rowIndex) => (
                    <div className="ghostRow" style={tableGridStyle} key={rowIndex}>
                      {row.map((cell, cellIndex) => {
                        if (Array.isArray(cell)) {
                          return (
                            <span className="ghostRowTags" key={cellIndex}>
                              {cell.map((tag, tagIndex) => (
                                <span
                                  className={`ghostRowTag tone-${tagTone(tag)}`}
                                  key={tagIndex}
                                >
                                  {tt(tag)}
                                </span>
                              ))}
                            </span>
                          );
                        }

                        const tone = cellTone(cell);
                        const className =
                          cellIndex === 0
                            ? "ghostRowName"
                            : tone === "success"
                            ? "ghostRowStatus"
                            : tone === "danger"
                            ? "ghostRowDanger"
                            : "ghostRowSignals";
                        return (
                          <span className={className} key={cellIndex}>
                            {tt(cell)}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Foreground — the list card */}
              <div className="inventoriesListCard">
                <div className="inventoriesListHeader">
                  <nav className="inventoriesTabs">
                    <button type="button" className="isActive" tabIndex={-1}>
                      {t("inventories.tabs.inventories")}
                    </button>
                    <button type="button" tabIndex={-1}>
                      {t("inventories.tabs.savings")}
                    </button>
                    <button type="button" tabIndex={-1}>
                      {t("inventories.tabs.audit")}
                    </button>
                  </nav>
                  <div className="inventoriesRefresh">
                    <span>{t("inventories.updated")}</span>
                    <button type="button" tabIndex={-1}>
                      <RefreshCw size={14} /> {t("inventories.refresh")}
                    </button>
                  </div>
                </div>

                <div className="inventoriesList">
                  {inventoryDefinitions.map((item) => {
                    const text = t(`inventories.items.${item.i18nKey}`, {
                      returnObjects: true
                    }) as InventoryItemText;

                    return (
                      <div
                        className={
                          item.id === section.id ? "inventoryRow isHighlighted" : "inventoryRow"
                        }
                        key={item.id}
                      >
                        <span className="inventoryRowIcon">
                          <img src={item.logo} alt="" />
                        </span>

                        <div className="inventoryRowTitle">
                          <strong>{text.name}</strong>
                          <span>{text.subtitle}</span>
                        </div>

                        <div className="inventoryRowStats">
                          {item.stats.map((stat, statIndex) => (
                            <span
                              className={`inventoryBadge tone-${stat.tone}`}
                              key={statIndex}
                            >
                              <stat.icon size={12} /> {text.stats[statIndex] ?? ""}
                            </span>
                          ))}
                        </div>

                        {item.hasThresholds && (
                          <div className="inventoryThresholds">
                            <span>{t("inventories.thresholds.30d")}</span>
                            <span className="isActive">
                              {t("inventories.thresholds.90d")}
                            </span>
                            <span>{t("inventories.thresholds.180d")}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}