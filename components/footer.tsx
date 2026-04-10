import Link from "next/link"
import { SITE_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { PROFESSIONS } from "@/lib/professions"
import { LogoMark } from "./logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <LogoMark className="w-9 h-9" />
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Profesionales certificados para tu hogar. Servicio garantizado en toda Espana.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {PROFESSIONS.map((p) => (
                <li key={p.id}>
                  <Link href={`/${p.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ciudades principales</h3>
            <ul className="space-y-3">
              {["madrid", "barcelona", "valencia", "sevilla", "malaga", "bilbao"].map((city) => (
                <li key={city}>
                  <Link
                    href={`/electricista/${city}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    {city.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE}`} className="text-sm text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-sm text-gray-400">Disponible 24/7</li>
              <li className="text-sm text-gray-400">Toda Espana</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 leading-relaxed">
                Servicio rapido y profesional. Presupuesto sin compromiso.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terminos" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terminos
            </Link>
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
