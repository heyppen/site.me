import { getBlogPosts } from "app/utils";

export const SiteBaseUrl: string = process.env.BASE_URL ?? "";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${SiteBaseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/wheremouse"].map((route) => ({
    url: `${SiteBaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
