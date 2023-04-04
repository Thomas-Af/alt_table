import { Request, Response, NextFunction } from 'express';
import { Meal } from "../types/meal";
import { meals } from "../db/meal";


export const addMeal = async (req: Request, res: Response, next: NextFunction) => {
  const meal = req.body as Meal;
  const { name: mealName } = req.params

  if (meal.name == mealName) {
    if (meals.has(meal.name)) {
      return res.status(400).json({ error: 'Ce plat est déjà sur la carte' });
    } else {
      // meals.set(meal.name, meal.quantity);
      meals.set(meal.name, meal);
      return res.status(200).json({ message: 'Le plat a été ajouté' });
    }
  } else {
    return res.status(400).json({ error: 'Il y a une erreur dans la requête' });
  }
};


export const updateMeal = async (req: Request, res: Response, next: NextFunction) => {
  const { quantity: newQuantity, name: mealName, operation} = req.params

  if (meals.has(mealName)) {
    const meal = meals.get(mealName)
    if (operation === 'add') {
      meal.quantity = meal.quantity + +newQuantity
    } else if (operation === 'remove') {
      if (+newQuantity > meal.quantity) {
        return res.status(400).json({ error: "Il n'y a pas assez de plat" });     
      } else {
        meal.quantity = meal.quantity - +newQuantity
      }
    }

    meals.set(mealName, meal);
    return res.status(200).json({meal: meal});
  } else {
    return res.status(400).json({ error: "Le plat n'a pas été trouvé" });
  }
}