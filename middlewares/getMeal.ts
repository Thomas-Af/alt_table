import { Request, Response, NextFunction } from 'express';
import { Meal } from "../types/meal";
import { meals } from "../db/meal";

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