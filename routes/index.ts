import { Router } from 'express';
import { addMeal, updateMeal, getMeals } from "../middlewares";


export const routes = (app) => {

  const router = Router();

  router.post('/:name/add', addMeal);
  router.post('/:name/:quantity/:operation/update', updateMeal);

  router.get('/list/:available?', getMeals);

  app.use('/api', router);
};
