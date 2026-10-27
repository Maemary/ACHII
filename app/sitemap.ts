import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blogPosts";

const BASE_URL = "https://achii.co";

const routes = [
  "",
  "/about",
  "/about/our-team",
  "/about/core-values",
  "/get-involved",
  "/training",
  "/reports",
  "/insights",
  "/partner",
  "/blog",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
