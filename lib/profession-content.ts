export interface ProfessionContent {
  heroSubtitle: string
  whatWeDo: string
  howWeWork: string[]
  services: { title: string; desc: string }[]
  whyUs: { title: string; desc: string }[]
  pricing: { service: string; range: string }[]
  pricingNote: string
  faq: { q: string; a: string }[]
  situations: { title: string; desc: string }[]
  seoText: string
  emergencyTips: string[]
  cityIntro: (city: string, province: string) => string
  cityServices: (city: string) => string
  cityAdvice: (city: string) => string
}

export const PROFESSION_CONTENT: Record<string, ProfessionContent> = {
  electricista: {
    heroSubtitle:
      "Electricistas certificados con carnet profesional para cualquier averia, instalacion o emergencia electrica. Diagnostico preciso, reparacion segura y materiales homologados. Cumplimos con el Reglamento Electrotecnico de Baja Tension (REBT).",
    whatWeDo:
      "Nuestro equipo de electricistas profesionales resuelve todo tipo de problemas electricos en viviendas, comunidades de vecinos y locales comerciales. Desde una simple reparacion de enchufe hasta una reinstalacion completa del cuadro electrico, trabajamos con las maximas garantias de seguridad. Todos nuestros electricistas tienen el carnet profesional en vigor y estan dados de alta como instaladores autorizados en el registro de la comunidad autonoma correspondiente. Esto significa que cualquier trabajo que realicemos cumple con la normativa vigente y puede ser certificado oficialmente si lo necesitas (por ejemplo, para el Boletin Electrico o el Certificado de Instalacion Electrica).",
    howWeWork: [
      "Nos llamas o nos escribes explicando el problema. Te hacemos unas preguntas basicas para entender la situacion y darte una primera orientacion.",
      "Te asignamos un electricista certificado de tu zona. Te damos su nombre, numero de colegiado y hora estimada de llegada.",
      "El electricista realiza un diagnostico in situ. Antes de tocar nada, te explica que ha encontrado, que opciones tienes y cuanto cuesta cada una. Sin sorpresas.",
      "Una vez aprobado el presupuesto, realizamos el trabajo con materiales homologados. Te dejamos todo recogido, probado y funcionando.",
      "Te entregamos la factura con el desglose completo y la garantia por escrito. Si es necesario, te tramitamos el boletin electrico.",
    ],
    services: [
      { title: "Averias electricas", desc: "Diagnostico y reparacion de cortocircuitos, apagones, diferenciales que saltan, enchufes que no funcionan, luces que parpadean y cualquier fallo en la instalacion electrica." },
      { title: "Cuadro electrico", desc: "Revision, actualizacion o sustitucion completa del cuadro electrico. Instalacion de diferenciales, magnetotermicos, protectores de sobretension y limitadores de potencia." },
      { title: "Instalaciones nuevas", desc: "Instalacion electrica completa para viviendas nuevas o reformadas. Diseño del esquema unifilar, cableado, mecanismos, puntos de luz y tomas de corriente segun REBT." },
      { title: "Boletin electrico (CIE)", desc: "Tramitacion del Certificado de Instalacion Electrica para altas de luz, cambios de potencia, inspecciones obligatorias y ventas de vivienda." },
      { title: "Iluminacion", desc: "Instalacion y sustitucion de lamparas, focos empotrables, tiras LED, iluminacion exterior, sensores de movimiento y temporizadores." },
      { title: "Punto de recarga vehiculo electrico", desc: "Instalacion de wallbox para coche electrico en garaje comunitario o individual. Gestionamos la autorizacion de la comunidad y el proyecto tecnico." },
    ],
    whyUs: [
      { title: "Electricistas con carnet profesional", desc: "Todos nuestros electricistas son instaladores autorizados con carnet en vigor. Pueden certificar cualquier trabajo y emitir boletines electricos." },
      { title: "Diagnostico antes de presupuesto", desc: "Primero vemos que pasa, te lo explicamos con claridad y luego te damos el precio. Si no te convence, no pagas nada por el diagnostico." },
      { title: "Materiales homologados", desc: "Solo usamos material de primeras marcas (Schneider, Legrand, Simon, Hager). Nada de imitaciones ni material sin certificar." },
      { title: "Garantia por escrito", desc: "Todos los trabajos tienen garantia minima de 1 año en mano de obra y 2 años en materiales. Te lo damos por escrito en la factura." },
    ],
    pricing: [
      { service: "Revision cuadro electrico", range: "60 - 120 €" },
      { service: "Reparacion enchufe/interruptor", range: "40 - 80 €" },
      { service: "Sustitucion cuadro electrico completo", range: "300 - 800 €" },
      { service: "Boletin electrico (CIE)", range: "150 - 250 €" },
      { service: "Instalacion punto de luz", range: "50 - 120 €" },
      { service: "Instalacion wallbox coche electrico", range: "800 - 1.800 €" },
    ],
    pricingNote: "Los precios son orientativos e incluyen mano de obra y materiales basicos. El precio final depende del estado de la instalacion, la dificultad de acceso y los materiales elegidos. Siempre te daremos un presupuesto cerrado antes de empezar.",
    faq: [
      { q: "Necesito boletin electrico para dar de alta la luz?", a: "Si. Para dar de alta un nuevo suministro electrico o reactivar uno dado de baja hace mas de 3 años, necesitas un Certificado de Instalacion Electrica (CIE), comunmente llamado boletin electrico. Nuestros electricistas autorizados pueden tramitartelo." },
      { q: "Se me ha ido la luz en casa, que puede ser?", a: "Lo mas habitual es que haya saltado el diferencial o un magnetotermico. Comprueba el cuadro electrico: si hay algun interruptor bajado, subelo. Si vuelve a saltar, hay una averia (cortocircuito, derivacion a tierra o sobrecarga) y necesitas un electricista." },
      { q: "Cuanto cuesta cambiar toda la instalacion electrica de un piso?", a: "Depende de los metros cuadrados y el estado actual. Para un piso de 80-100 m2, una reinstalacion completa (cableado, cuadro, mecanismos) cuesta entre 3.000 y 6.000 euros. Incluye boletin electrico." },
      { q: "Es obligatorio tener diferencial en casa?", a: "Si. Desde 2002, toda instalacion electrica en vivienda debe tener al menos un interruptor diferencial de 30 mA. Si tu instalacion no lo tiene, es antigua y deberia ser revisada por un electricista autorizado." },
      { q: "Puedo instalar un punto de recarga para mi coche electrico en el garaje de mi comunidad?", a: "Si. La Ley de Propiedad Horizontal permite instalar un punto de recarga individual en tu plaza de garaje comunicandolo a la comunidad, sin necesidad de aprobacion en junta. Nosotros nos encargamos de la instalacion, el proyecto tecnico y la comunicacion." },
    ],
    situations: [
      { title: "Se ha ido la luz en casa", desc: "Si te has quedado sin luz, puede ser un corte general del suministro, un diferencial que ha saltado o una averia en tu instalacion. Primero comprueba si tus vecinos tienen luz. Si solo eres tu, revisa el cuadro electrico. Si no encuentras la causa, llamanos." },
      { title: "Un enchufe echa chispas", desc: "Un enchufe que echa chispas o huele a quemado es una señal de peligro real. Desenchufa inmediatamente lo que tengas conectado, baja el magnetotermico de ese circuito y llamanos. No lo uses hasta que lo revise un electricista." },
      { title: "Salta el diferencial constantemente", desc: "Si el diferencial salta cada vez que enchufas algo o de forma aleatoria, hay una derivacion a tierra en algun punto de la instalacion. Puede ser un electrodomestico averiado o un cable dañado. Necesitas un electricista para localizar el punto exacto con un megometro." },
      { title: "Necesito mas potencia electrica", desc: "Si te saltan los plomos cuando enciendes varios aparatos a la vez, probablemente necesitas una ampliacion de potencia. Revisamos tu instalacion, verificamos que soporta mas potencia y te tramitamos el cambio con la distribuidora. Puede requerir boletin electrico." },
      { title: "Quiero instalar un punto de recarga para coche electrico", desc: "Instalamos wallbox en garajes comunitarios e individuales. Nos encargamos del proyecto tecnico, la comunicacion a la comunidad de vecinos, la instalacion del cuadro de protecciones y la puesta en marcha. Todo legalizado." },
      { title: "Tengo una reforma y necesito nueva instalacion electrica", desc: "Diseñamos e instalamos la electricidad completa para tu reforma: esquema unifilar, cuadro electrico, cableado, mecanismos, iluminacion y tomas de corriente. Todo segun REBT y con boletin electrico incluido." },
    ],
    seoText: "En ManitasPL somos especialistas en solucionar problemas eléctricos en viviendas, pisos, chalets, locales comerciales y comunidades de vecinos en toda España. Ofrecemos servicio de electricista urgente, electricista 24 horas, electricista de emergencia, electricista barato y electricista económico en tu zona. Nuestros electricistas profesionales tienen carnet de instalador autorizado y están habilitados para emitir boletines eléctricos y certificados de instalación (CIE). Trabajamos con averías eléctricas de todo tipo: cortocircuitos, apagones, enchufes que no funcionan, luces que parpadean, diferenciales que saltan, magnetotérmicos que se disparan, cuadros eléctricos antiguos, cables recalentados, subidas de tensión y problemas de potencia. También realizamos instalaciones nuevas completas, reformas eléctricas, cambios de cuadro eléctrico, instalación de iluminación LED, domótica, videoporteros, porteros automáticos, puntos de recarga para coche eléctrico y todo tipo de trabajos eléctricos con garantía. ¿Buscas un electricista cerca de mí? Cubrimos más de 400 ciudades en España con electricistas locales que conocen la normativa y las instalaciones típicas de cada zona. Electricista a domicilio, electricista rápido, electricista de confianza, electricista certificado y electricista profesional: todo en un solo servicio. Presupuesto cerrado antes de empezar, sin costes ocultos y con garantía por escrito en cada trabajo.",
    emergencyTips: [
      "Si hueles a quemado o ves humo saliendo de un enchufe, cuadro electrico o cable, corta la corriente general desde el ICP (interruptor de control de potencia) y llamanos inmediatamente.",
      "Si se ha ido la luz en toda la casa, comprueba el cuadro electrico: si hay algun interruptor bajado, subelo. Si vuelve a saltar, no insistas y llama a un electricista.",
      "Nunca toques cables pelados, enchufes dañados o aparatos electricos con las manos mojadas. El riesgo de electrocucion es real.",
      "Si tienes un corte de luz parcial (unas habitaciones si y otras no), probablemente ha saltado un magnetotermico de un circuito concreto. Revisa el cuadro.",
    ],
    cityIntro: (city, province) =>
      `Disponemos de electricistas certificados en ${city} y toda la provincia de ${province}. Nuestros profesionales conocen las particularidades de las instalaciones electricas de la zona, desde edificios del casco antiguo con instalaciones de aluminio hasta urbanizaciones nuevas con domotica. Respuesta rapida y servicio garantizado.`,
    cityServices: (city) =>
      `En ${city} realizamos todo tipo de trabajos electricos: reparacion de averias, instalacion de cuadros electricos, boletines electricos, iluminacion LED, automatismos, videoporteros, puntos de recarga para vehiculo electrico e instalaciones completas para reformas y obra nueva.`,
    cityAdvice: (city) =>
      `Si vives en ${city} en un edificio de mas de 25 años, es muy probable que tu instalacion electrica necesite una revision. Las instalaciones antiguas no suelen tener proteccion diferencial, usan cableado de aluminio (en vez de cobre) y no soportan la potencia que necesitamos hoy en dia con electrodomesticos modernos, aire acondicionado y cargadores. Una revision preventiva puede evitar averias graves e incluso incendios.`,
  },

  fontanero: {
    heroSubtitle:
      "Fontaneros expertos en deteccion de fugas, reparacion de tuberias, instalacion de griferia y calentadores. Trabajamos con todas las marcas y materiales (cobre, PEX, multicapa, PPR). Servicio limpio y garantizado.",
    whatWeDo:
      "Nuestros fontaneros profesionales resuelven cualquier problema relacionado con el agua en tu hogar: fugas, atascos, roturas de tuberias, problemas con grifos, cisternas, calentadores y termos electricos. Tambien realizamos instalaciones nuevas, reformas de baño y cocina, y trabajos de mantenimiento preventivo. Utilizamos tecnologia de deteccion de fugas sin obra (camaras termicas, equipos de correlacion acustica, gas trazador) para localizar el problema exacto antes de abrir paredes o suelos. Esto significa menos obra, menos coste y menos molestias para ti.",
    howWeWork: [
      "Nos llamas y nos cuentas que te pasa: una fuga, un grifo que gotea, una tuberia rota, un calentador que no funciona... Te orientamos por telefono.",
      "Te enviamos un fontanero de tu zona con la herramienta y el material necesario. Te damos nombre y hora de llegada.",
      "El fontanero inspecciona el problema, te explica que ha encontrado y te da un presupuesto cerrado. Si hay que buscar una fuga oculta, usamos equipos de deteccion sin obra.",
      "Realizamos la reparacion o instalacion con materiales de calidad. Dejamos todo limpio, probado y sin goteos.",
      "Te entregamos factura con garantia por escrito. Si el problema se repite dentro del periodo de garantia, volvemos sin coste.",
    ],
    services: [
      { title: "Deteccion y reparacion de fugas", desc: "Localizamos fugas de agua ocultas en paredes, suelos y techos usando camaras termicas y equipos acusticos. Reparamos sin obra innecesaria." },
      { title: "Reparacion y sustitucion de tuberias", desc: "Reparamos tuberias de cobre, PEX, multicapa, plomo y hierro galvanizado. Sustitucion parcial o completa de la red de agua fria y caliente." },
      { title: "Griferia y sanitarios", desc: "Instalacion, reparacion y sustitucion de grifos, duchas, bañeras, inodoros, bides y lavabos. Trabajamos con todas las marcas." },
      { title: "Calentadores y termos", desc: "Instalacion, reparacion y sustitucion de calentadores de gas, termos electricos y calentadores instantaneos. Revision anual y mantenimiento." },
      { title: "Cisternas y mecanismos", desc: "Reparacion de cisternas que pierden agua, mecanismos de descarga que no funcionan, cisternas empotradas (Geberit, Roca, etc.)." },
      { title: "Reformas de baño y cocina", desc: "Fontaneria completa para reformas: desplazamiento de tomas de agua, desagues, instalacion de sanitarios nuevos y griferia." },
    ],
    whyUs: [
      { title: "Deteccion de fugas sin obra", desc: "Usamos tecnologia avanzada (termografia, correlacion acustica, gas trazador) para encontrar fugas sin romper paredes ni suelos." },
      { title: "Reparacion definitiva", desc: "No ponemos parches. Reparamos el origen del problema para que no vuelva a pasar. Por eso podemos dar garantia por escrito." },
      { title: "Limpieza total", desc: "Protegemos tu casa antes de empezar y dejamos todo limpio al terminar. Como si no hubieramos estado." },
      { title: "Presupuesto cerrado", desc: "Te decimos el precio exacto antes de empezar. Si durante el trabajo encontramos algo inesperado, te informamos antes de continuar." },
    ],
    pricing: [
      { service: "Reparacion de grifo/cisterna", range: "50 - 120 €" },
      { service: "Deteccion de fuga sin obra", range: "80 - 200 €" },
      { service: "Reparacion de tuberia rota", range: "100 - 300 €" },
      { service: "Sustitucion de calentador/termo", range: "200 - 500 €" },
      { service: "Instalacion de inodoro/lavabo", range: "80 - 200 €" },
      { service: "Fontaneria reforma baño completo", range: "800 - 2.500 €" },
    ],
    pricingNote: "Los precios son orientativos e incluyen mano de obra y materiales basicos. El precio final depende del tipo de averia, la accesibilidad y los materiales necesarios. Siempre presupuesto cerrado antes de empezar.",
    faq: [
      { q: "Tengo una mancha de humedad en el techo, puede ser una fuga?", a: "Si, las manchas de humedad en techos o paredes suelen indicar una fuga en la tuberia del vecino de arriba, en una bajante comunitaria o en tu propia instalacion. Nuestros fontaneros usan camaras termicas para localizar el origen exacto sin tener que picar." },
      { q: "Mi grifo gotea, es urgente?", a: "Un grifo que gotea no es una emergencia, pero desperdicia entre 30 y 100 litros de agua al dia (1.000-3.000 litros al mes). Ademas del gasto en la factura del agua, puede dañar la griferia y el mueble. Es una reparacion sencilla y barata que conviene hacer pronto." },
      { q: "Cuanto tarda en repararse una tuberia rota?", a: "Depende de la ubicacion y el material. Una reparacion accesible en tuberia vista se hace en 1-2 horas. Si la tuberia esta empotrada, hay que localizar el punto exacto, abrir, reparar y cerrar. Suele completarse en medio dia." },
      { q: "Puedo cambiar tuberias de plomo por otras mas seguras?", a: "Si, y es muy recomendable. Las tuberias de plomo estan prohibidas en nuevas instalaciones desde hace decadas por riesgo sanitario. Podemos sustituirlas por multicapa o PEX, que son seguras, duraderas y no contaminan el agua." },
      { q: "Merece la pena reparar un calentador viejo o es mejor cambiarlo?", a: "Si el calentador tiene mas de 10-12 años y la reparacion supera los 200-250 euros, suele ser mas rentable sustituirlo por uno nuevo. Los modelos actuales son mas eficientes y tienen garantia de 2-5 años." },
    ],
    situations: [
      { title: "Hay una fuga de agua en casa", desc: "Si ves agua saliendo por una pared, techo o suelo, cierra la llave de paso general de tu vivienda inmediatamente. Esto para la fuga y evita daños mayores. Luego llamanos: localizamos el punto exacto de la fuga con tecnologia sin obra y la reparamos." },
      { title: "El grifo gotea y no para", desc: "Un grifo que gotea desperdicia hasta 100 litros al dia. Suele ser un problema de la goma interior, el cartucho ceramico o la junta torica. Es una reparacion rapida y barata que evita un gasto innecesario en la factura del agua." },
      { title: "No sale agua caliente", desc: "Si no tienes agua caliente, el problema puede estar en el calentador, el termo electrico, la caldera o la griferia termostatica. Nuestros fontaneros diagnostican la causa exacta y te dan solucion inmediata." },
      { title: "La cisterna del WC no para de correr", desc: "Una cisterna que no para de llenarse pierde hasta 200 litros de agua al dia. El problema suele estar en el mecanismo de descarga o en la valvula de llenado. Reparacion sencilla en 30-45 minutos." },
      { title: "Hay una mancha de humedad en el techo", desc: "Las manchas de humedad en techos indican una fuga en la instalacion del piso de arriba, en una bajante o en la cubierta. Usamos camaras termicas para localizar el origen sin picar. Es importante actuar rapido para evitar daños estructurales." },
      { title: "Quiero reformar el baño o la cocina", desc: "Hacemos la fontaneria completa de tu reforma: desplazamiento de tomas de agua fria y caliente, nuevos desagues, instalacion de sanitarios, griferia, platos de ducha, bañeras y fregaderos. Coordinamos con tu albañil o reformista." },
    ],
    seoText: "En ManitasPL somos fontaneros profesionales especializados en reparaciones de fontanería, detección de fugas sin obra, sustitución de tuberías, instalación de grifería, reparación de cisternas, calentadores de agua, termos eléctricos y fontanería integral para reformas de baño y cocina. Ofrecemos servicio de fontanero urgente, fontanero 24 horas, fontanero de emergencia, fontanero barato y fontanero económico en toda España. Nuestros fontaneros trabajan con todos los materiales: cobre, PEX, multicapa, PPR, hierro galvanizado y plomo (para sustituciones). Resolvemos fugas de agua, roturas de tuberías, goteos en grifos, atascos en desagües, problemas con la presión del agua, calentadores que no funcionan, cisternas que pierden agua, bajantes rotos y cualquier emergencia de fontanería. Utilizamos tecnología avanzada de detección: cámaras térmicas, equipos de correlación acústica y gas trazador para localizar fugas ocultas sin romper paredes ni suelos. ¿Buscas un fontanero cerca de mí? Fontanero a domicilio, fontanero rápido, fontanero de confianza, fontanero certificado y fontanero profesional en más de 400 ciudades de España. Presupuesto cerrado, sin sorpresas y con garantía por escrito.",
    emergencyTips: [
      "Si hay una fuga importante, cierra la llave de paso general INMEDIATAMENTE. Esta suele estar debajo del fregadero de la cocina o en el cuarto de contadores.",
      "Si la fuga viene del techo, coloca un cubo debajo y avisa al vecino de arriba para que cierre su llave de paso.",
      "Si hay riesgo de inundacion, desconecta los electrodomesticos cercanos para evitar cortocircuitos.",
      "No intentes reparar una tuberia rota con cinta aislante o masilla provisional: solo empeora el problema. Cierra el agua y espera al fontanero.",
    ],
    cityIntro: (city, province) =>
      `Contamos con fontaneros profesionales en ${city} y toda la provincia de ${province}. Conocemos las redes de agua y las particularidades de la fontaneria local: dureza del agua, materiales habituales de las instalaciones y normativa municipal. Respuesta rapida para urgencias y servicio programado para reformas.`,
    cityServices: (city) =>
      `En ${city} realizamos reparacion de fugas, sustitucion de tuberias, instalacion de sanitarios, griferia, calentadores, termos electricos, cisternas y fontaneria completa para reformas de baño y cocina.`,
    cityAdvice: (city) =>
      `Si vives en ${city} en una vivienda con tuberias de hierro galvanizado (comunes en edificios de los años 60-80), es recomendable planificar su sustitucion. Estas tuberias se corroen por dentro, reducen el caudal de agua y pueden contaminarla con oxido. Sustituirlas por multicapa o PEX es una inversion que mejora tu calidad de vida y evita futuras inundaciones.`,
  },

  cerrajero: {
    heroSubtitle:
      "Cerrajeros profesionales para aperturas de puertas, cambios de cerradura, instalacion de cerraduras de seguridad y sistemas antibumping. Trabajamos sin dañar tu puerta. Servicio discreto y garantizado.",
    whatWeDo:
      "Nuestros cerrajeros profesionales te ayudan cuando te quedas fuera de casa, cuando necesitas mejorar la seguridad de tu puerta o cuando has sufrido un intento de robo. Trabajamos con todas las marcas y tipos de cerraduras: yale, bombillos europeos, cerraduras multipunto, cerraduras inteligentes, puertas blindadas y acorazadas. Nuestro objetivo es siempre abrir sin dañar la puerta ni la cerradura. Solo en casos extremos (cerradura bloqueada por intento de robo, por ejemplo) es necesario forzar. Incluso en esos casos, te dejamos una cerradura nueva instalada antes de irnos.",
    howWeWork: [
      "Nos llamas y nos cuentas tu situacion: puerta cerrada, cerradura rota, intento de robo, necesitas mejorar la seguridad... Te orientamos por telefono.",
      "Te enviamos un cerrajero de tu zona. Te damos su nombre, hora estimada de llegada y un rango de precio para tu caso.",
      "El cerrajero evalua la situacion in situ: tipo de puerta, tipo de cerradura, grado de dificultad. Te confirma el precio exacto antes de actuar.",
      "Realizamos la apertura o el cambio de cerradura con tecnicas no destructivas siempre que sea posible. Si hay que sustituir algo, te mostramos las opciones.",
      "Te entregamos factura con detalle del trabajo realizado, las llaves nuevas y la garantia por escrito del material instalado.",
    ],
    services: [
      { title: "Apertura de puertas", desc: "Apertura de puertas cerradas sin llaves, con cerradura bloqueada o atascada. Tecnicas no destructivas: ganzuas, bumping controlado, impresioning. Sin dañar la puerta." },
      { title: "Cambio de cerradura", desc: "Sustitucion de bombillo, cerradura completa o cerradura multipunto. Instalamos cerraduras de seguridad de las mejores marcas (Keso, Ezcurra, Lince, Tesa, Yale)." },
      { title: "Cerraduras antibumping", desc: "Instalacion de bombillos y cerraduras con proteccion antibumping, antiganzua y antitaladro. La mejor proteccion contra los metodos de robo mas habituales." },
      { title: "Puertas blindadas y acorazadas", desc: "Instalacion, reparacion y ajuste de puertas blindadas y acorazadas. Cambio de cerraduras multipunto, bisagras y sistemas de cierre." },
      { title: "Cerraduras inteligentes", desc: "Instalacion de cerraduras electronicas con apertura por huella, codigo, tarjeta o movil. Compatibles con sistemas domoticos." },
      { title: "Servicio post-robo", desc: "Reparacion urgente despues de un intento de robo o allanamiento. Sustitucion de cerradura, refuerzo de puerta y asesoramiento sobre seguridad." },
    ],
    whyUs: [
      { title: "Apertura sin daños", desc: "Nuestros cerrajeros dominan tecnicas no destructivas. En el 90% de los casos abrimos tu puerta sin dañar ni la cerradura ni la puerta." },
      { title: "Precio cerrado antes de actuar", desc: "Te decimos cuanto va a costar antes de empezar. Sin sorpresas al terminar. Si no te convence, no pagas nada." },
      { title: "Cerrajeros identificados", desc: "Todos nuestros cerrajeros van identificados con nombre y numero de profesional. Te damos sus datos antes de que llegue." },
      { title: "Marcas de primera", desc: "Solo instalamos cerraduras de marcas reconocidas con garantia del fabricante. Nada de imitaciones ni cerraduras sin homologar." },
    ],
    pricing: [
      { service: "Apertura puerta (tecnica no destructiva)", range: "60 - 150 €" },
      { service: "Cambio de bombillo de seguridad", range: "80 - 180 €" },
      { service: "Cambio cerradura multipunto", range: "150 - 400 €" },
      { service: "Instalacion cerradura antibumping", range: "100 - 250 €" },
      { service: "Copia de llaves de seguridad", range: "20 - 60 €" },
      { service: "Instalacion cerradura inteligente", range: "200 - 600 €" },
    ],
    pricingNote: "Los precios son orientativos. El precio final depende del tipo de puerta, la cerradura instalada y la dificultad de la intervencion. Siempre te damos el precio cerrado antes de empezar.",
    faq: [
      { q: "Me he dejado las llaves dentro de casa, cuanto cuesta abrir?", a: "Una apertura no destructiva de puerta con cerradura estandar suele costar entre 60 y 120 euros. Si la cerradura es de alta seguridad (antibumping, multipunto), puede ser algo mas. Te damos el precio exacto antes de actuar." },
      { q: "Cuanto tarda un cerrajero en abrir una puerta?", a: "Depende del tipo de cerradura. Una cerradura estandar se abre en 5-15 minutos con tecnicas no destructivas. Una cerradura de alta seguridad puede tardar 20-40 minutos. En casos extremos (puerta acorazada con cerradura bloqueada), puede ser mas." },
      { q: "Merece la pena poner una cerradura antibumping?", a: "Si. El bumping es el metodo de robo mas utilizado en España. Un bombillo antibumping de buena marca (Keso, Ezcurra, Lince) cuesta entre 80 y 180 euros instalado y es la mejor inversion en seguridad para tu hogar." },
      { q: "Que hago si han intentado robar en mi casa?", a: "Primero, no toques nada y llama a la policia para que levanten acta. Despues, llamanos: te enviamos un cerrajero para sustituir la cerradura dañada y reforzar la puerta. El acta policial puede servirte para el seguro del hogar." },
      { q: "Que diferencia hay entre puerta blindada y acorazada?", a: "La puerta blindada tiene una hoja de madera reforzada con una o dos chapas de acero. La puerta acorazada tiene un marco y una hoja completamente de acero, revestidos de madera por estetica. La acorazada ofrece mas seguridad pero tambien es mas cara (1.500-4.000 euros vs 600-1.500 euros)." },
    ],
    situations: [
      { title: "Me he dejado las llaves dentro de casa", desc: "Es la situacion mas habitual. Nuestros cerrajeros abren tu puerta sin dañarla usando tecnicas no destructivas (ganzuas, impresioning). En el 90% de los casos no hay que cambiar nada: solo abrir y entrar. Rapido, limpio y sin daños." },
      { title: "La cerradura no gira o esta atascada", desc: "Una cerradura atascada puede deberse a un bombillo desgastado, un mecanismo oxidado o una llave deformada. No fuerces la llave: puedes partirla dentro y complicar la situacion. Llamanos y lo resolvemos sin dañar la puerta." },
      { title: "Han intentado robar en mi casa", desc: "Si ves marcas de palanca, el bombillo manipulado o la puerta forzada, no toques nada y llama a la policia primero. Despues llamanos: sustituimos la cerradura dañada, reforzamos la puerta y te asesoramos sobre mejoras de seguridad." },
      { title: "Quiero mejorar la seguridad de mi puerta", desc: "Instalamos bombillos antibumping, cerraduras de seguridad multipunto, escudos de proteccion y cerraduras inteligentes. Evaluamos tu puerta actual y te recomendamos la mejor opcion sin intentar venderte lo mas caro." },
      { title: "Se ha roto la llave dentro de la cerradura", desc: "No intentes sacarla con pinzas o alicates: puedes empujarla mas adentro. Nuestros cerrajeros extraen la llave rota y dejan la cerradura operativa. Si el bombillo esta dañado, lo sustituimos en el momento." },
      { title: "Necesito copias de llaves de seguridad", desc: "Hacemos copias de llaves de seguridad, llaves de puntos, llaves de serreta y llaves especiales. Para llaves protegidas por patente, necesitamos la tarjeta de propiedad." },
    ],
    seoText: "En ManitasPL somos cerrajeros profesionales especializados en aperturas de puertas sin daños, cambios de cerradura, instalación de cerraduras de seguridad antibumping, cerraduras multipunto, bombillos de alta seguridad, puertas blindadas y acorazadas, cerraduras inteligentes y servicio urgente después de un robo o intento de robo. Ofrecemos servicio de cerrajero urgente, cerrajero 24 horas, cerrajero de emergencia, cerrajero barato y cerrajero económico en toda España. Trabajamos con todas las marcas de cerraduras: Keso, Ezcurra, Lince, Tesa, Yale, Iseo, Mottura, Fichet, Mul-T-Lock y Vachette. Nuestros cerrajeros dominan técnicas de apertura no destructivas para abrir tu puerta sin daños en la inmensa mayoría de casos. También realizamos duplicados de llaves, reparación de puertas blindadas, ajuste de bisagras, instalación de escudos de protección y asesoramiento integral en seguridad para el hogar. ¿Buscas un cerrajero cerca de mí? Cerrajero a domicilio, cerrajero rápido, cerrajero de confianza, cerrajero certificado y cerrajero profesional en más de 400 ciudades de España. Precio cerrado antes de actuar, sin sorpresas y con garantía del fabricante en todo el material instalado.",
    emergencyTips: [
      "Si te has quedado fuera de casa, no intentes abrir la puerta tu mismo con tarjetas, alambres o herramientas: puedes dañar la cerradura y encarecer la reparacion.",
      "Si han intentado robar, no toques la puerta ni la cerradura hasta que venga la policia. Necesitas el atestado para el seguro.",
      "Si la llave se ha partido dentro de la cerradura, no metas otra llave ni intentes extraer el trozo con herramientas caseras.",
      "Si tu puerta se ha cerrado de un golpe de aire con las llaves dentro, manten la calma y llamanos. Es la apertura mas sencilla y rapida.",
    ],
    cityIntro: (city, province) =>
      `Contamos con cerrajeros profesionales en ${city} y toda la provincia de ${province}. Nuestros cerrajeros conocen los tipos de puertas y cerraduras mas habituales en la zona y van equipados para resolver cualquier situacion: aperturas, cambios de cerradura, refuerzos de seguridad y reparaciones urgentes.`,
    cityServices: (city) =>
      `En ${city} realizamos aperturas de puertas, cambios de cerradura, instalacion de cerraduras antibumping y de seguridad, reparacion de puertas blindadas y acorazadas, cerraduras inteligentes y servicio urgente post-robo.`,
    cityAdvice: (city) =>
      `Si vives en ${city} y tu cerradura tiene mas de 10 años, probablemente no tenga proteccion antibumping. El bumping es el metodo de entrada mas utilizado por los ladrones en España: con una llave especial y un golpe, abren la puerta en segundos sin dejar marcas. Cambiar el bombillo por uno antibumping cuesta entre 80 y 180 euros y es la mejora de seguridad con mejor relacion calidad-precio.`,
  },

  desatascos: {
    heroSubtitle:
      "Servicio de desatascos con maquinaria profesional: camiones cuba, equipos de alta presion, camaras de inspeccion CCTV y fresadoras mecanicas. Desatascamos tuberias, arquetas, bajantes, fosas septicas y redes de saneamiento.",
    whatWeDo:
      "Somos especialistas en desatascos y limpieza de tuberias. Cuando un desague se atasca, un inodoro no traga o una arqueta se desborda, el problema puede estar en un simple tapon de grasa o en una obstruccion grave en la red de saneamiento. Nuestros tecnicos diagnostican el problema con camaras de inspeccion CCTV para ver exactamente que pasa dentro de la tuberia antes de intervenir. Segun el caso, usamos equipos de alta presion (agua a 200-400 bar), fresadoras mecanicas o hidrolimpiadoras para eliminar la obstruccion sin dañar la tuberia. Para trabajos de mayor envergadura (vaciado de fosas septicas, limpieza de colectores, inundaciones en sotanos), disponemos de camiones cuba de diferentes capacidades.",
    howWeWork: [
      "Nos llamas y nos describes el problema: que desague esta atascado, desde cuando, si sale agua por donde no deberia, si hay mal olor, etc.",
      "Te enviamos un tecnico de tu zona con el equipo adecuado. Para atascos domesticos, suele bastar con una furgoneta con equipo de alta presion. Para problemas mayores, enviamos camion cuba.",
      "El tecnico inspecciona con camara CCTV si es necesario. Te enseña en la pantalla que hay dentro de la tuberia y te explica las opciones.",
      "Realizamos el desatasco con la tecnica mas adecuada: alta presion, fresadora mecanica o vaciado con cuba. Verificamos con camara que la tuberia queda completamente limpia.",
      "Te damos recomendaciones para evitar que el problema se repita y te entregamos la factura con garantia.",
    ],
    services: [
      { title: "Desatasco de tuberias", desc: "Desatasco de tuberias de desague en cocina, baño, lavabo, ducha, bañera y fregadero. Equipos de alta presion que eliminan grasa, cal y residuos sin dañar la tuberia." },
      { title: "Desatasco de inodoros", desc: "Desatasco de WC con equipo profesional. Eliminamos tapones de papel, toallitas, objetos caidos y acumulaciones de cal. Resultado inmediato." },
      { title: "Limpieza de bajantes", desc: "Limpieza a presion de bajantes de fecales y pluviales. Eliminamos incrustaciones de grasa, cal, raices y sedimentos que reducen el caudal." },
      { title: "Limpieza de arquetas", desc: "Vaciado y limpieza de arquetas de saneamiento, sifones, pozos de registro y colectores. Eliminamos lodos, grasas y residuos acumulados." },
      { title: "Vaciado de fosas septicas", desc: "Vaciado y limpieza de fosas septicas con camion cuba. Gestionamos el transporte y el vertido autorizado de los residuos." },
      { title: "Inspeccion con camara CCTV", desc: "Inspeccion televisiva del interior de tuberias y colectores. Localizamos obstrucciones, roturas, desplazamientos de juntas y raices. Informe con video." },
    ],
    whyUs: [
      { title: "Diagnostico con camara CCTV", desc: "Vemos lo que hay dentro de tu tuberia antes de intervenir. Asi sabemos exactamente cual es el problema y aplicamos la solucion correcta." },
      { title: "Maquinaria profesional", desc: "Equipos de alta presion hasta 400 bar, fresadoras mecanicas, camiones cuba de 3.000 a 15.000 litros. Tenemos la herramienta para cualquier atasco." },
      { title: "Desatasco garantizado", desc: "Si el atasco se repite en los 3 meses siguientes por la misma causa, volvemos y lo solucionamos sin coste adicional." },
      { title: "Limpieza incluida", desc: "Dejamos la zona de trabajo limpia y desinfectada. Nos llevamos todos los residuos y los gestionamos de forma autorizada." },
    ],
    pricing: [
      { service: "Desatasco domestico (WC, fregadero, ducha)", range: "60 - 150 €" },
      { service: "Desatasco con equipo de alta presion", range: "120 - 300 €" },
      { service: "Limpieza de bajante", range: "150 - 400 €" },
      { service: "Inspeccion con camara CCTV", range: "100 - 250 €" },
      { service: "Vaciado fosa septica (camion cuba)", range: "200 - 600 €" },
      { service: "Limpieza de arqueta/colector", range: "100 - 300 €" },
    ],
    pricingNote: "Los precios son orientativos. El precio final depende de la gravedad del atasco, la longitud y diametro de la tuberia, la accesibilidad y el tipo de maquinaria necesaria. Presupuesto cerrado antes de empezar.",
    faq: [
      { q: "Se me ha atascado el WC, puedo intentar desatascarlo yo?", a: "Puedes probar con un desatascador de ventosa (no quimico). Coloca la ventosa sobre el desague del inodoro y haz movimientos de bomba. Si despues de 10-15 intentos no se desatasca, llamanos. No eches productos quimicos: pueden dañar la tuberia y son peligrosos." },
      { q: "Por que huele mal el desague de la cocina?", a: "El mal olor suele indicar acumulacion de grasa y restos de comida en la tuberia o en el sifon. Una limpieza profesional con agua a presion elimina la grasa y el olor. Como prevencion, echa agua muy caliente por el fregadero una vez a la semana." },
      { q: "Cada cuanto hay que vaciar una fosa septica?", a: "Depende del tamaño de la fosa y el numero de personas. Como regla general, una fosa septica domestica debe vaciarse cada 1-2 años. Si notas que los desagues van lentos o hay mal olor, es señal de que necesita vaciado." },
      { q: "Se ha desbordado una arqueta, que hago?", a: "No pises el agua desbordada (puede contener bacterias). Cierra el agua de casa si es posible y llamanos. Es una situacion que requiere atencion rapida para evitar daños en suelos, paredes y mobiliario." },
      { q: "Se pueden meter raices en las tuberias?", a: "Si, es uno de los problemas mas habituales en viviendas unifamiliares con jardin. Las raices de arboles y arbustos penetran por las juntas de la tuberia buscando agua y van obstruyendola. Se eliminan con fresadora mecanica y, en casos graves, hay que reparar o sustituir el tramo afectado." },
    ],
    situations: [
      { title: "El WC no traga o esta atascado", desc: "Un inodoro atascado suele deberse a un exceso de papel, toallitas humedas tiradas al WC o un objeto que ha caido. Puedes probar con un desatascador de ventosa. Si no funciona, llamanos: lo resolvemos con equipo profesional en minutos." },
      { title: "Sale mal olor de los desagues", desc: "El mal olor en desagues indica acumulacion de grasa, restos organicos o un sifon seco. Si echas agua caliente y el olor persiste, necesitas una limpieza profesional del tramo de tuberia afectado." },
      { title: "El agua no baja en la ducha o el fregadero", desc: "Un desague lento es el primer sintoma de un atasco en formacion. No esperes a que se bloquee del todo: una limpieza a tiempo es mas rapida, mas barata y evita desbordamientos." },
      { title: "Se ha desbordado una arqueta o pozo", desc: "Si una arqueta se desborda, no pises el agua (contiene bacterias) y llamanos inmediatamente. Enviamos equipo de desatasco de alta presion o camion cuba segun la gravedad." },
      { title: "La fosa septica esta llena", desc: "Si los desagues van lentos, hay burbujas en el WC o hueles mal en el jardin, la fosa septica necesita vaciado. Nuestros camiones cuba vacian la fosa y gestionan el vertido autorizado de los residuos." },
      { title: "Bañera o plato de ducha atascado", desc: "Los atascos en bañeras y duchas se producen por acumulacion de pelo, jabon y cal. Los productos quimicos raramente funcionan y dañan las tuberias. Nosotros limpiamos con agua a presion: resultado inmediato y tuberia como nueva." },
    ],
    seoText: "En ManitasPL somos especialistas en desatascos profesionales con maquinaria de última generación. Ofrecemos servicio de desatascos urgentes, desatascos 24 horas, desatascos de emergencia, desatascos baratos y desatascos económicos en toda España. Desatascamos tuberías, inodoros, fregaderos, duchas, bañeras, bajantes, arquetas, colectores y fosas sépticas en viviendas, comunidades de vecinos, restaurantes, hoteles y locales comerciales. Utilizamos equipos de agua a alta presión (200-400 bar), fresadoras mecánicas rotativas, cámaras de inspección CCTV robotizadas y camiones cuba de 3.000 a 15.000 litros de capacidad. Nuestros técnicos diagnostican el problema con cámaras de televisión antes de intervenir para aplicar la solución más eficaz y evitar tratamientos innecesarios. Resolvemos todo tipo de atascos: tapones de grasa, acumulaciones de cal, raíces dentro de tuberías, toallitas y objetos caídos, sedimentos, incrustaciones y obstrucciones en cualquier tipo de tubería. ¿Buscas desatascos cerca de mí? Servicio de desatascos a domicilio, desatascos rápidos, empresa de desatascos de confianza y desatascos profesionales en más de 400 ciudades de España. Desatasco garantizado: si se repite en 3 meses por la misma causa, volvemos gratis.",
    emergencyTips: [
      "Si el WC esta atascado, no tires mas de la cadena: solo conseguiras que se desborde.",
      "No eches productos quimicos desatascadores: suelen ser ineficaces para atascos reales y dañan las tuberias (especialmente las de PVC antiguo).",
      "Si se ha desbordado una arqueta o el WC, no pises el agua. Contiene bacterias y puede ser un riesgo sanitario.",
      "Si hueles a alcantarilla en casa, puede ser un sifon seco (echa un vaso de agua por cada desague que no uses) o una obstruccion en la red de saneamiento.",
    ],
    cityIntro: (city, province) =>
      `Disponemos de equipos de desatascos en ${city} y toda la provincia de ${province}. Furgonetas con equipo de alta presion para atascos domesticos y camiones cuba para trabajos de mayor envergadura. Conocemos la red de saneamiento de la zona y las incidencias mas habituales.`,
    cityServices: (city) =>
      `En ${city} realizamos desatascos de tuberias, inodoros, fregaderos, bajantes, arquetas, colectores, vaciado de fosas septicas e inspeccion con camara CCTV.`,
    cityAdvice: (city) =>
      `Si vives en ${city} en un edificio antiguo, es recomendable hacer una limpieza preventiva de bajantes cada 2-3 años. Las tuberias antiguas de fibrocemento o hierro fundido acumulan incrustaciones de grasa y cal que van reduciendo el diametro hasta provocar atascos graves. Una limpieza preventiva con agua a presion cuesta mucho menos que una urgencia por atasco con desbordamiento.`,
  },

  calderas: {
    heroSubtitle:
      "Tecnicos de calderas certificados para revision, reparacion, instalacion y sustitucion de calderas de gas, gasoil y aerotermia. Trabajamos con todas las marcas. Mantenimiento preventivo y servicio garantizado.",
    whatWeDo:
      "Nuestros tecnicos de calderas estan certificados por las principales marcas (Junkers/Bosch, Vaillant, Saunier Duval, Baxi, Ferroli, Cointra, Ariston) y tienen el carnet de instalador de gas en vigor. Realizamos revisiones anuales obligatorias, reparaciones de averias, instalacion de calderas nuevas y sustitucion de equipos antiguos. Tambien instalamos sistemas de aerotermia (bomba de calor aire-agua) como alternativa eficiente al gas. Estamos al dia con la normativa vigente (RITE - Reglamento de Instalaciones Termicas en Edificios) y podemos tramitar el certificado de revision de gas y el alta de la instalacion.",
    howWeWork: [
      "Nos llamas y nos explicas que le pasa a tu caldera: no enciende, hace ruido, pierde presion, no da agua caliente, necesitas la revision anual, etc.",
      "Te asignamos un tecnico certificado de tu zona, especializado en la marca de tu caldera. Te damos su nombre y hora de llegada.",
      "El tecnico diagnostica el problema, te explica que ha encontrado (te enseña la pieza averiada si la hay) y te da un presupuesto cerrado con opciones.",
      "Realizamos la reparacion con piezas originales o compatibles homologadas. Si la caldera necesita sustitucion, te asesoramos sobre el modelo mas adecuado para tu vivienda.",
      "Te entregamos factura con garantia, certificado de revision si procede, y recomendaciones de mantenimiento para alargar la vida de tu caldera.",
    ],
    services: [
      { title: "Revision anual de caldera", desc: "Revision obligatoria segun RITE: analisis de combustion, comprobacion de seguridades, limpieza de quemador e intercambiador, verificacion de estanqueidad de gas. Emitimos el certificado oficial." },
      { title: "Reparacion de averias", desc: "Diagnostico y reparacion de todo tipo de averias: caldera que no enciende, pierde presion, hace ruido, da error, no calienta agua, no arranca la calefaccion, etc." },
      { title: "Instalacion de caldera nueva", desc: "Instalacion de calderas de condensacion, calderas estancas y calderas mixtas (calefaccion + ACS). Gestionamos el alta de gas y el certificado de instalacion." },
      { title: "Sustitucion de caldera antigua", desc: "Retiramos tu caldera vieja y la sustituimos por una nueva de condensacion. Las calderas de condensacion ahorran un 20-30% en la factura de gas respecto a las antiguas." },
      { title: "Radiadores y calefaccion", desc: "Instalacion, reparacion y purgado de radiadores. Equilibrado de circuitos de calefaccion. Sustitucion de bombas circuladoras y valvulas." },
      { title: "Aerotermia", desc: "Instalacion de sistemas de aerotermia (bomba de calor aire-agua) para calefaccion, refrigeracion y agua caliente sanitaria. Eficiencia energetica maxima: por cada kW consumido, produce 3-5 kW de energia termica." },
    ],
    whyUs: [
      { title: "Tecnicos certificados por marca", desc: "Nuestros tecnicos estan formados y certificados por los principales fabricantes de calderas. Conocen cada modelo en profundidad." },
      { title: "Piezas originales", desc: "Usamos piezas originales del fabricante o compatibles homologadas. Nunca instalamos piezas genericas sin certificar." },
      { title: "Certificado oficial", desc: "Emitimos el certificado de revision de gas valido para la compañia distribuidora. Cumple con todos los requisitos del RITE." },
      { title: "Asesoramiento honesto", desc: "Si tu caldera se puede reparar, la reparamos. Si merece mas la pena cambiarla, te lo decimos y te explicamos por que. Sin presiones." },
    ],
    pricing: [
      { service: "Revision anual + certificado", range: "80 - 120 €" },
      { service: "Reparacion de averia (sin pieza)", range: "60 - 120 €" },
      { service: "Sustitucion de caldera de condensacion", range: "1.200 - 2.500 €" },
      { service: "Purgado y equilibrado de radiadores", range: "60 - 150 €" },
      { service: "Instalacion de radiador nuevo", range: "100 - 250 €" },
      { service: "Instalacion aerotermia completa", range: "6.000 - 15.000 €" },
    ],
    pricingNote: "Los precios son orientativos. El precio de las reparaciones depende de la pieza necesaria (las piezas originales tienen precios variables segun marca y modelo). El precio de las instalaciones incluye equipo, materiales y mano de obra. Presupuesto cerrado antes de empezar.",
    faq: [
      { q: "Cada cuanto hay que hacer la revision de la caldera?", a: "La revision de caldera de gas es obligatoria cada 2 años segun el RITE (cada año si la caldera tiene mas de 15 años o si la compañia de gas lo requiere). Si no pasas la revision, la compañia puede cortarte el suministro de gas." },
      { q: "Mi caldera no enciende, que puede ser?", a: "Las causas mas habituales son: presion baja del circuito (menos de 1 bar), fallo del encendido electronico, sensor de llama sucio, valvula de gas bloqueada o falta de gas. Puedes comprobar la presion en el manometro: si esta por debajo de 1 bar, rellena el circuito abriendo la llave de llenado hasta que marque 1,2-1,5 bar." },
      { q: "Merece la pena cambiar mi caldera vieja por una de condensacion?", a: "Si tu caldera tiene mas de 12-15 años, probablemente si. Las calderas de condensacion son un 20-30% mas eficientes que las convencionales. En una vivienda media, esto supone un ahorro de 200-400 euros al año en gas. La inversion se recupera en 4-6 años." },
      { q: "Que es la aerotermia y merece la pena?", a: "La aerotermia es un sistema que extrae calor del aire exterior para calentar tu casa y el agua. Es electrica, no usa gas. Por cada kW que consume, genera 3-5 kW de calor. Es la opcion mas eficiente, pero la inversion inicial es mayor (6.000-15.000 euros). Merece la pena en viviendas unifamiliares y en zonas con clima moderado." },
      { q: "Mi caldera pierde presion constantemente, es grave?", a: "Si la caldera pierde presion lentamente (baja 0,2-0,5 bar por semana), probablemente tienes una fuga pequeña en el circuito de calefaccion (un radiador, una valvula o una union). No es urgente pero hay que localizarla y repararla. Si baja de presion rapido, puede ser la valvula de seguridad o el vaso de expansion dañado, y hay que revisarlo cuanto antes." },
    ],
    situations: [
      { title: "La caldera no enciende", desc: "Las causas mas comunes son: presion baja (comprueba el manometro, debe estar entre 1 y 1,5 bar), fallo del encendido electronico, sensor de llama sucio o falta de gas. Si el manometro esta bajo, prueba a rellenar el circuito con la llave de llenado. Si sigue sin encender, llamanos." },
      { title: "La caldera pierde presion", desc: "Si la presion baja constantemente (cada pocos dias), hay una fuga en el circuito de calefaccion: un radiador, una valvula o el propio vaso de expansion de la caldera. Nuestros tecnicos localizan la fuga y la reparan." },
      { title: "No tengo agua caliente", desc: "Si la calefaccion funciona pero no sale agua caliente (o viceversa), el problema suele estar en la valvula de tres vias, el intercambiador de placas o el sensor de temperatura de ACS. Es una reparacion habitual." },
      { title: "La caldera hace ruido extraño", desc: "Ruidos de burbujeo indican aire en el circuito (se soluciona purgando los radiadores). Ruidos de golpeteo pueden indicar cal en el intercambiador. Silbidos pueden indicar presion incorrecta. Cada ruido tiene su causa y su solucion." },
      { title: "Huele a gas cerca de la caldera", desc: "Si hueles a gas, abre las ventanas inmediatamente, no enciendas ni apagues nada electrico, sal de la vivienda y llama al 112 y al telefono de emergencias de gas (900 750 750). Una vez descartado el peligro, llamanos para revisar la caldera." },
      { title: "Necesito la revision anual de la caldera", desc: "La revision de caldera de gas es obligatoria cada 2 años segun el RITE. Incluye analisis de combustion, comprobacion de seguridades, limpieza de quemador y emision del certificado oficial. Llamanos y la programamos en tu horario." },
    ],
    seoText: "En ManitasPL somos técnicos de calderas certificados por los principales fabricantes: Junkers/Bosch, Vaillant, Saunier Duval, Baxi, Ferroli, Cointra, Ariston, Beretta, Roca y Hermann. Ofrecemos servicio de calderas urgente, reparación de calderas 24 horas, técnico de calderas de emergencia, reparación de calderas barata y revisión de calderas económica en toda España. Realizamos revisiones anuales obligatorias con certificado oficial, reparación de todo tipo de averías (caldera que no enciende, pierde presión, no da agua caliente, hace ruido, da error, pierde agua, no arranca la calefacción), instalación de calderas nuevas de condensación, sustitución de calderas antiguas, mantenimiento de radiadores, purgado y equilibrado de circuitos de calefacción, instalación de termostatos inteligentes y sistemas de aerotermia. Nuestros técnicos tienen el carnet de instalador de gas en vigor y pueden tramitar el alta de la instalación, el certificado de revisión de gas y cualquier trámite con la compañía distribuidora. ¿Buscas un técnico de calderas cerca de mí? Técnico de calderas a domicilio, reparación de calderas rápida, servicio de calderas de confianza y mantenimiento de calderas profesional en más de 400 ciudades de España. Presupuesto cerrado, piezas originales y garantía por escrito.",
    emergencyTips: [
      "Si hueles a gas, NO enciendas ni apagues luces ni ningun aparato electrico. Abre ventanas, sal de casa y llama al 112.",
      "Si la caldera pierde agua de forma visible, cierra la llave de gas y la llave de agua de la caldera y llamanos.",
      "Si un radiador pierde agua por una valvula, coloca un recipiente debajo y cierra la valvula de ese radiador (gira el mando en sentido horario). Si no se cierra, cierra la llave de llenado de la caldera.",
      "Si la caldera muestra un codigo de error, anotalo antes de llamarnos. Con el codigo y la marca/modelo podemos anticipar que pieza necesitamos y venir preparados.",
    ],
    cityIntro: (city, province) =>
      `Contamos con tecnicos de calderas certificados en ${city} y toda la provincia de ${province}. Nuestros profesionales conocen las marcas de calderas mas instaladas en la zona y llevan las piezas mas habituales en la furgoneta para resolver la mayoria de averias en una sola visita.`,
    cityServices: (city) =>
      `En ${city} realizamos revision anual con certificado, reparacion de averias, instalacion y sustitucion de calderas de condensacion, mantenimiento de radiadores y calefaccion, e instalacion de sistemas de aerotermia.`,
    cityAdvice: (city) =>
      `Si vives en ${city} y tu caldera tiene mas de 15 años, no esperes a que te deje sin calefaccion en pleno invierno. Programa una revision antes de que empiece el frio. Las calderas antiguas de tiro natural (abiertas) estan siendo sustituidas por calderas estancas de condensacion, que son obligatorias en nuevas instalaciones y reducen el consumo de gas un 20-30%. El coste de sustitucion con instalacion suele estar entre 1.200 y 2.500 euros.`,
  },
}
