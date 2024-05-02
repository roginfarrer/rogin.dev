import { defineConfig } from "@pandacss/dev";
import { prose } from "./src/styles/prose";
import { reset } from "src/styles/global.style";
import { semanticTokens, textStyles, tokens } from "theme/tokens";
import { keyframes } from "theme/keyframes";
import { proseLink } from "theme/patterns";

export default defineConfig({
  // Whether to use css reset
  // preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,astro,mdx}",
  ],

  // Files to exclude
  exclude: [],

  strictPropertyValues: true,
  // strictTokens: true,

  conditions: {
    greenTheme: "&.green",
    redTheme: "&.red",
    orangeTheme: "&.orange",
    blueTheme: "&.blue",
    violetTheme: "&.violet",
    purpleTheme: "&.purple",
    spaceFont: "&.space",
    karlaFont: "&.karla",
    interFont: "&.inter",
    crimsonFont: "&.crimson",
    bitterFont: "&.bitter",
    systemFont: "&.systemFont",
  },

  // Useful for theme customization
  theme: {
    textStyles: textStyles,
    semanticTokens: semanticTokens,
    tokens: tokens,
    breakpoints: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "@xs": "480px",
      "@sm": "640px",
      "@md": "768px",
      "@lg": "1024px",
      "@xl": "1280px",
      "@2xl": "1536px",
    },
    keyframes: keyframes,
  },
  patterns: {
    extend: {
      proseLink: proseLink,
    },
  },

  globalCss: {
    extend: {
      ...reset,
      ...prose,
      ":where(:root)": {
        "--grad-two": "token(colors.accent10)",
        "--grad-one": "token(colors.red10)",
        "--grad":
          "linear-gradient(90deg, var(--grad-one), var(--grad-two), var(--grad-one))",
        accentColor: "accent10",
      },
      ".green": {
        "--grad-one": "token(colors.blue10)",
      },
      ".red": {
        "--grad-one": "token(colors.purple10)",
      },
      ".orange": {
        "--grad-one": "token(colors.blue10)",
      },
    },
  },

  utilities: {
    extend: {
      size: {
        className: "size",
        values: "sizes",
        transform(value) {
          return { height: value, width: value };
        },
      },
      // Not sure why fontWeight isn't working and this is needed...
      fontWeight: {
        className: "fw",
        values: "fontWeights",
        transform(value) {
          return { fontWeight: value };
        },
      },
      textAlign: {
        className: "ta",
        transform(value) {
          return { textAlign: value };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
