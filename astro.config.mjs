import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@astrojs/react";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [icon(), mdx(), sitemap(), react(), solidJs()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});

