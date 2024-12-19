import { Router } from "express";
import { getItems, addItem, deleteItem, updateItem, updateInventory } from "../controllers/itemController";

const router = Router();

// User routes
router.get("/items", getItems);

// Admin routes
router.post("/admin/items", addItem);
router.delete("/admin/items/:id", deleteItem);
router.put("/admin/items/:id", updateItem);
router.put("/admin/items/:id/inventory", updateInventory);

export default router;
