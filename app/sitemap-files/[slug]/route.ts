import { VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES, PROBLEMS } from "@/lib/professions"
import { CITIES } from "@/lib/cities"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const BASE_URL = "https://www.manitaspl.com"

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const rawSlug = (await params).slug
  const slug = rawSlug.replace(/\.xml$/, "")

  const urls: { loc: string; priority: string }[] = []

  // Base profession sitemap: /electricista, /fontanero, etc.
  if (VALID_PROFESSIONS.includes(slug)) {
    for (const city of CITIES) {
      urls.push({ loc: `${BASE_URL}/${slug}/${city}`, priority: "0.8" })
    }
  }

  // Modifier sitemap: /electricista-de-emergencia, /fontanero-express, etc.
  for (const mod of KNOWN_MODIFIERS) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prof}-${mod}`) {
        for (const city of CITIES) {
          urls.push({ loc: `${BASE_URL}/${prof}-${mod}/${city}`, priority: "0.6" })
        }
      }
    }
  }

  // Prefix sitemap: /coste-electricista, /tarifa-fontanero, etc.
  for (const prefix of KNOWN_PREFIXES) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prefix}-${prof}`) {
        for (const city of CITIES) {
          urls.push({ loc: `${BASE_URL}/${prefix}-${prof}/${city}`, priority: "0.5" })
        }
      }
    }
  }

  // Problem sitemap: /problema/electricista/corte-luz, etc.
  for (const prof of VALID_PROFESSIONS) {
    const problems = PROBLEMS[prof] || []
    for (const problem of problems) {
      if (slug === `${problem}-${prof}`) {
        for (const city of CITIES) {
          urls.push({ loc: `${BASE_URL}/problema/${prof}/${problem}/${city}`, priority: "0.5" })
        }
      }
    }
  }

  if (urls.length === 0) {
    return new Response("Not found", { status: 404 })
  }

  const today = new Date().toISOString().split("T")[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
