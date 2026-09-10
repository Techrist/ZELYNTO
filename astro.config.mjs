import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.zelynto.com",
  trailingSlash: "never",
  build: { format: "directory" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "it", "es"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr", de: "de", it: "it", es: "es" }
      },
      filter: (page) => !/\/connexion(\/|$)/.test(page)
    })
  ],
  vite: {
    // Large Lottie JSON imports.
    json: { stringify: true }
  }
});
