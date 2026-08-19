import type { MetadataRoute } from "next";

const siteUrl = "https://buildmarket.ai";

const routes = ["", "/ugc-ads", "/premium-websites", "/ai-agents", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
