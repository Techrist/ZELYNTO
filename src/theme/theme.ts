export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

const STORAGE_KEY = "zelynto.theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* localStorage unavailable */
  }
  return "light";
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export function setStoredTheme(theme: Theme): void {
  // Suppress element transitions for one frame so switching theme doesn't
  // animate every colour across the page.
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => root.classList.remove("theme-switching"));
    });
  }
  applyTheme(theme);
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

/** Call once, as early as possible, to avoid a flash of the wrong theme. */
export function initTheme(): Theme {
  const theme = getStoredTheme();
  applyTheme(theme);
  return theme;
}
