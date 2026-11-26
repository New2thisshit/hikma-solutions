import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hikmasolutions.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/security", "/research", "/responsible-disclosure", "/work", "/about", "/contact", "/privacy"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
