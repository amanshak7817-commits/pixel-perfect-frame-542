export const restaurant = {
  name: "Moti Mahal Sun Twilight",
  nameHindi: "मोटी महल सन ट्विलाइट",
  tagline: "Best Multicuisine Restaurant in Greater Noida",
  phone: "087962 77703",
  phoneHref: "tel:08796277703",
  address:
    "Shop No. FF-16 & FF-17, 1st Floor, Sun Twilight Metro Street, Sector-27, near Delta 1 Metro Station, Jaypee Greens, Greater Noida, Uttar Pradesh 201310",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Moti+Mahal+Sun+Twilight+Sector+27+Greater+Noida",
  rating: "4.8",
  reviewCount: "177",
  diningOptions: [
    "Dine-in",
    "Drive-through",
    "No-contact delivery",
    "Online ordering",
  ],
  occasions: [
    "Family dining",
    "Small parties",
    "Birthday celebrations",
    "Kitty parties",
    "Anniversaries",
    "Family gatherings",
    "Office celebrations",
  ],
};

export const reviews = [
  {
    quote:
      "Food is really fantastic and the ambience of restaurants is so beautiful. The service is also very good and respectful.",
    author: "Harsh Rawal",
  },
  {
    quote:
      "Had the Veg Biryani, Kadhai Paneer, and fresh rotis, and everything was absolutely delicious!",
    author: "Gaurav Mittal",
  },
];

export type Dish = {
  name: string;
  note?: string;
  image?: string;
};

export const menuSections: { title: string; items: Dish[] }[] = [
  {
    title: "Starters",
    items: [{ name: "Paneer Tikka" }, { name: "Tandoori Salad" }],
  },
  {
    title: "Main Course",
    items: [
      { name: "Butter Chicken" },
      { name: "Dal Makhani" },
      { name: "Kadhai Paneer" },
    ],
  },
  {
    title: "Rice",
    items: [{ name: "Veg Biryani" }],
  },
  {
    title: "Breads",
    items: [{ name: "Fresh Rotis" }, { name: "Stuffed Mix Kulcha" }],
  },
  {
    title: "Desserts",
    items: [{ name: "Kesar Phirni" }],
  },
];
