import express from 'express';
import { Router } from 'express';
import * as  productsController from '../../controllers/api/productsController';
const router = express.Router();


router.get('/', productsController.getAll);
router.get('/:id', productsController.getItem);
router.post('/', productsController.postItem);
router.put('/:id', productsController.putItem);
router.delete('/:id', productsController.deleteItem);


export default router;