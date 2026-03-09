import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES } from "@/lib/professions"
import { CITIES, getCityName, getProvinceName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

interface PageProps {
  params: Promise<{ profession: string; city: string }>
}

function parseProfessionAndModifier(rawProfession: string): {
  professionId: string
  modifier?: (typeof KNOWN_MODIFIERS)[number]
  prefix?: (typeof KNOWN_PREFIXES)[number]
} {
  if (VALID_PROFESSIONS.includes(rawProfession)) {
    return { professionId: rawProfession }
  }

  for (const mod of KNOWN_MODIFIERS) {
    for (const prof of VALID_PROFESSIONS) {
      if (rawProfession === `${prof}-${mod}`) {
        return { professionId: prof, modifier: mod }
      }
    }
  }

  for (const prefix of KNOWN_PREFIXES) {
    for (const prof of VALID_PROFESSIONS) {
      if (rawProfession === `${prefix}-${prof}`) {
        return { professionId: prof, prefix }
      }
    }
  }

  return { professionId: rawProfession }
}

function getModifierText(modifier: string): string {
  return modifier.replace(/-/g, " ")
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const rawParams = await params
  const rawProfession = decodeURIComponent(rawParams.profession)
  const citySlug = decodeURIComponent(rawParams.city)

  const { professionId, modifier, prefix } = parseProfessionAndModifier(rawProfession)
  if (!VALID_PROFESSIONS.includes(professionId)) return { title: "No encontrado" }

  const profession = PROFESSIONS.find((p) => p.id === professionId)
  if (!profession) return {}

  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)

  const isModifier = !!modifier
  const isPrefix = !!prefix

  let title: string
  let description: string

  if (isPrefix) {
    const prefixText = prefix === "coste" ? "Coste" : "Tarifa"
    title = `${prefixText} ${profession.name} en ${cityName} | ${SITE_NAME}`
    description = `${prefixText} de ${profession.name.toLowerCase()} en ${cityName} (${provinceName}). Consulta tarifas y solicita presupuesto sin compromiso.`
  } else if (isModifier) {
    const modText = getModifierText(modifier)
    title = `${profession.name} ${modText} en ${cityName} | ${SITE_NAME}`
    description = `${profession.name} ${modText} en ${cityName} (${provinceName}). Profesionales certificados. Servicio garantizado. Llama al ${PHONE_DISPLAY}.`
  } else {
    title = `${profession.name} en ${cityName} | Servicio Certificado | ${SITE_NAME}`
    description = `${profession.name} certificado en ${cityName} (${provinceName}). Profesionales expertos en tu zona. Presupuesto sin compromiso. Garantia por escrito.`
  }

  const canonicalUrl = `${BASE_URL}/${professionId}/${citySlug}`

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

export default async function ProfessionCityPage({ params }: PageProps) {
  const rawParams = await params
  const rawProfession = decodeURIComponent(rawParams.profession)
  const citySlug = decodeURIComponent(rawParams.city)

  const { professionId, modifier, prefix } = parseProfessionAndModifier(rawProfession)
  if (!VALID_PROFESSIONS.includes(professionId) || !CITIES.includes(citySlug)) {
    notFound()
  }

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)

  const isModifier = !!modifier
  const isPrefix = !!prefix

  let heading: string
  let subheading: string

  if (isPrefix) {
    const prefixText = prefix === "coste" ? "Coste" : "Tarifa"
    heading = `${prefixText} de ${profession.name} en ${cityName}`
    subheading = `Consulta las tarifas de ${profession.name.toLowerCase()} en ${cityName} y alrededores`
  } else if (isModifier) {
    heading = `${profession.name} ${getModifierText(modifier)} en ${cityName}`
    subheading = `Servicio de ${profession.name.toLowerCase()} ${getModifierText(modifier)} en ${cityName} (${provinceName})`
  } else {
    heading = `${profession.name} en ${cityName}`
    subheading = `Profesionales certificados de ${profession.name.toLowerCase()} en ${cityName} (${provinceName})`
  }

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-green-200 mb-6">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href={`/${professionId}`} className="hover:text-white capitalize">{profession.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{cityName}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            {heading}
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl">{subheading}</p>
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

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Servicio de {profession.name.toLowerCase()} en {cityName}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  En {SITE_NAME} contamos con {profession.name.toLowerCase()}s certificados en {cityName} y toda la provincia de {provinceName}. 
                  Nuestros profesionales estan verificados, asegurados y ofrecen garantia por escrito en todos los trabajos. 
                  Tanto si necesitas una intervencion de emergencia como un servicio programado, te enviamos al experto adecuado en tu zona.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Como trabajamos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { step: "1", title: "Llamanos", desc: `Contactanos al ${PHONE_DISPLAY} y cuentanos tu situacion.` },
                    { step: "2", title: "Te asignamos un experto", desc: `Un ${profession.name.toLowerCase()} certificado de ${cityName} se desplaza a tu domicilio.` },
                    { step: "3", title: "Problema resuelto", desc: "Trabajo realizado con garantia por escrito y sin sorpresas en el precio." },
                  ].map((item) => (
                    <div key={item.step} className="bg-brand-50 p-5 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que elegir nuestro servicio de {profession.name.toLowerCase()} en {cityName}
                </h2>
                <ul className="space-y-3">
                  {[
                    "Profesionales certificados y con experiencia verificada",
                    "Presupuesto sin compromiso antes de empezar",
                    "Garantia por escrito en todos los trabajos",
                    "Sin cargos ocultos ni sorpresas",
                    `Cobertura en ${cityName} y municipios cercanos`,
                    "Materiales de primera calidad",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
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

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Zona de cobertura</h3>
                <p className="text-sm text-gray-600">
                  {cityName} y todos los municipios de la provincia de {provinceName}. Nuestros profesionales son locales y conocen tu zona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-12 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Necesitas un {profession.name.toLowerCase()} en {cityName}?
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
