import Link from "next/link"
import { PROFESSIONS } from "@/lib/professions"
import { PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

const ICON_MAP: Record<string, JSX.Element> = {
  Zap: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Droplets: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" /></svg>,
  KeyRound: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>,
  Waves: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.4 2 5 2c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>,
  Flame: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c-2-2.67-4-4-4-6a4 4 0 018 0c0 2-2 3.33-4 6zm0 0c1.33 1.78 2 3.11 2 4a2 2 0 11-4 0c0-.89.67-2.22 2-4z" /></svg>,
}

const TRUST_ITEMS = [
  { title: "Certificados", desc: "Todos nuestros profesionales estan certificados y verificados." },
  { title: "Sin compromiso", desc: "Presupuesto gratuito. Sin letra pequeña ni cargos ocultos." },
  { title: "Garantia total", desc: "Garantia por escrito en todos los trabajos realizados." },
  { title: "En tu zona", desc: "Profesionales locales que conocen tu barrio y tu ciudad." },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            Profesionales certificados<br className="hidden sm:block" /> en tu zona
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Electricistas, fontaneros, cerrajeros, desatascos y calderas. Servicio garantizado con profesionales verificados en toda Espana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="gradient-cta text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              Llamar ahora: {PHONE_DISPLAY}
            </a>
            <Link
              href="#servicios"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cobertura completa para cualquier emergencia o necesidad de tu hogar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONS.map((prof) => (
              <Link
                key={prof.id}
                href={`/${prof.id}`}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${prof.color}15`, color: prof.color }}>
                  {ICON_MAP[prof.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                  {prof.name}
                </h3>
                <p className="text-gray-600 text-sm">{prof.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 lg:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Por que elegir {SITE_NAME}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-brand-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Necesitas un profesional?</h2>
          <p className="text-lg text-green-100 mb-8">
            Llamanos sin compromiso. Te damos presupuesto gratuito y enviamos un profesional certificado a tu domicilio.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block gradient-cta text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
