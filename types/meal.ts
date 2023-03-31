export enum MealType {
  Aperitif = 'Apéritif',
  Entrance = 'Entrée',
  MainDish = 'Plat principal',
  Dessert = 'Dessert',
  Drink = 'Boisson',

}

export type Meal = {
  name: string;
  description: string;
  type: MealType;
  price: number;
  quantity: number;
}