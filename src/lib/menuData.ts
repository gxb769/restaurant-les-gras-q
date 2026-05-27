// Full restaurant menu — edit prices and dishes here directly.
// Dish names stay in French as they appear on the physical menu.

export type MenuItem = {
  name: string;
  detail: string;
  price: string;
  signature?: boolean;
  photo?: string;
};

export type MenuCategory = {
  id: "formules" | "entrees" | "plats" | "desserts" | "boissons";
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "formules",
    items: [
      {
        name: "Formule midi",
        detail: "Entrée + Plat  ou  Plat + Dessert",
        price: "15€",
      },
      {
        name: "Menu complet",
        detail: "Entrée + Plat + Dessert — café offert",
        price: "22€",
      },
    ],
  },
  {
    id: "entrees",
    items: [
      {
        name: "Foie gras maison",
        detail: "Confiture de figues et toast brioche",
        price: "14€",
        signature: true,
        photo: "/assets/dish-entree.webp",
      },
      {
        name: "Velouté de légumes de saison",
        detail: "Légumes du marché, crème fraîche, huile de truffe",
        price: "8€",
      },
      {
        name: "Salade de chèvre chaud",
        detail: "Toast de chèvre, noix, roquette et vinaigrette maison",
        price: "10€",
      },
      {
        name: "Assiette de charcuterie",
        detail: "Sélection artisanale de la région",
        price: "12€",
      },
    ],
  },
  {
    id: "plats",
    items: [
      {
        name: "Filet de bar frais rôti",
        detail: "Légumes de saison, beurre blanc au citron",
        price: "22€",
        signature: true,
        photo: "/assets/dish-bar.webp",
      },
      {
        name: "Joue de bœuf braisée 7h",
        detail: "Purée maison, jus de cuisson réduit au vin rouge",
        price: "20€",
        signature: true,
        photo: "/assets/dish-boeuf.webp",
      },
      {
        name: "Côte de porc fermière",
        detail: "Porc élevé en plein air, gratin dauphinois",
        price: "18€",
      },
      {
        name: "Blanquette de veau",
        detail: "Recette traditionnelle, riz pilaf, champignons de Paris",
        price: "19€",
      },
    ],
  },
  {
    id: "desserts",
    items: [
      {
        name: "Dessert maison du jour",
        detail: "À découvrir selon la carte du moment",
        price: "7€",
        signature: true,
        photo: "/assets/dish-dessert.webp",
      },
      {
        name: "Tarte aux fruits de saison",
        detail: "Sur pâte sucrée beurre, crème légère fouettée",
        price: "7€",
      },
      {
        name: "Crème brûlée à la vanille",
        detail: "Recette classique, caramélisée à la minute",
        price: "7€",
      },
    ],
  },
  {
    id: "boissons",
    items: [
      {
        name: "Verre de la cave",
        detail: "Sélection du moment selon le plat",
        price: "3–6€",
      },
      {
        name: "Café, thé ou infusion",
        detail: "",
        price: "2€",
      },
      {
        name: "Eau minérale (75 cl)",
        detail: "Plate ou gazeuse",
        price: "2,50€",
      },
    ],
  },
];
