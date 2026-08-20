import React, { useState } from "react";
import {
  Activity,
  AppWindow,
  Building2,
  Cloud,
  CheckCircle2,
  Globe,
  Grid2x2,
  HelpCircle,
  History,
  Inbox,
  Infinity as InfinityIcon,
  Laptop,
  Moon,
  RefreshCw,
  Rocket,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  Smartphone,
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
import "./Inventories.css";

interface InventoryItemText {
  name: string;
  subtitle: string;
  stats: string[];
}

interface GhostStatCard {
  value: number | string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

interface GhostStatGroup {
  title: string;
  cards: GhostStatCard[];
}

interface GhostBadge {
  label: string;
  value: number | string;
  icon: LucideIcon;
}

interface GhostBadgeGroup {
  title: string;
  badges: GhostBadge[];
}

interface GhostTabContent {
  showBreakglassBanner?: boolean;
  statGroups: GhostStatGroup[];
  badgeGroups: GhostBadgeGroup[];
  selectionCount: number;
  tableColumns: string[];
  rows: string[][];
}

const POSITIVE_CELLS = ["Active", "Enabled", "Compliant"];
const NEGATIVE_CELLS = ["Inactive", "Non-compliant", "Disabled", "Stale"];

function cellTone(value: string): "success" | "danger" | "neutral" {
  if (POSITIVE_CELLS.some((word) => value.includes(word))) return "success";
  if (NEGATIVE_CELLS.some((word) => value.includes(word))) return "danger";
  return "neutral";
}

const ghostContent: Record<"users" | "groups" | "devices", GhostTabContent> = {
  users: {
    showBreakglassBanner: true,
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
};

export function InventoriesPage() {
  const { t } = useTranslation();
  const [ghostTab, setGhostTab] = useState<"users" | "groups" | "devices">("users");

  const currentGhost = ghostContent[ghostTab];
  const tableGridStyle = {
    gridTemplateColumns: `repeat(${currentGhost.tableColumns.length}, minmax(0, 1fr))`
  };

  return (
    <section className="inventoriesHero">
      <div className="inventoriesHeroInner">
        <div className="inventoriesIntro">
          <span className="sectionLabel">{t("inventories.label")}</span>
          <h1>{t("inventories.title")}</h1>
          <p>{t("inventories.description")}</p>
        </div>

        <div className="inventoriesStage">
          {/* Background ghost — blurred detail preview, interactive tabs */}
          <div className="inventoriesDetailGhost">
            <div className="ghostHeader">
              <div>
                <strong>Entra ID — overview</strong>
                <span>Counters follow your selection</span>
              </div>
              <div className="ghostTabs">
                {(["users", "groups", "devices"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={ghostTab === tab ? "ghostTab isActive" : "ghostTab"}
                    onClick={() => setGhostTab(tab)}
                  >
                    {tab === "users" ? "Users" : tab === "groups" ? "Groups" : "Devices"}
                  </button>
                ))}
              </div>
            </div>

            {currentGhost.showBreakglassBanner && (
              <div className="ghostBanner">
                <span>Breakglass accounts: 2. Excluded from the filters below.</span>
              </div>
            )}

            {currentGhost.statGroups.map((group) => (
              <React.Fragment key={group.title}>
                <span className="ghostSectionLabel">{group.title}</span>
                <div className="ghostStatGrid">
                  {group.cards.map((card) => (
                    <div
                      className={card.active ? "ghostStat isActive" : "ghostStat"}
                      key={card.label}
                    >
                      <card.icon size={13} className="ghostStatIcon" />
                      <strong>{card.value}</strong>
                      <span>{card.label}</span>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}

            {currentGhost.badgeGroups.map((group) => (
              <React.Fragment key={group.title}>
                <span className="ghostSectionLabel">{group.title}</span>
                <div className="ghostBadgeRow">
                  {group.badges.map((badge) => (
                    <span className="ghostFilterBadge" key={badge.label}>
                      <badge.icon size={11} /> {badge.label} <strong>{badge.value}</strong>
                    </span>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <div className="ghostSelectionHeader">
              <span>Selection ({currentGhost.selectionCount})</span>
              <span className="ghostDownload">Download ({currentGhost.selectionCount})</span>
            </div>

            <div className="ghostTable">
              <div className="ghostTableHeadRow" style={tableGridStyle}>
                {currentGhost.tableColumns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </div>
              {currentGhost.rows.map((row, rowIndex) => (
                <div className="ghostRow" style={tableGridStyle} key={rowIndex}>
                  {row.map((cell, cellIndex) => {
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
                        {cell}
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
              {inventoryDefinitions.map((item, index) => {
                const text = t(`inventories.items.${item.i18nKey}`, {
                  returnObjects: true
                }) as InventoryItemText;

                return (
                  <div
                    className={index === 0 ? "inventoryRow isHighlighted" : "inventoryRow"}
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
      </div>
    </section>
  );
}