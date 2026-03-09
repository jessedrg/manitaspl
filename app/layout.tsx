import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SITE_NAME, BASE_URL } from "@/lib/constants"
import "./globals.css"

export const metadata: Metadata = {
  title: `${SITE_NAME} | Servicios para el Hogar - Electricistas, Fontaneros, Cerrajeros`,
  description:
    "ManitasPL - Profesionales certificados en tu zona. Electricistas, fontaneros, cerrajeros, desatascos y calderas. Presupuesto sin compromiso. Servicio garantizado.",
  keywords:
    "electricista certificado, fontanero experto, cerrajero fiable, desatascos garantizado, reparacion calderas, servicio tecnico hogar",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: `${SITE_NAME} - Profesionales Certificados para tu Hogar`,
    description: "Electricistas, fontaneros, cerrajeros y mas. Profesionales certificados con garantia.",
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
