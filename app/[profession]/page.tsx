import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS, PROBLEMS } from "@/lib/professions"
import { CITIES, getCityName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

interface PageProps {
  params: Promise<{ profession: string }>
}

const MAIN_CITIES = [
  "madrid", "barcelona", "valencia", "sevilla", "malaga", "bilbao",
  "zaragoza", "murcia", "palma-mallorca", "alicante", "cordoba", "granada",
  "valladolid", "vigo", "gijon", "a-coruna", "cadiz", "santander",
  "san-sebastian", "pamplona", "almeria", "huelva", "jaen", "leon",
  "salamanca", "burgos", "tarragona", "girona", "lleida", "castellon-plana",
  "toledo", "albacete", "badajoz", "logrono", "vitoria-gasteiz",
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { profession: professionId } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) return { title: "No encontrado" }

  const profession = PROFESSIONS.find((p) => p.id === professionId)
  if (!profession) return {}

  const title = `${profession.name} en toda Espana | Profesionales Certificados | ${SITE_NAME}`
  const description = `${profession.description} Cobertura en mas de 400 ciudades. Presupuesto sin compromiso. Llama al ${PHONE_DISPLAY}.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${professionId}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${professionId}`,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
    },
  }
}

export default async function ProfessionPage({ params }: PageProps) {
  const { profession: professionId } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) {
    notFound()
  }

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const problems = PROBLEMS[professionId] || []

  // Group cities by region
  const regions: Record<string, string[]> = {
    "Cataluna": CITIES.filter((c) => ["barcelona", "hospitalet-llobregat", "badalona", "terrassa", "sabadell", "mataro", "santa-coloma-gramenet", "cornella-llobregat", "sant-boi-llobregat", "rubi", "manresa", "vilanova-geltru", "viladecans", "castelldefels", "el-prat-llobregat", "granollers", "cerdanyola-valles", "mollet-valles", "gava", "esplugues-llobregat", "sant-cugat-valles", "sant-feliu-llobregat", "vic", "igualada", "sitges", "girona", "figueres", "olot", "salt", "palafrugell", "roses", "palamos", "tarragona", "reus", "cambrils", "salou", "lleida", "balaguer"].includes(c)),
    "Madrid": CITIES.filter((c) => ["madrid", "mostoles", "alcala-henares", "fuenlabrada", "leganes", "getafe", "alcorcon", "torrejon-ardoz", "parla", "alcobendas", "las-rozas", "pozuelo-alarcon", "coslada", "rivas-vaciamadrid", "majadahonda", "tres-cantos", "san-sebastian-reyes", "aranjuez", "collado-villalba"].includes(c)),
    "Andalucia": CITIES.filter((c) => ["malaga", "sevilla", "granada", "cordoba", "cadiz", "almeria", "huelva", "jaen", "marbella", "fuengirola", "torremolinos", "estepona", "dos-hermanas", "jerez-frontera", "algeciras", "motril", "linares", "el-ejido", "roquetas-mar"].includes(c)),
    "Comunidad Valenciana": CITIES.filter((c) => ["valencia", "alicante", "castellon-plana", "torrent", "gandia", "elche", "torrevieja", "benidorm", "denia", "javea", "sagunto", "paterna", "orihuela", "calpe", "altea"].includes(c)),
    "Pais Vasco": CITIES.filter((c) => ["bilbao", "san-sebastian", "vitoria-gasteiz", "barakaldo", "getxo", "irun", "portugalete", "durango", "eibar", "zarautz"].includes(c)),
    "Galicia": CITIES.filter((c) => ["vigo", "a-coruna", "santiago-compostela", "pontevedra", "ourense", "lugo", "ferrol", "naron", "sanxenxo"].includes(c)),
    "Baleares": CITIES.filter((c) => ["palma-mallorca", "ibiza", "manacor", "inca", "calvia", "mahon", "ciutadella", "alcudia", "pollenca", "soller"].includes(c)),
    "Canarias": CITIES.filter((c) => ["las-palmas-gran-canaria", "santa-cruz-tenerife", "telde", "la-laguna", "arona", "adeje", "maspalomas", "playa-ingles", "puerto-cruz"].includes(c)),
    "Murcia": CITIES.filter((c) => ["murcia", "cartagena", "lorca", "molina-segura", "mazarron", "aguilas", "san-javier", "torre-pacheco"].includes(c)),
    "Aragon": CITIES.filter((c) => ["zaragoza", "huesca", "teruel", "calatayud", "utebo", "barbastro", "jaca", "monzon"].includes(c)),
    "Castilla y Leon": CITIES.filter((c) => ["valladolid", "burgos", "salamanca", "leon", "segovia", "avila", "zamora", "palencia", "soria", "ponferrada"].includes(c)),
    "Castilla-La Mancha": CITIES.filter((c) => ["toledo", "albacete", "ciudad-real", "guadalajara", "cuenca", "talavera-reina", "puertollano", "tomelloso"].includes(c)),
    "Cantabria": CITIES.filter((c) => ["santander", "torrelavega", "castro-urdiales", "laredo", "santona", "noja", "comillas", "san-vicente-barquera"].includes(c)),
    "Asturias": CITIES.filter((c) => ["oviedo", "gijon", "aviles", "langreo", "mieres", "llanes", "ribadesella"].includes(c)),
    "Navarra": CITIES.filter((c) => ["pamplona", "tudela", "baranain", "burlada", "estella-lizarra"].includes(c)),
    "La Rioja": CITIES.filter((c) => ["logrono", "calahorra", "arnedo", "haro"].includes(c)),
    "Extremadura": CITIES.filter((c) => ["badajoz", "caceres", "merida", "plasencia", "don-benito", "almendralejo"].includes(c)),
  }

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-green-200 mb-6">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{profession.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            {profession.name} en toda Espana
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl">
            {profession.description} Cobertura en mas de 400 ciudades y pueblos. Profesionales certificados con garantia por escrito.
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

      {/* Main cities quick links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ciudades principales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {MAIN_CITIES.filter((c) => CITIES.includes(c)).map((city) => (
              <Link
                key={city}
                href={`/${professionId}/${city}`}
                className="px-4 py-3 bg-brand-50 hover:bg-brand-100 rounded-xl text-sm font-medium text-brand-800 transition-colors text-center"
              >
                {getCityName(city)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      {problems.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Problemas que resolvemos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {problems.map((problem) => (
                <Link
                  key={problem}
                  href={`/problema/${professionId}/${problem}/madrid`}
                  className="px-4 py-3 bg-white border border-gray-200 hover:border-brand-300 rounded-xl text-sm text-gray-700 hover:text-brand-700 transition-colors text-center"
                >
                  {problem.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities by region */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{profession.name} por comunidad autonoma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(regions).map(([region, cities]) => (
              cities.length > 0 && (
                <div key={region}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">{region}</h3>
                  <ul className="space-y-1">
                    {cities.map((city) => (
                      <li key={city}>
                        <Link
                          href={`/${professionId}/${city}`}
                          className="text-sm text-gray-600 hover:text-brand-700 transition-colors"
                        >
                          {profession.name} en {getCityName(city)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Necesitas un {profession.name.toLowerCase()}?
          </h2>
          <p className="text-green-100 mb-6">Llamanos sin compromiso. Presupuesto gratuito y servicio garantizado en toda Espana.</p>
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
