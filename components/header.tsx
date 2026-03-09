"use client"

import Link from "next/link"
import { useState } from "react"
import { SITE_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">{SITE_NAME}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/electricista" className="text-sm text-gray-600 hover:text-brand-700 transition-colors">
              Electricistas
            </Link>
            <Link href="/fontanero" className="text-sm text-gray-600 hover:text-brand-700 transition-colors">
              Fontaneros
            </Link>
            <Link href="/cerrajero" className="text-sm text-gray-600 hover:text-brand-700 transition-colors">
              Cerrajeros
            </Link>
            <Link href="/desatascos" className="text-sm text-gray-600 hover:text-brand-700 transition-colors">
              Desatascos
            </Link>
            <Link href="/calderas" className="text-sm text-gray-600 hover:text-brand-700 transition-colors">
              Calderas
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            <Link href="/electricista" className="py-2 text-gray-700 hover:text-brand-700" onClick={() => setMenuOpen(false)}>Electricistas</Link>
            <Link href="/fontanero" className="py-2 text-gray-700 hover:text-brand-700" onClick={() => setMenuOpen(false)}>Fontaneros</Link>
            <Link href="/cerrajero" className="py-2 text-gray-700 hover:text-brand-700" onClick={() => setMenuOpen(false)}>Cerrajeros</Link>
            <Link href="/desatascos" className="py-2 text-gray-700 hover:text-brand-700" onClick={() => setMenuOpen(false)}>Desatascos</Link>
            <Link href="/calderas" className="py-2 text-gray-700 hover:text-brand-700" onClick={() => setMenuOpen(false)}>Calderas</Link>
            <a href={`tel:${PHONE}`} className="py-2 text-brand-600 font-semibold">{PHONE_DISPLAY}</a>
          </nav>
        </div>
      )}
    </header>
  )
}
