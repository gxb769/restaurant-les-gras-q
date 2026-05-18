import type { Dictionary } from "./fr";

const de: Dictionary = {
  meta: {
    title: "Restaurant Les Gras Q – Traditionelle Küche in Cons-la-Grandville",
    description:
      "Restaurant Les Gras Q in Cons-la-Grandville. Traditionelle französische Küche, frische Produkte, Terrasse, Weinkeller und Reservierungen.",
  },
  nav: {
    home: "Startseite",
    experience: "Erlebnis",
    menu: "Speisekarte",
    gallery: "Galerie",
    story: "Geschichte",
    reviews: "Bewertungen",
    access: "Anfahrt & Öffnungszeiten",
    reserve: "Reservieren",
  },
  hero: {
    eyebrow: "Traditionelle französische Küche",
    title: "Restaurant Les Gras Q",
    text: "In Cons-la-Grandville pflegen Christelle, Gérald und ihr Team eine großzügige Hausmannskost, frische Produkte und die schlichte Kunst eines wirklich guten Moments am Tisch.",
    callBtn: "Anrufen und reservieren",
    menuBtn: "Speisekarte ansehen",
    panelLabel: "Vom Haus",
    panelTitle: "Einfach, frisch, gesellig.",
    panelText: "Unsere Karte wechselt alle zwei Monate, um die Jahreszeiten und die Arbeit von Küchenchef Thomas hervorzuheben.",
  },
  quick: {
    addressLabel: "Adresse",
    addressValue: "32 Rue de Longwy, 54870",
    todayLabel: "Heute",
    todayText: "Mittags- und Abendservice je nach Tag",
    moodLabel: "Atmosphäre",
    moodText: "Terrasse, Weinkeller, frische Produkte",
  },
  experience: {
    eyebrow: "Das Erlebnis",
    title: "Ein Dorfrestaurant mit der Seele eines großen Mahls.",
    p1: "Verbringen Sie einen Abend mit vielseitiger, traditioneller französischer Küche in einem gemütlichen Saal oder auf der Terrasse bei schönem Wetter.",
    p2: "Die Priorität ist klar: Einfachheit, Gemütlichkeit und Qualität frischer Produkte für eine aufrichtige, klare und großzügige Küche.",
    quote: '„Wir wünschen Ihnen einen angenehmen Aufenthalt…“',
  },
  team: {
    eyebrow: "Das Team",
    title: "Gesichter eines Hauses.",
    text: "Christelle und Gérald verantworten die Gastfreundschaft, Thomas gibt den Rhythmus in der Küche vor, und das gesamte Team arbeitet nach einer einfachen Idee: einen echten, herzlichen und beständigen Tisch zu servieren.",
    members: [
      { name: "Christelle", role: "Empfang und Liebe zum Detail" },
      { name: "Gérald", role: "Hausgeist und Gastfreundschaft" },
      { name: "Thomas", role: "Küche und Jahreszeiten" },
    ],
  },
  menu: {
    eyebrow: "Lebendige Karte",
    title: "Die Signaturen",
    text: "Eine Auswahl, inspiriert von den Spezialitäten des Hauses: französische Küche, ein Weinkeller für das glasweise Ausschankkonzept, Desserts und Tagesempfehlungen.",
    tabs: {
      all: "Alle",
      starters: "Vorspeisen",
      mains: "Hauptgänge",
      desserts: "Desserts",
      wine: "Wein",
    },
    dishes: [
      {
        label: "Tagesempfehlung",
        title: "Gebratenes frisches Wolfsbarschfilet",
        text: "Ein präzises, saisonales Gericht im Geiste des Hauses.",
        category: "mains",
        image: "/assets/filet-bar.jpg",
      },
      {
        label: "Weinkeller",
        title: "Ausgewählte Gläser",
        text: "Ein Weinkeller, um das Essen ohne unnötige Zeremonie zu begleiten.",
        category: "wine",
        image: "/assets/cave-vin.jpg",
      },
      {
        label: "Haus",
        title: "Erneuerte Karte",
        text: "Küchenchef Thomas entwickelt die Gerichte alle zwei Monate weiter.",
        category: "mains",
        image: "/assets/salle.jpg",
      },
    ],
  },
  features: [
    { title: "Haus", text: "Frische Produkte und traditionelle Küche" },
    { title: "Terrasse", text: "Ein Außenbereich für laue Abende" },
    { title: "Privat", text: "Privatveranstaltungen und Gruppenmomente" },
    { title: "Praktisch", text: "WLAN, Mitnahme, Haustiere erlaubt" },
  ],
  moment: {
    eyebrow: "Aktuelle Karte",
    title: "Die Karte, ohne die PDF zu öffnen.",
    text: "Eine mobilfreundliche Version, inspiriert von den Spezialitäten und dem aktuellen Geist des Hauses. Die vollständige PDF bleibt für Details verfügbar.",
    button: "Vollständige PDF öffnen",
    items: [
      { name: "Hausgemachte Foie gras", description: "Eine charaktervolle Vorspeise im traditionellen Geiste des Hauses.", category: "Vorspeise" },
      { name: "Gebratenes frisches Wolfsbarschfilet", description: "Saisonale Empfehlung, präzise Garung und marktfrische Beilagen.", category: "Empfehlung" },
      { name: "Hausgemachtes Dessert", description: "Ein süßer Abschluss, je nach aktueller Karte zu entdecken.", category: "Dessert" },
      { name: "Weinbegleitung glasweise", description: "Der Weinkeller ermöglicht die Wahl eines zum Gericht passenden Glases.", category: "Wein" },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Bevor Sie Platz nehmen",
    text: "Einige Bilder des Restaurants und seiner Umgebung: die Terrasse, das Dorf, der Weinkeller, die Teller und diese Atmosphäre, in die man gerne zurückkehrt.",
    tiles: ["Terrasse", "Weinkeller", "Empfehlung", "Unser Dorf", "Empfang"],
  },
  story: {
    eyebrow: "Die Geschichte",
    title: "Ein Name, der das Dorf trägt.",
    p1: "Im 19. Jahrhundert hatten die am Ufer der Chiers niedergelassenen Gerber die Gewohnheit, ihre fettigen Hände an der Rückseite ihrer Lederhosen abzuwischen.",
    p2: "Dieser Spitzname der Dorfbewohner wurde zur Hommage: Les Gras Q, eine Adresse, die mit ihrem Land und denen verbunden ist, die es geprägt haben.",
    timeline: [
      { date: "19. Jh.", text: "Die Gerber prägen die volkstümliche Geschichte von Cons-la-Grandville." },
      { date: "Heute", text: "Christelle und Gérald empfangen Gäste rund um traditionelle Küche." },
      { date: "Saison", text: "Die Karte wechselt regelmäßig im Rhythmus der Produkte und Wünsche." },
    ],
  },
  reviews: {
    eyebrow: "Gästebewertungen",
    title: "Was im Gedächtnis bleibt.",
    text: "Kurze, nützliche Rückmeldungen, die sich auf das Wesentliche konzentrieren: Empfang, Teller, Beständigkeit und Lust wiederzukommen.",
    items: [
      { text: '„Sehr angenehmer Ort, sehr gutes Essen. Toller Service, sehr sympathisches Personal."', author: "Seb Seb" },
      { text: '„Die Gerichte sind reichhaltig und qualitativ."', author: "Thierry Henrion" },
      { text: '„Sehr schönes Restaurant: hochwertige Küche, sympathischer Service, modernes Dekor, einfaches Parken."', author: "Laurent Trevisanut" },
    ],
    source: "Auszüge aus öffentlichen Bewertungen. Beobachtete Google-Note: 4,4/5.",
    sourceLink: "Sluurpy",
  },
  visit: {
    eyebrow: "Reservierung",
    title: "Anfahrt & Öffnungszeiten",
    text: "Für eine Reservierung rufen Sie das Restaurant direkt an. Das Haus akzeptiert gängige Zahlungsmethoden und bietet eine zugängliche, gemütliche Adresse für einfache Mahlzeiten und Privatveranstaltungen.",
  },
  hours: {
    title: "Öffnungszeiten",
    closed: "Geschlossen",
    days: [
      { name: "Montag", hours: null },
      { name: "Dienstag", hours: "12:00–14:30 / 19:00–22:00" },
      { name: "Mittwoch", hours: "12:00–14:30 / 19:00–22:00" },
      { name: "Donnerstag", hours: "12:00–14:30" },
      { name: "Freitag", hours: "12:00–14:30 / 19:00–23:00" },
      { name: "Samstag", hours: "12:00–14:30 / 19:00–23:00" },
      { name: "Sonntag", hours: "12:00–15:30" },
    ],
  },
  contact: {
    title: "Kontakt",
    services: ["Rollstuhlgerecht", "Terrasse", "Privatveranstaltungen", "Mitnahme", "Kostenloses WLAN", "Haustiere erlaubt"],
    mapLabel: "Route öffnen",
  },
  private: {
    eyebrow: "Gruppen & Veranstaltungen",
    title: "Eine Mahlzeit zu organisieren?",
    text: "Für einen Geburtstag, ein Teamessen, einen Familientisch oder einen privaten Moment ist es am einfachsten, das Restaurant anzurufen, um das Angebot anzupassen.",
    button: "Projekt besprechen",
    points: [
      "Gruppenessen und Privatveranstaltungen",
      "Möglichkeit, das Menü im Voraus zu besprechen",
      "Gemütlicher Saal und Terrasse je nach Wetter",
      "Direkter Kontakt mit dem Restaurant",
    ],
  },
  faq: {
    eyebrow: "Nützliche Fragen",
    title: "Vor der Reservierung.",
    text: "Schnelle Antworten, die die Suche ersparen. Für besondere Fälle ist ein Anruf am effizientesten.",
    items: [
      { q: "Muss ich reservieren?", a: "Ja, eine Reservierung wird empfohlen, besonders am Wochenende und für Gruppen." },
      { q: "Ist das Restaurant rollstuhlgerecht?", a: "Ja, das Etablissement gibt an, einen angepassten Zugang zu bieten." },
      { q: "Sind Haustiere erlaubt?", a: "Ja, Haustiere sind erlaubt." },
      { q: "Ist Mitnahme möglich?", a: "Ja, der Mitnahmeservice wird erwähnt. Rufen Sie an, um die aktuelle Verfügbarkeit zu bestätigen." },
    ],
  },
  cta: {
    eyebrow: "Bis bald",
    title: "Ein einfacher, ehrlicher Tisch, gut genug um zur Gewohnheit zu werden.",
    text: "Reservieren Sie Ihr nächstes Mittag-, Abendessen oder Ihren Terrassenmoment direkt per Telefon.",
    button: "Jetzt reservieren",
  },
  footer: {
    owner: "Restaurant Les Gras Q — Herr und Frau Collignon",
    address: "32 Rue de Longwy, 54870 Cons-la-Grandville",
    note: "Website erstellt für Les Gras Q.",
  },
  mobile: {
    call: "Restaurant anrufen",
  },
};

export default de;
