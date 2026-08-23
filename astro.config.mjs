import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rogin.dev",
  compressHTML: true,
  integrations: [
    mdx({
      extendMarkdownConfig: true,
    }),
    sitemap({
      filter(page) {
        return !page.includes("/blog-drafts/");
      },
    }),
    react(),
  ],
});
