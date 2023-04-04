import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

import { Meal } from "../types/meal";
import { meals } from "../db/meal";

export const order = async (req: Request, res: Response, next: NextFunction) => {

  const mealList = await axios.get(`http://localhost:3000/api/list`);



  return res.status(200).json({meals: mealList});

}