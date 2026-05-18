const fr = {
  meta: {
    title: "Restaurant Les Gras Q – Cuisine traditionnelle à Cons-la-Grandville",
    description:
      "Restaurant Les Gras Q à Cons-la-Grandville. Cuisine française traditionnelle, produits frais, terrasse, cave à vin et réservations.",
  },
  nav: {
    home: "Accueil",
    experience: "L'expérience",
    menu: "Carte",
    gallery: "Galerie",
    story: "Histoire",
    reviews: "Avis",
    access: "Accès & horaires",
    reserve: "Réserver",
  },
  hero: {
    eyebrow: "Cuisine française traditionnelle",
    title: "Restaurant Les Gras Q",
    text: "À Cons-la-Grandville, Christelle, Gérald et leur équipe cultivent une cuisine de maison généreuse, des produits frais et l'art simple d'un vrai bon moment à table.",
    callBtn: "Appeler pour réserver",
    menuBtn: "Voir le menu",
    panelLabel: "Le mot de la maison",
    panelTitle: "Simple, frais, convivial.",
    panelText:
      "Notre carte change tous les deux mois pour mettre en valeur les saisons et le travail du chef Thomas.",
  },
  quick: {
    addressLabel: "Adresse",
    addressValue: "32 Rue de Longwy, 54870",
    todayLabel: "Aujourd'hui",
    todayText: "Service midi et soir selon jour",
    moodLabel: "Ambiance",
    moodText: "Terrasse, cave à vin, produits frais",
  },
  experience: {
    eyebrow: "L'expérience",
    title: "Une maison de village avec l'âme d'un grand repas.",
    p1: "Passez une soirée autour d'une cuisine française diversifiée et traditionnelle, dans une salle chaleureuse ou sur la terrasse aux beaux jours.",
    p2: "Ici, la priorité reste limpide : simplicité, convivialité et qualité des produits frais pour servir une cuisine sincère, nette et généreuse.",
    quote: "« Nous vous souhaitons un agréable moment… »",
  },
  team: {
    eyebrow: "L'équipe",
    title: "Des visages, une maison.",
    text: "Christelle et Gérald signent l'accueil, Thomas donne le rythme en cuisine, et toute l'équipe travaille autour d'une idée simple : servir une table vraie, chaleureuse et régulière.",
    members: [
      { name: "Christelle", role: "Accueil et sens du détail" },
      { name: "Gérald", role: "Maison et convivialité" },
      { name: "Thomas", role: "Cuisine et saisons" },
    ],
  },
  menu: {
    eyebrow: "Carte vivante",
    title: "Les signatures",
    text: "Une sélection inspirée des spécialités de la maison : cuisine française, cave à vin pensée pour le service au verre, desserts et suggestions selon les arrivages.",
    tabs: {
      all: "Tout",
      starters: "Entrées",
      mains: "Plats",
      desserts: "Desserts",
      wine: "Cave",
    },
    dishes: [
      {
        label: "Suggestion",
        title: "Filet de bar frais rôti",
        text: "Une assiette de saison, précise et lumineuse, servie dans l'esprit maison.",
        category: "mains",
        image: "/assets/filet-bar.jpg",
      },
      {
        label: "Cave",
        title: "Verres choisis",
        text: "Une cave pensée pour accompagner le repas sans cérémonial inutile.",
        category: "wine",
        image: "/assets/cave-vin.jpg",
      },
      {
        label: "Maison",
        title: "Carte renouvelée",
        text: "Le chef Thomas fait évoluer les plats tous les deux mois.",
        category: "mains",
        image: "/assets/salle.jpg",
      },
    ],
  },
  features: [
    { title: "Maison", text: "Produits frais et cuisine traditionnelle" },
    { title: "Terrasse", text: "Un espace extérieur pour les soirées douces" },
    { title: "Privé", text: "Événements privés et moments de groupe" },
    { title: "Pratique", text: "Wi-Fi, à emporter, animaux autorisés" },
  ],
  moment: {
    eyebrow: "Menu du moment",
    title: "La carte, sans ouvrir le PDF.",
    text: "Une version lisible directement sur téléphone, inspirée des spécialités et de l'esprit actuel de la maison. Le PDF complet reste disponible pour les détails.",
    button: "Ouvrir le PDF complet",
    items: [
      {
        name: "Foie gras maison",
        description: "Une entrée de caractère, dans l'esprit traditionnel de la maison.",
        category: "Entrée",
      },
      {
        name: "Filet de bar frais rôti",
        description: "Suggestion de saison, cuisson nette et accompagnements selon arrivage.",
        category: "Suggestion",
      },
      {
        name: "Dessert maison",
        description: "Une note douce pour finir le repas, à découvrir selon la carte du moment.",
        category: "Dessert",
      },
      {
        name: "Accord au verre",
        description: "La cave permet de choisir un verre adapté au plat, sans commander une bouteille entière.",
        category: "Cave",
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Avant de passer à table",
    text: "Quelques images de la maison et de son environnement : la terrasse, le village, la cave, les assiettes et cette atmosphère de restaurant où l'on revient volontiers.",
    tiles: ["Terrasse", "Cave à vin", "Suggestion", "Notre village", "Accueil"],
  },
  story: {
    eyebrow: "L'histoire",
    title: "Un nom qui porte le village.",
    p1: "Au XIXe siècle, les tanneurs installés sur les bords de la Chiers avaient pour habitude d'essuyer leurs mains graisseuses sur le fond de leurs pantalons de cuir.",
    p2: "Ce surnom donné aux villageois est devenu une enseigne hommage : Les Gras Q, une adresse attachée à son territoire et à celles et ceux qui l'ont façonné.",
    timeline: [
      { date: "XIXe", text: "Les tanneurs marquent l'histoire populaire de Cons-la-Grandville." },
      { date: "Aujourd'hui", text: "Christelle et Gérald accueillent autour d'une cuisine traditionnelle." },
      { date: "Saison", text: "La carte change régulièrement, au rythme des produits et des envies." },
    ],
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Ce que l'on retient.",
    text: "Des retours courts, utiles, centrés sur ce qui compte pour un restaurant : accueil, assiette, régularité et envie de revenir.",
    items: [
      { text: "« Lieu très agréable, cuisine très bonne. Service top, personnel très sympathique. »", author: "Seb Seb" },
      { text: "« Les plats sont copieux et de qualité. »", author: "Thierry Henrion" },
      { text: "« Très chouette restaurant : cuisine de belle qualité, service sympathique, décor branché, parking facile. »", author: "Laurent Trevisanut" },
    ],
    source: "Extraits d'avis publics. Note Google observée : 4,4/5.",
    sourceLink: "Sluurpy",
  },
  visit: {
    eyebrow: "Réservation",
    title: "Accès & horaires",
    text: "Pour réserver, appelez directement le restaurant. La maison accepte les paiements courants et propose une adresse accessible, conviviale et adaptée aux repas simples comme aux événements privés.",
  },
  hours: {
    title: "Horaires",
    closed: "Fermé",
    days: [
      { name: "Lundi", hours: null },
      { name: "Mardi", hours: "12:00–14:30 / 19:00–22:00" },
      { name: "Mercredi", hours: "12:00–14:30 / 19:00–22:00" },
      { name: "Jeudi", hours: "12:00–14:30" },
      { name: "Vendredi", hours: "12:00–14:30 / 19:00–23:00" },
      { name: "Samedi", hours: "12:00–14:30 / 19:00–23:00" },
      { name: "Dimanche", hours: "12:00–15:30" },
    ],
  },
  contact: {
    title: "Contact",
    services: ["Accessible PMR", "Terrasse", "Événements privés", "À emporter", "Wi-Fi gratuit", "Animaux autorisés"],
    mapLabel: "Ouvrir l'itinéraire",
  },
  private: {
    eyebrow: "Groupes & événements",
    title: "Un repas à organiser ?",
    text: "Pour un anniversaire, un repas d'équipe, une table familiale ou un moment privé, le plus simple reste d'appeler la maison afin d'adapter la proposition.",
    button: "Parler du projet",
    points: [
      "Repas de groupe et événements privés",
      "Possibilité d'échanger sur le menu à l'avance",
      "Salle chaleureuse et terrasse selon météo",
      "Contact direct avec le restaurant",
    ],
  },
  faq: {
    eyebrow: "Questions utiles",
    title: "Avant de réserver.",
    text: "Les réponses rapides qui évitent de chercher. Pour tout cas particulier, un appel reste le plus efficace.",
    items: [
      { q: "Faut-il réserver ?", a: "Oui, c'est recommandé, surtout le week-end et pour les repas de groupe." },
      { q: "Le restaurant est-il accessible PMR ?", a: "Oui, l'établissement indique proposer un accès adapté." },
      { q: "Les animaux sont-ils acceptés ?", a: "Oui, les animaux sont autorisés." },
      { q: "Peut-on commander à emporter ?", a: "Oui, le service à emporter est mentionné. Appelez pour confirmer les disponibilités du moment." },
    ],
  },
  cta: {
    eyebrow: "À bientôt",
    title: "Une table simple, vraie, et assez bonne pour devenir votre habitude.",
    text: "Réservez votre prochain déjeuner, dîner ou moment en terrasse directement par téléphone.",
    button: "Réserver maintenant",
  },
  footer: {
    owner: "Restaurant Les Gras Q — M et Mme Collignon",
    address: "32 Rue de Longwy, 54870 Cons-la-Grandville",
    note: "Site réalisé pour Les Gras Q.",
  },
  mobile: {
    call: "Appeler le restaurant",
  },
};

export default fr;
export type Dictionary = typeof fr;
