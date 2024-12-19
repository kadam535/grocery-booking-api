import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { GroceryItem } from "../entities/GroceryItem";

const itemRepository = AppDataSource.getRepository(GroceryItem);

export const getItems = async (req: Request, res: Response) => {
  const items = await itemRepository.find();
  res.json(items);
};

export const addItem = async (req: Request, res: Response) => {
  const { name, price, description, inventory } = req.body;
  const newItem = itemRepository.create({ name, price, description, inventory });
  await itemRepository.save(newItem);
  res.status(201).json(newItem);
};

export const deleteItem = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  await itemRepository.delete(itemId);
  res.status(204).send();
};

export const updateItem = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  const { name, price, description, inventory } = req.body;
  const item = await itemRepository.findOneBy({ id: itemId });
  
  if (item) {
    item.name = name;
    item.price = price;
    item.description = description;
    item.inventory = inventory;
    await itemRepository.save(item);
    res.status(200).json(item);
  } else {
    res.status(404).send();
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  const { inventory } = req.body;
  
  const item = await itemRepository.findOneBy({ id: itemId });
  
  if (item) {
    item.inventory = inventory;
    await itemRepository.save(item);
    res.status(200).json(item);
  } else {
    res.status(404).send();
  }
};
