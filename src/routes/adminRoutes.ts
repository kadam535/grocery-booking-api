import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { addItem, deleteItem, updateItem, updateInventory } from "../controllers/itemController";

const router = Router();

// Admin Routes
router.post("/admin/items", authMiddleware, addItem);
router.delete("/admin/items/:id", authMiddleware, deleteItem);
router.put("/admin/items/:id", authMiddleware, updateItem);
router.put("/admin/items/:id/inventory", authMiddleware, updateInventory);

export default router;
