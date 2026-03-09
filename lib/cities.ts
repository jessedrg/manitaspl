export interface CityData {
  slug: string
  name: string
  province: string
}

// Same cities as the market we serve, with display names and provinces
export const CITIES: string[] = [
  "barcelona","hospitalet-llobregat","badalona","terrassa","sabadell","mataro",
  "santa-coloma-gramenet","cornella-llobregat","sant-boi-llobregat","rubi",
  "manresa","vilanova-geltru","viladecans","castelldefels","el-prat-llobregat",
  "granollers","cerdanyola-valles","mollet-valles","gava","esplugues-llobregat",
  "sant-cugat-valles","sant-feliu-llobregat","vic","igualada","ripollet",
  "sant-adria-besos","montcada-reixac","sant-pere-ribes","sitges","martorell",
  "pineda-mar","sant-joan-despi","premia-mar","calella","el-masnou","mongat",
  "malgrat-mar","arenys-mar","canet-mar","cardedeu","molins-rei",
  "sant-vicenc-dels-horts","palleja","barbera-valles","santa-perpetua-mogoda",
  "llinars-valles","la-garriga","caldes-montbui","parets-valles","montmelo",
  "la-llagosta","blanes","lloret-mar","sant-andreu-barca","olesa-montserrat",
  "abrera","esparreguera","castellbisbal","vilafranca-penedes","el-vendrell",
  "calafell","torredembarra","cunit","cubelles",
  "girona","figueres","olot","salt","palafrugell","sant-feliu-guixols","roses",
  "banyoles","palamos","ripoll","lescala","castello-empuries","cadaques","llanca",
  "tossa-mar","begur","pals",
  "tarragona","reus","tortosa","cambrils","salou","valls","amposta","vila-seca","miami-platja",
  "lleida","balaguer","tarrega","mollerussa","la-seu-urgell","solsona","cervera","tremp","vielha",
  "madrid","mostoles","alcala-henares","fuenlabrada","leganes","getafe","alcorcon",
  "torrejon-ardoz","parla","alcobendas","las-rozas","pozuelo-alarcon","coslada",
  "rivas-vaciamadrid","valdemoro","majadahonda","collado-villalba","aranjuez",
  "arganda-rey","boadilla-monte","pinto","colmenar-viejo","tres-cantos",
  "san-sebastian-reyes","san-fernando-henares","el-escorial","torrelodones","galapagar",
  "malaga","marbella","mijas","fuengirola","torremolinos","benalmadena","estepona",
  "velez-malaga","rincon-victoria","antequera","ronda","nerja","alhaurin-torre","coin",
  "alhaurin-grande","cartama","san-pedro-alcantara","puerto-banus","benahavis",
  "manilva","casares","ojen","monda","alora","torre-mar","algarrobo","torrox",
  "competa","frigiliana",
  "sevilla","dos-hermanas","alcala-guadaira","utrera","mairena-aljarafe","ecija",
  "la-rinconada","carmona","coria-rio","tomares","bormujos","gines","camas",
  "lebrija","moron-frontera","osuna","marchena",
  "granada","motril","armilla","almunecar","loja","baza","guadix","santa-fe",
  "maracena","las-gabias","monachil","salobrena","la-herradura","orgiva","lanjaron",
  "cordoba","lucena","puente-genil","montilla","priego-cordoba","cabra","palma-rio",
  "baena","pozoblanco",
  "cadiz","jerez-frontera","algeciras","san-fernando","el-puerto-santa-maria",
  "chiclana-frontera","sanlucar-barrameda","la-linea-concepcion","rota","puerto-real",
  "arcos-frontera","tarifa","conil-frontera",
  "almeria","el-ejido","roquetas-mar","nijar","aguadulce","adra","vera","mojacar",
  "garrucha","carboneras",
  "huelva","lepe","almonte","isla-cristina","ayamonte","moguer","punta-umbria","matalascanas",
  "jaen","linares","andujar","ubeda","baeza","martos","alcala-real",
  "valencia","torrent","gandia","paterna","sagunto","mislata","burjassot","ontinyent",
  "aldaia","manises","alzira","xativa","oliva","denia","javea","calpe","altea",
  "benidorm","cullera","sueca",
  "alicante","elche","torrevieja","orihuela","san-vicente-raspeig","el-campello",
  "santa-pola","guardamar-segura","pilar-horadada","moraira","benissa","teulada",
  "alfaz-pi","la-nucia","villajoyosa",
  "castellon-plana","vila-real","burriana","vinaros","benicarlo","onda","benicassim",
  "oropesa-mar","peniscola",
  "bilbao","barakaldo","getxo","portugalete","santurtzi","basauri","durango","ermua",
  "eibar","gernika-lumo","bermeo",
  "san-sebastian","irun","errenteria","zarautz","hondarribia","tolosa",
  "vitoria-gasteiz","llodio",
  "a-coruna","santiago-compostela","ferrol","naron","oleiros","arteixo","carballo",
  "vigo","pontevedra","vilagarcia-arousa","redondela","cangas","sanxenxo","o-grove",
  "ourense","lugo","monforte-lemos",
  "murcia","cartagena","lorca","molina-segura","alcantarilla","mazarron","aguilas",
  "cieza","torre-pacheco","san-javier","san-pedro-pinatar","los-alcazares","la-manga","archena",
  "zaragoza","calatayud","utebo","ejea-caballeros",
  "huesca","monzon","barbastro","jaca",
  "teruel","alcaniz",
  "palma-mallorca","calvia","inca","manacor","llucmajor","alcudia","pollenca",
  "soller","andratx","magaluf","santa-ponsa",
  "ibiza","sant-antoni-portmany","santa-eulalia-riu",
  "mahon","ciutadella",
  "las-palmas-gran-canaria","telde","arucas","maspalomas","playa-ingles","puerto-rico",
  "santa-cruz-tenerife","la-laguna","arona","adeje","puerto-cruz","los-cristianos",
  "playa-americas","costa-adeje",
  "valladolid","burgos","salamanca","leon","palencia","zamora","segovia","avila","soria","ponferrada",
  "toledo","albacete","ciudad-real","guadalajara","cuenca","talavera-reina","puertollano","tomelloso",
  "oviedo","gijon","aviles","langreo","mieres","llanes","ribadesella","cangas-onis",
  "santander","torrelavega","castro-urdiales","laredo","santona","noja","comillas","san-vicente-barquera",
  "pamplona","tudela","baranain","burlada","estella-lizarra",
  "logrono","calahorra","arnedo","haro",
  "badajoz","caceres","merida","plasencia","don-benito","almendralejo",
]

