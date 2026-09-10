import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getStoredTheme, setStoredTheme, type Theme } from "../../theme/theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { t } = useTranslation();
  // Server render + first client render must match, so start from the static
  // default and adopt the stored preference only after mount.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setStoredTheme(next);
  }

  const rootClass = className ? "themeToggle " + className : "themeToggle";
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={rootClass}
      onClick={toggle}
      aria-label={t(`theme.switchTo.${next}`)}
      title={t(`theme.switchTo.${next}`)}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
