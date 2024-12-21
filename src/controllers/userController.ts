import { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { GroceryItem } from '../models/GroceryItem';

const getAvailableGroceryItems = async (req: Request, res: Response) => {
  const items = await DataSource.getRepository(GroceryItem).find();
  res.status(200).send(items);
};

export { getAvailableGroceryItems };