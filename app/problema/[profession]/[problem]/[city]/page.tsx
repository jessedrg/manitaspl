import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS, PROBLEMS } from "@/lib/professions"
import { CITIES, getCityName, getProvinceName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

interface PageProps {
  params: Promise<{ profession: string; problem: string; city: string }>
}

function getProblemDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const rawParams = await params
  const professionId = decodeURIComponent(rawParams.profession)
  const problemId = decodeURIComponent(rawParams.problem)
  const citySlug = decodeURIComponent(rawParams.city)

  if (!VALID_PROFESSIONS.includes(professionId)) return { title: "No encontrado" }

  const profession = PROFESSIONS.find((p) => p.id === professionId)
  if (!profession) return {}

  const problems = PROBLEMS[professionId] || []
  if (!problems.includes(problemId)) return { title: "No encontrado" }

  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)
  const problemName = getProblemDisplayName(problemId)

  const title = `${problemName} - ${profession.name} en ${cityName} | ${SITE_NAME}`
  const description = `Solucion para ${problemName.toLowerCase()} en ${cityName} (${provinceName}). ${profession.name}s certificados. Servicio garantizado. Llama al ${PHONE_DISPLAY}.`
  const canonicalUrl = `${BASE_URL}/problema/${professionId}/${problemId}/${citySlug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
    },
  }
}

export default async function ProblemCityPage({ params }: PageProps) {
  const rawParams = await params
  const professionId = decodeURIComponent(rawParams.profession)
  const problemId = decodeURIComponent(rawParams.problem)
  const citySlug = decodeURIComponent(rawParams.city)

  if (!VALID_PROFESSIONS.includes(professionId) || !CITIES.includes(citySlug)) {
    notFound()
  }

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const problems = PROBLEMS[professionId] || []
  if (!problems.includes(problemId)) notFound()

  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)
  const problemName = getProblemDisplayName(problemId)

  return (
    <main>
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-green-200 mb-6">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href={`/${professionId}`} className="hover:text-white">{profession.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{problemName} en {cityName}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            {problemName}: {profession.name} en {cityName}
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl">
            Profesionales certificados para resolver {problemName.toLowerCase()} en {cityName} ({provinceName}). Servicio garantizado.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 gradient-cta text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            Llamar: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Solucion para {problemName.toLowerCase()} en {cityName}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Si tienes un problema de {problemName.toLowerCase()} en {cityName}, nuestros {profession.name.toLowerCase()}s certificados 
                  pueden resolverlo de forma rapida y profesional. Contamos con profesionales locales en {cityName} y toda la provincia 
                  de {provinceName} que conocen las particularidades de la zona.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Que hacer ante {problemName.toLowerCase()}</h2>
                <ol className="space-y-3 list-decimal list-inside text-gray-600">
                  <li>Manten la calma y evalua la situacion.</li>
                  <li>Si hay riesgo, toma las medidas de seguridad necesarias.</li>
                  <li>Llamanos al <a href={`tel:${PHONE}`} className="text-brand-600 font-semibold">{PHONE_DISPLAY}</a> y te asesoramos sin compromiso.</li>
                  <li>Te enviamos un {profession.name.toLowerCase()} certificado a tu domicilio en {cityName}.</li>
                  <li>Presupuesto cerrado antes de empezar. Sin sorpresas.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Otros problemas que resolvemos</h2>
                <div className="flex flex-wrap gap-2">
                  {problems.filter((p) => p !== problemId).map((p) => (
                    <Link
                      key={p}
                      href={`/problema/${professionId}/${p}/${citySlug}`}
                      className="px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-sm hover:bg-brand-100 transition-colors"
                    >
                      {getProblemDisplayName(p)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-brand-800 mb-4">Contacto directo</h3>
                <a
                  href={`tel:${PHONE}`}
                  className="block w-full gradient-cta text-white text-center py-3 rounded-xl font-bold text-lg mb-3"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-sm text-gray-600 text-center">Disponible todos los dias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Problema de {problemName.toLowerCase()} en {cityName}?
          </h2>
          <p className="text-green-100 mb-6">Llamanos sin compromiso. Presupuesto gratuito y servicio garantizado.</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block gradient-cta text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
