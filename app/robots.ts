import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      "https://www.manitaspl.com/sitemap-professions.xml",
      "https://www.manitaspl.com/sitemap-modifiers.xml",
      "https://www.manitaspl.com/sitemap-problems.xml",
    ],
  }
}
