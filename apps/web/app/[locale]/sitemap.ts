import type { MetadataRoute } from "next";
import { getJournalPosts } from "./blog/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shyenasec.com";
const publicPages = [
  "",
  "/about",
  "/projects",
  "/projects/flagforge",
  "/projects/secyourflow",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = publicPages.map(
    (path): MetadataRoute.Sitemap[number] => ({
      url: new URL(path, siteUrl).href,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: priorityForPath(path),
    })
  );
  const posts = await getJournalPosts();
  return [
    ...staticPages,
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).href,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

function priorityForPath(path: string): number {
  if (path === "") {
    return 1;
  }
  if (path === "/projects") {
    return 0.8;
  }
  return 0.7;
}
