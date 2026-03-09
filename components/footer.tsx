import Link from "next/link"
import { SITE_NAME, PHONE, PHONE_DISPLAY, BASE_URL } from "@/lib/constants"
import { PROFESSIONS } from "@/lib/professions"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-400">
              Profesionales certificados para tu hogar. Servicio garantizado en toda España.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Servicios</h3>
            <ul className="space-y-2">
              {PROFESSIONS.map((p) => (
                <li key={p.id}>
                  <Link href={`/${p.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Ciudades principales</h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-white font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${PHONE}`} className="text-sm text-accent-400 hover:text-accent-300 font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-sm text-gray-400">Disponible 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/terminos" className="text-xs text-gray-500 hover:text-gray-300">Terminos</Link>
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-gray-300">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
