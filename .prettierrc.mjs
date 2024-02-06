/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  overrides: [
    {
      files: "*.mdx",
      options: {
        parser: "mdx",
      },
    },
  ],
};
