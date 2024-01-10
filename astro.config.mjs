import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), solidJs()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  devToolbar: {
    enabled: false,
  },
});