export function getCityName(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      if (["de", "del", "la", "las", "los", "el", "en", "y", "a", "o"].includes(word)) return word
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}

export function getProvinceName(slug: string): string {
  const provinceMap: Record<string, string> = {
    barcelona: "Barcelona", "hospitalet-llobregat": "Barcelona", badalona: "Barcelona",
    terrassa: "Barcelona", sabadell: "Barcelona", mataro: "Barcelona",
    madrid: "Madrid", mostoles: "Madrid", "alcala-henares": "Madrid",
    fuenlabrada: "Madrid", leganes: "Madrid", getafe: "Madrid",
    malaga: "Malaga", marbella: "Malaga", mijas: "Malaga",
    fuengirola: "Malaga", torremolinos: "Malaga", benalmadena: "Malaga",
    sevilla: "Sevilla", "dos-hermanas": "Sevilla", granada: "Granada",
    valencia: "Valencia", alicante: "Alicante", bilbao: "Bizkaia",
    "san-sebastian": "Gipuzkoa", zaragoza: "Zaragoza", murcia: "Murcia",
    "palma-mallorca": "Illes Balears", "las-palmas-gran-canaria": "Las Palmas",
    "santa-cruz-tenerife": "Santa Cruz de Tenerife",
    cordoba: "Cordoba", cadiz: "Cadiz", almeria: "Almeria",
    huelva: "Huelva", jaen: "Jaen", girona: "Girona",
    tarragona: "Tarragona", lleida: "Lleida", castellon: "Castellon",
    valladolid: "Valladolid", burgos: "Burgos", salamanca: "Salamanca",
    leon: "Leon", oviedo: "Asturias", santander: "Cantabria",
    pamplona: "Navarra", logrono: "La Rioja", toledo: "Toledo",
    albacete: "Albacete", badajoz: "Badajoz", caceres: "Caceres",
  }
  return provinceMap[slug] || "Espana"
}
