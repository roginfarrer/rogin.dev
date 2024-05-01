import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import panda from "@pandacss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://rogin.xyz",
  integrations: [mdx({
    extendMarkdownConfig: true
  }), sitemap({
    filter(page) {
      return !page.includes("/blog-drafts/");
    }
  }), react(), panda(), solidJs()],
  devToolbar: {
    enabled: false
  }
});