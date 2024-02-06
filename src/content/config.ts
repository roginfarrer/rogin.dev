import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const uses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

// const drafts = defineCollection({
//   type: "content",
//   // Type-check frontmatter using a schema
//   schema: structuredClone(blog.schema),
// });

export const collections = { blog, uses };
