"use client"

import Link from "next/link"
import { useState } from "react"
import { SITE_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { LogoMark } from "./logo"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 tracking-tight">{SITE_NAME}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:block">Servicios del hogar</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/electricista", label: "Electricistas" },
              { href: "/fontanero", label: "Fontaneros" },
              { href: "/cerrajero", label: "Cerrajeros" },
              { href: "/desatascos", label: "Desatascos" },
              { href: "/calderas", label: "Calderas" },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: '#0f4a28' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4">
            {[
              { href: "/electricista", label: "Electricistas" },
              { href: "/fontanero", label: "Fontaneros" },
              { href: "/cerrajero", label: "Cerrajeros" },
              { href: "/desatascos", label: "Desatascos" },
              { href: "/calderas", label: "Calderas" },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="py-3 px-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-3 pt-3">
              <a 
                href={`tel:${PHONE}`} 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white font-semibold"
                style={{ backgroundColor: '#0f4a28' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
