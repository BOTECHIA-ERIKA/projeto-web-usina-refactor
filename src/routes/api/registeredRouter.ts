import express from 'express';
import { Router } from 'express';
import * as  registeredController from '../../controllers/api/registeredController';
const router = express.Router();



router.get('/', registeredController.getAll);
router.get('/:id', registeredController.getItem);
router.post('/', registeredController.postItem);
router.put('/:id', registeredController.putItem);
router.delete('/:id', registeredController.deleteItem);


export default router;