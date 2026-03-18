import { VALID_PROFESSIONS } from "@/lib/professions"
import { BASE_URL, LAST_UPDATED } from "@/lib/constants"

export async function GET() {
  const sitemaps: string[] = []

  for (const prof of VALID_PROFESSIONS) {
    sitemaps.push(`${BASE_URL}/sitemap-files/${prof}.xml`)
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
