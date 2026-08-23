import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astroPlugin from "eslint-plugin-astro";
import pandaPlugin from "@pandacss/eslint-plugin";

export default [
  {
    ignores: ["dist/", ".vercel/", "node_modules/", "styled-system/", ".astro/"],
  },
  // Astro recommended (flat config)
  ...astroPlugin.configs["flat/recommended"],
  // TypeScript files
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    plugins: { "@typescript-eslint": tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Astro files
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: (await import("astro-eslint-parser")).default,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  // Panda CSS rules (manually specified since plugin uses legacy format)
  {
    files: ["**/*.{ts,tsx,astro,js,jsx}"],
    plugins: { "@pandacss": pandaPlugin },
    rules: {
      "@pandacss/file-not-included": "error",
      "@pandacss/no-config-function-in-source": "error",
      "@pandacss/no-debug": "warn",
      "@pandacss/no-dynamic-styling": "warn",
      "@pandacss/no-hardcoded-color": "off",
      "@pandacss/no-invalid-nesting": "error",
      "@pandacss/no-invalid-token-paths": "error",
      "@pandacss/no-property-renaming": "warn",
      "@pandacss/no-unsafe-token-fn-usage": "warn",
      "@pandacss/no-deprecated-tokens": "warn",
    },
  },
];
