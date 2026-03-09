import { VALID_PROFESSIONS, KNOWN_MODIFIERS, PROBLEMS } from "@/lib/professions"

const BASE_URL = "https://www.manitaspl.com"

export async function GET() {
  const sitemaps: string[] = []

  for (const prof of VALID_PROFESSIONS) {
    sitemaps.push(`${BASE_URL}/sitemap-files/${prof}.xml`)
    for (const mod of KNOWN_MODIFIERS) {
      sitemaps.push(`${BASE_URL}/sitemap-files/${prof}-${mod}.xml`)
    }
    const problems = PROBLEMS[prof] || []
    for (const problem of problems) {
      sitemaps.push(`${BASE_URL}/sitemap-files/${problem}-${prof}.xml`)
    }
  }

  const today = new Date().toISOString().split("T")[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map((url) => `  <sitemap>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`).join("\n")}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
