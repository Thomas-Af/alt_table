import { Request, Response, NextFunction } from 'express';

import { Meal } from "../types/meal";
import { meals } from "../db/meal";


export const addMeal = async (req: Request, res: Response, next: NextFunction) => {
  const meal = req.body as Meal;
  const { name: mealName } = req.params

  if (meal.name == mealName) {
    if (meals.has(meal.name)) {
      return res.status(400).json({ error: 'Already have this dish' });
    } else {
      // meals.set(meal.name, meal.quantity);
      meals.set(meal.name, meal);
      return res.status(200).json({ message: 'Product add' });
    }
  } else {
    return res.status(400).json({ error: 'Error in the request' });
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
        return res.status(400).json({ error: 'Not enough meal' });     
      } else {
        meal.quantity = meal.quantity - +newQuantity
      }
    }

    meals.set(mealName, meal);
    return res.status(200).json({meal: meal});
  } else {
    return res.status(400).json({ error: 'Meal Not found' });
  }
}

export const getMeals = async (req: Request, res: Response, next: NextFunction) => {

  const { available } = req.params


  const getAllMeals = Array.from(
    meals,
    ([name, meal]) => ({ name, ...meal } as Meal),
  );

  var getMealsAvailable = Array.from(
    meals,
    ([name, meal]) => ({ name, ...meal } as Meal)
    )
    
    getMealsAvailable = getMealsAvailable.filter(meal => meal.quantity > 0)


  if (available) {
    return res.status(200).json({meal: getMealsAvailable});
  } else {
    return res.status(200).json({meal: getAllMeals});
  }

}