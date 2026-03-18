import { VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES } from "@/lib/professions"
import { BASE_URL, LAST_UPDATED } from "@/lib/constants"

export async function GET() {
  const sitemaps: string[] = []

  for (const prof of VALID_PROFESSIONS) {
    for (const mod of KNOWN_MODIFIERS) {
      sitemaps.push(`${BASE_URL}/sitemap-files/${prof}-${mod}.xml`)
    }
    for (const prefix of KNOWN_PREFIXES) {
      sitemaps.push(`${BASE_URL}/sitemap-files/${prefix}-${prof}.xml`)
    }
  }

  const lastmod = LAST_UPDATED

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((url) => `  <sitemap>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`).join("\n")}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
