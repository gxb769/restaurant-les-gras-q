import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    title: "Restaurant Les Gras Q – Traditional cuisine in Cons-la-Grandville",
    description:
      "Restaurant Les Gras Q in Cons-la-Grandville. Traditional French cuisine, fresh produce, terrace, wine cellar and reservations.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    menu: "Menu",
    gallery: "Gallery",
    story: "History",
    reviews: "Reviews",
    access: "Access & hours",
    reserve: "Book",
  },
  hero: {
    eyebrow: "Traditional French cuisine",
    title: "Restaurant Les Gras Q",
    text: "In Cons-la-Grandville, Christelle, Gérald and their team serve generous homemade cooking, fresh produce, and the simple pleasure of a proper meal.",
    callBtn: "Call to book",
    menuBtn: "View the menu",
    panelLabel: "From the house",
    panelTitle: "Simple, fresh, welcoming.",
    panelText: "Our menu changes every two months to highlight the seasons and Chef Thomas's work.",
  },
  quick: {
    addressLabel: "Address",
    addressValue: "32 Rue de Longwy, 54870",
    todayLabel: "Today",
    todayText: "Lunch and dinner service depending on the day",
    moodLabel: "Atmosphere",
    moodText: "Terrace, wine cellar, fresh produce",
  },
  experience: {
    eyebrow: "Experience",
    title: "A village restaurant with the soul of a great meal.",
    p1: "Enjoy an evening around diverse, traditional French cuisine in a warm dining room or on the terrace when the weather allows.",
    p2: "The promise is clear: simplicity, warmth, and quality fresh produce served with honesty and generosity.",
    quote: "\"We wish you a wonderful moment…\"",
  },
  team: {
    eyebrow: "The team",
    title: "Faces behind the house.",
    text: "Christelle and Gérald lead the welcome, Thomas sets the pace in the kitchen, and the whole team works around one simple idea: serving an honest, warm and consistent table.",
    members: [
      { name: "Christelle", role: "Welcome and attention to detail" },
      { name: "Gérald", role: "House spirit and hospitality" },
      { name: "Thomas", role: "Cuisine and seasons" },
    ],
  },
  menu: {
    eyebrow: "Living menu",
    title: "Signatures",
    text: "A selection inspired by the house specialties: French cuisine, a wine cellar designed for by-the-glass service, desserts and seasonal suggestions.",
    tabs: {
      all: "All",
      starters: "Starters",
      mains: "Mains",
      desserts: "Desserts",
      wine: "Wine",
    },
    dishes: [
      {
        label: "Suggestion",
        title: "Roasted fresh sea bass",
        text: "A precise, seasonal plate served in the spirit of the house.",
        category: "mains",
        image: "/assets/filet-bar.jpg",
      },
      {
        label: "Cellar",
        title: "Selected glasses",
        text: "A wine cellar designed to accompany the meal without unnecessary ceremony.",
        category: "wine",
        image: "/assets/cave-vin.jpg",
      },
      {
        label: "House",
        title: "Renewed menu",
        text: "Chef Thomas updates the dishes every two months.",
        category: "mains",
        image: "/assets/salle.jpg",
      },
    ],
  },
  features: [
    { title: "House", text: "Fresh produce and traditional cuisine" },
    { title: "Terrace", text: "An outdoor space for gentle evenings" },
    { title: "Private", text: "Private events and group moments" },
    { title: "Handy", text: "Wi-Fi, takeaway, pets welcome" },
  ],
  moment: {
    eyebrow: "Current menu",
    title: "The menu, without opening the PDF.",
    text: "A mobile-friendly version inspired by the house specialties and current spirit. The full PDF remains available for details.",
    button: "Open the full PDF",
    items: [
      { name: "Homemade foie gras", description: "A characterful starter in the traditional spirit of the house.", category: "Starter" },
      { name: "Roasted fresh sea bass", description: "A seasonal suggestion with precise cooking and market-based sides.", category: "Suggestion" },
      { name: "Homemade dessert", description: "A sweet finish to discover according to the current menu.", category: "Dessert" },
      { name: "Wine by the glass", description: "The cellar lets you choose a glass suited to the dish without ordering a full bottle.", category: "Cellar" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Before sitting down",
    text: "A few images of the restaurant and its surroundings: the terrace, the village, the cellar, the plates and the atmosphere guests come back for.",
    tiles: ["Terrace", "Wine cellar", "Suggestion", "Our village", "Welcome"],
  },
  story: {
    eyebrow: "History",
    title: "A name rooted in the village.",
    p1: "In the 19th century, tanners working along the Chiers river used to wipe their greasy hands on the backs of their leather trousers.",
    p2: "That nickname given to the villagers became a tribute: Les Gras Q, a restaurant attached to its place and to the people who shaped it.",
    timeline: [
      { date: "19th c.", text: "The tanners leave their mark on the popular history of Cons-la-Grandville." },
      { date: "Today", text: "Christelle and Gérald welcome guests around traditional cuisine." },
      { date: "Season", text: "The menu changes regularly with the produce and the mood of the moment." },
    ],
  },
  reviews: {
    eyebrow: "Guest reviews",
    title: "What stays with you.",
    text: "Short, useful notes focused on what matters in a restaurant: the welcome, the plate, consistency and the wish to return.",
    items: [
      { text: "\"Very pleasant place, very good food. Great service, very friendly staff.\"", author: "Seb Seb" },
      { text: "\"The dishes are generous and high quality.\"", author: "Thierry Henrion" },
      { text: "\"Very nice restaurant: quality cuisine, friendly service, stylish decor, easy parking.\"", author: "Laurent Trevisanut" },
    ],
    source: "Excerpts from public reviews. Observed Google rating: 4.4/5.",
    sourceLink: "Sluurpy",
  },
  visit: {
    eyebrow: "Booking",
    title: "Access & hours",
    text: "To book, call the restaurant directly. The house accepts common payment methods and offers an accessible, welcoming address for simple meals and private events.",
  },
  hours: {
    title: "Opening hours",
    closed: "Closed",
    days: [
      { name: "Monday", hours: null },
      { name: "Tuesday", hours: "12:00–2:30pm / 7:00–10:00pm" },
      { name: "Wednesday", hours: "12:00–2:30pm / 7:00–10:00pm" },
      { name: "Thursday", hours: "12:00–2:30pm" },
      { name: "Friday", hours: "12:00–2:30pm / 7:00–11:00pm" },
      { name: "Saturday", hours: "12:00–2:30pm / 7:00–11:00pm" },
      { name: "Sunday", hours: "12:00–3:30pm" },
    ],
  },
  contact: {
    title: "Contact",
    services: ["Wheelchair access", "Terrace", "Private events", "Takeaway", "Free Wi-Fi", "Pets welcome"],
    mapLabel: "Open directions",
  },
  private: {
    eyebrow: "Groups & events",
    title: "Planning a meal?",
    text: "For a birthday, team meal, family table or private moment, the easiest way is to call the restaurant so the proposal can be adapted.",
    button: "Discuss the plan",
    points: [
      "Group meals and private events",
      "Possibility to discuss the menu in advance",
      "Warm dining room and terrace depending on weather",
      "Direct contact with the restaurant",
    ],
  },
  faq: {
    eyebrow: "Useful questions",
    title: "Before booking.",
    text: "Quick answers that save searching. For anything specific, a call is still the most efficient option.",
    items: [
      { q: "Should I book?", a: "Yes, booking is recommended, especially on weekends and for group meals." },
      { q: "Is the restaurant wheelchair accessible?", a: "Yes, the restaurant indicates adapted access." },
      { q: "Are pets allowed?", a: "Yes, pets are welcome." },
      { q: "Is takeaway available?", a: "Yes, takeaway is mentioned. Call to confirm current availability." },
    ],
  },
  cta: {
    eyebrow: "See you soon",
    title: "A simple, honest table good enough to become your habit.",
    text: "Book your next lunch, dinner or terrace moment directly by phone.",
    button: "Book now",
  },
  footer: {
    owner: "Restaurant Les Gras Q — Mr and Mrs Collignon",
    address: "32 Rue de Longwy, 54870 Cons-la-Grandville",
    note: "Website created for Les Gras Q.",
  },
  mobile: {
    call: "Call the restaurant",
  },
};

export default en;
