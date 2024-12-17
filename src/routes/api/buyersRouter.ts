import express from 'express';
import { Router } from 'express';
import * as  buyersController from '../../controllers/api/buyersController';
const router = express.Router();



router.get('/', buyersController.getAll);
router.get('/:id', buyersController.getItem);
router.post('/', buyersController.postItem);
router.put('/:id', buyersController.putItem);
router.delete('/:id', buyersController.deleteItem);


export default router;