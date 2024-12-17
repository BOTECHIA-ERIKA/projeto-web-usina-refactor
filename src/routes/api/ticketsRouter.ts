import express from 'express';
import { Router } from 'express';
import * as  ticketsController from '../../controllers/api/ticketsController';
const router = express.Router();


router.get('/', ticketsController.getAll);
router.get('/:id', ticketsController.getItem);
router.post('/', ticketsController.postItem);
router.put('/:id', ticketsController.putItem);
router.delete('/:id', ticketsController.deleteItem);


export default router;