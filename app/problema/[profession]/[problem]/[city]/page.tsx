import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS, PROBLEMS } from "@/lib/professions"
import { CITIES, getCityName, getProvinceName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"
import { PROFESSION_CONTENT } from "@/lib/profession-content"

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
  const content = PROFESSION_CONTENT[professionId]

  return (
    <main>
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-green-200 mb-6">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href={`/${professionId}`} className="hover:text-white">{profession.name}</Link>
            <span className="mx-2">/</span>
            <Link href={`/${professionId}/${citySlug}`} className="hover:text-white">{cityName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{problemName}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            {problemName} en {cityName}
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl">
            {profession.name}s certificados para resolver problemas de {problemName.toLowerCase()} en {cityName} ({provinceName}). 
            Diagnostico profesional, presupuesto cerrado y garantia por escrito.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 gradient-cta text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
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
                  Solucion profesional para {problemName.toLowerCase()} en {cityName}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Un problema de {problemName.toLowerCase()} puede ser desde una molestia menor hasta una situacion que requiere 
                  atencion inmediata. En {SITE_NAME} contamos con {profession.name.toLowerCase()}s certificados en {cityName} 
                  que diagnostican el origen del problema y lo resuelven de forma definitiva, no con parches temporales.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nuestros profesionales en {cityName} conocen las instalaciones tipicas de la zona y llevan el material mas 
                  habitual en la furgoneta, lo que permite resolver la mayoria de problemas en una sola visita. 
                  {content ? ` ${content.cityIntro(cityName, provinceName)}` : ''}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Que hacer ante {problemName.toLowerCase()}</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                  <p className="text-sm text-amber-800 font-semibold mb-2">Consejo importante:</p>
                  <p className="text-sm text-amber-800">Antes de llamar, toma nota de los detalles: cuando empezo el problema, si ha empeorado, 
                  si has notado algo inusual (olores, ruidos, manchas). Esta informacion ayuda al profesional a prepararse y llegar 
                  con el material adecuado.</p>
                </div>
                <ol className="space-y-4">
                  {[
                    { title: "Evalua la situacion", desc: "Manten la calma y valora si hay algun riesgo inmediato. Si es asi, toma las medidas de seguridad basicas (cortar el agua, la luz, etc.)." },
                    { title: "Llamanos", desc: `Contacta con nosotros al ${PHONE_DISPLAY}. Te haremos unas preguntas rapidas para entender el problema y enviarte al profesional adecuado.` },
                    { title: "Visita del profesional", desc: `Un ${profession.name.toLowerCase()} certificado de ${cityName} acude a tu domicilio. Inspecciona el problema y te explica que ha encontrado.` },
                    { title: "Presupuesto cerrado", desc: "Te damos el precio exacto antes de empezar. Si no te convence, no pagas nada. Sin compromiso." },
                    { title: "Reparacion garantizada", desc: "Realizamos el trabajo con materiales de calidad. Te dejamos factura con el desglose y garantia por escrito." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related services */}
              {content && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Servicios relacionados en {cityName}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.services.slice(0, 4).map((svc) => (
                      <div key={svc.title} className="border border-gray-200 rounded-xl p-4">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{svc.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why us for this problem */}
              {content && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que confiar en nosotros para resolver {problemName.toLowerCase()}
                  </h2>
                  <ul className="space-y-3">
                    {content.whyUs.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-900">{item.title}:</span>{" "}
                          <span className="text-gray-700">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other problems */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Otros problemas que resolvemos en {cityName}</h2>
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

              {/* FAQ */}
              {content && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
                  <div className="space-y-4">
                    {content.faq.slice(0, 3).map((item, i) => (
                      <div key={i} className="border-b border-gray-200 pb-4">
                        <h3 className="font-bold text-gray-900 mb-1">{item.q}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sticky top-20">
                <h3 className="text-lg font-bold text-brand-800 mb-4">Contacto directo</h3>
                <a
                  href={`tel:${PHONE}`}
                  className="block w-full gradient-cta text-white text-center py-3 rounded-xl font-bold text-lg mb-3"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-sm text-gray-600 text-center mb-6">Disponible todos los dias</p>

                {content && (
                  <>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Precios orientativos</h4>
                    <ul className="space-y-2 mb-6">
                      {content.pricing.slice(0, 4).map((row) => (
                        <li key={row.service} className="flex justify-between text-xs">
                          <span className="text-gray-600">{row.service}</span>
                          <span className="text-brand-700 font-semibold">{row.range}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <h4 className="font-bold text-gray-900 mb-2 text-sm">Nuestro compromiso</h4>
                <ul className="space-y-2">
                  {["Profesionales certificados", "Presupuesto cerrado", "Garantia por escrito", "Sin cargos ocultos"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link to main city page */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Ver todos los servicios de{" "}
            <Link href={`/${professionId}/${citySlug}`} className="text-brand-600 font-semibold hover:text-brand-700">
              {profession.name.toLowerCase()} en {cityName}
            </Link>
          </p>
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
