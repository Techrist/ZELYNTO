import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getStoredTheme, setStoredTheme, type Theme } from "../../theme/theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    setStoredTheme(theme);
  }, [theme]);

  const rootClass = className ? "themeToggle " + className : "themeToggle";
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={rootClass}
      onClick={() => setTheme(next)}
      aria-label={t(`theme.switchTo.${next}`)}
      title={t(`theme.switchTo.${next}`)}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
