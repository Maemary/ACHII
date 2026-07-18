import type { MetadataRoute } from "next";

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
  "/donate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
