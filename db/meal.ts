import { Meal, MealType } from "types/meal";

export const meals = new Map<string, Meal>();

meals.set("lapin", {
  name: "lapin",
  description: "Lapin à la moutarde",
  type: MealType.MainDish,
  price: 10,
  quantity: 0
});

meals.set("saumon", {
  name: "saumon",
  description: "Saumon fumé",
  type: MealType.Entrance,
  price: 10,
  quantity: 10
});

meals.set("chips", {
  name: "chips",
  description: "Chips goût barbecue",
  type: MealType.Aperitif,
  price: 10,
  quantity: 0
});
