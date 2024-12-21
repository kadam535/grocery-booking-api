import { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { GroceryItem } from '../models/GroceryItem';

const addGroceryItem = async (req: Request, res: Response) => {
  const { name, price, inventory } = req.body;
  const item = new GroceryItem();
  item.name = name;
  item.price = price;
  item.inventory = inventory;

  const result = await DataSource.getRepository(GroceryItem).save(item);
  res.status(201).send(result);
};

const getAllGroceryItems = async (req: Request, res: Response) => {
  const items = await DataSource.getRepository(GroceryItem).find();
  res.status(200).send(items);
};

const updateGroceryItem = async (req: Request, res: Response) => {
  const { id, name, price, inventory } = req.body;
  const item = await DataSource.getRepository(GroceryItem).findOneBy({ id });
  
  if (!item) {
    res.status(404).send({ message: 'Item not found' });
    return;
  }
  
  item.name = name;
  item.price = price;
  item.inventory = inventory;
  
  const result = await DataSource.getRepository(GroceryItem).save(item);
  res.status(200).send(result);
};

const deleteGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DataSource.getRepository(GroceryItem).delete(id);
  
  if (result.affected === 0) {
    res.status(404).send({ message: 'Item not found' });
  } else {
    res.status(204).send();
  }
};

export { addGroceryItem, getAllGroceryItems, updateGroceryItem, deleteGroceryItem };