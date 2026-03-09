export interface Profession {
  id: string
  name: string
  nameShort: string
  description: string
  icon: string
  color: string
}

export const PROFESSIONS: Profession[] = [
  {
    id: "electricista",
    name: "Electricista",
    nameShort: "Electricista",
    description: "Servicio tecnico electrico para averias, instalaciones y emergencias electricas en tu zona.",
    icon: "Zap",
    color: "#f59e0b",
  },
  {
    id: "fontanero",
    name: "Fontanero",
    nameShort: "Fontanero",
    description: "Fontaneros certificados para fugas, roturas de tuberia e instalaciones de agua y gas.",
    icon: "Droplets",
    color: "#3b82f6",
  },
  {
    id: "cerrajero",
    name: "Cerrajero",
    nameShort: "Cerrajero",
    description: "Cerrajeros expertos en aperturas, cambios de cerradura y sistemas de seguridad.",
    icon: "KeyRound",
    color: "#ef4444",
  },
  {
    id: "desatascos",
    name: "Desatascos",
    nameShort: "Desatascos",
    description: "Servicio de desatascos con maquinaria profesional para tuberias, arquetas y bajantes.",
    icon: "Waves",
    color: "#10b981",
  },
  {
    id: "calderas",
    name: "Calderas",
    nameShort: "Calderas",
    description: "Tecnicos de calderas para revisiones, averias, instalacion y sustitucion de equipos.",
    icon: "Flame",
    color: "#f97316",
  },
]

export const VALID_PROFESSIONS = PROFESSIONS.map((p) => p.id)

// DIFFERENT modifiers from rapidfix to avoid keyword cannibalization
export const KNOWN_MODIFIERS = [
  "de-emergencia",
  "express",
  "low-cost",
  "en-tu-zona",
  "a-casa",
  "certificado",
  "de-turno",
  "al-instante",
  "experto",
  "fiable",
  "garantizado",
  "sin-compromiso",
  "servicio-tecnico",
  "autonomo",
  "todo-incluido",
  "sabados-domingos",
  "en-el-acto",
] as const

export const KNOWN_PREFIXES = ["coste", "tarifa"] as const

// Different problem slugs from rapidfix (same intent, different keywords)
export const PROBLEMS: Record<string, string[]> = {
  electricista: [
    "corte-luz",
    "chispa-enchufe",
    "humo-electrico",
    "magnetotermico-salta",
    "enchufe-roto",
    "luz-intermitente",
    "revision-electrica",
    "nueva-instalacion",
    "pico-tension",
  ],
  fontanero: [
    "escape-agua",
    "rotura-tuberia",
    "goteo-grifo",
    "cisterna-averiada",
    "termo-electrico",
    "pared-humeda",
    "desague-lento",
    "bañera-pierde",
    "bajante-roto",
  ],
  cerrajero: [
    "puerta-atascada",
    "cerradura-averiada",
    "olvidado-llaves",
    "intento-robo",
    "sustitucion-cerradura",
    "duplicado-llaves",
    "cerradura-antibumping",
    "puerta-acorazada",
    "bombin-atascado",
  ],
  desatascos: [
    "inodoro-atascado",
    "desague-atascado",
    "olor-canerias",
    "bañera-atascada",
    "bajante-obstruido",
    "mantenimiento-tuberias",
    "desatranque",
    "vaciado-fosa",
  ],
  calderas: [
    "agua-fria",
    "caldera-apagada",
    "olor-gas",
    "caldera-ruidosa",
    "mantenimiento-caldera",
    "sustitucion-caldera",
    "radiador-frio",
    "calefaccion-averiada",
  ],
}

export type ModifierType = (typeof KNOWN_MODIFIERS)[number]
export type PrefixType = (typeof KNOWN_PREFIXES)[number]
