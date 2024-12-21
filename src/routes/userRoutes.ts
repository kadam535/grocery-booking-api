import express from 'express';
import { getAvailableGroceryItems } from '../controllers/userController';

const router = express.Router();

router.get('/user/items', getAvailableGroceryItems);

export default router;