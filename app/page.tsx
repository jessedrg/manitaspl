import React from "react"
import Link from "next/link"
import { PROFESSIONS } from "@/lib/professions"
import { PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Droplets: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
    </svg>
  ),
  KeyRound: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  Waves: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  Flame: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c-2-2.67-4-4-4-6a4 4 0 018 0c0 2-2 3.33-4 6zm0 0c1.33 1.78 2 3.11 2 4a2 2 0 11-4 0c0-.89.67-2.22 2-4z" />
    </svg>
  ),
}

const TRUST_ITEMS = [
  { 
    title: "Certificados", 
    desc: "Todos nuestros profesionales estan certificados y verificados.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  { 
    title: "Sin compromiso", 
    desc: "Presupuesto gratuito. Sin letra pequeña ni cargos ocultos.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    title: "Garantia total", 
    desc: "Garantia por escrito en todos los trabajos realizados.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    title: "En tu zona", 
    desc: "Profesionales locales que conocen tu barrio y tu ciudad.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
]

const STEPS = [
  { num: "01", title: "Llamanos", desc: "Cuentanos tu problema y te orientamos por telefono." },
  { num: "02", title: "Diagnostico", desc: "Un profesional se desplaza y evalua la situacion." },
  { num: "03", title: "Presupuesto", desc: "Te damos precio cerrado antes de empezar." },
  { num: "04", title: "Solucion", desc: "Trabajo garantizado con materiales de calidad." },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#0f4a28] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-green-300 uppercase tracking-widest mb-4">
              Servicios profesionales del hogar
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance leading-tight">
              Profesionales certificados en tu zona
            </h1>
            <p className="text-lg sm:text-xl text-green-100/90 max-w-2xl mb-10 leading-relaxed">
              Electricistas, fontaneros, cerrajeros, desatascos y calderas. Servicio garantizado con profesionales verificados en toda Espana.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar: {PHONE_DISPLAY}
              </a>
              <Link
                href="#servicios"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white px-6 py-4 text-lg font-medium transition-colors"
              >
                Ver servicios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-amber-600 uppercase tracking-widest mb-3">Nuestros servicios</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Todo lo que tu hogar necesita
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cobertura completa para cualquier emergencia o necesidad de mantenimiento en tu hogar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONS.map((prof) => (
              <Link
                key={prof.id}
                href={`/${prof.id}`}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${prof.color}12`, color: prof.color }}
                >
                  {ICON_MAP[prof.icon]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0f4a28] transition-colors">
                  {prof.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{prof.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700">
                  Ver mas
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-amber-600 uppercase tracking-widest mb-3">Proceso</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Como trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-1/2" />
                )}
                <div className="text-5xl font-bold text-gray-100 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-amber-600 uppercase tracking-widest mb-3">Garantias</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Por que elegir {SITE_NAME}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-[#0f4a28] group transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 text-[#0f4a28] group-hover:bg-white/10 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-green-100 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "50K+", label: "Clientes satisfechos" },
              { value: "400+", label: "Ciudades cubiertas" },
              { value: "24/7", label: "Disponibilidad" },
              { value: "100%", label: "Garantizado" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#0f4a28] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#0f4a28] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Necesitas un profesional?
          </h2>
          <p className="text-lg text-green-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Llamanos sin compromiso. Te damos presupuesto gratuito y enviamos un profesional certificado a tu domicilio.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
