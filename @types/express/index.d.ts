namespace Express {
  interface Request {
    meals: { 
      name: string;
      description: string;
      type: MealType;
      price: number;
      quantity: number; }[];
  }
}
