import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "Rogin Farrer",
    description: "Rogin Farrer is a frontend engineer based in San Diego, CA.",
    site: context.site!,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
  });
}
