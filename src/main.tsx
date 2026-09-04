import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n/config";
import { initTheme } from "./theme/theme";

initTheme();

createRoot(document.getElementById("root")!).render(<App />);
