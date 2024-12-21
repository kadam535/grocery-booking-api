import express from 'express';
import {
  addGroceryItem,
  getAllGroceryItems,
  updateGroceryItem,
  deleteGroceryItem,
} from '../controllers/adminController';

const router = express.Router();

router.post('/admin/items', addGroceryItem);
router.get('/admin/items', getAllGroceryItems);
router.put('/admin/items', updateGroceryItem);
router.delete('/admin/items/:id', deleteGroceryItem);

export default router;