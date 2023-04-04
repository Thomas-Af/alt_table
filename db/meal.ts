import { Meal, MealType } from "types/meal";

export const meals = new Map<string, Meal>();

meals.set("lapin", {
  name: "lapin",
  description: "Lapin à la moutarde",
  type: MealType.MainDish,
  price: 15,
  quantity: 0
});

meals.set("saumon", {
  name: "saumon",
  description: "Saumon fumé",
  type: MealType.Entrance,
  price: 17,
  quantity: 0
});

meals.set("chips", {
  name: "chips",
  description: "Chips goût barbecue",
  type: MealType.Aperitif,
  price: 2,
  quantity: 10
});

meals.set("gauffre", {
  name: "gauffre",
  description: "Gauffre sucré au chocolat",
  type: MealType.Dessert,
  price: 7,
  quantity: 0
});

meals.set("eau", {
  name: "eau",
  description: "Eau plate",
  type: MealType.Drink,
  price: 1,
  quantity: 0
});
