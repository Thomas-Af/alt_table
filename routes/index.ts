import { Router } from 'express';
import { order } from "../middlewares/order";
import { addMeal, updateMeal } from "../middlewares/meal";
import { getMeals } from "../middlewares/getMeal";

export const routes = (app) => {

  const router = Router();

  router.post('/:name/add', addMeal);
  router.post('/:name/:quantity/:operation/update', updateMeal);

  router.get('/list/:available?', getMeals);

  router.get('/order', order);

  app.use('/api', router);
};
