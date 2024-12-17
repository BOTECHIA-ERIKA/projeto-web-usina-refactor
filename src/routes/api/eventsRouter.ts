import express from 'express';
import { Router } from 'express';
import * as  eventsController from '../../controllers/api/eventsController';
const router = express.Router();



router.get('/', eventsController.getAll);
router.get('/:id', eventsController.getItem);
router.post('/', eventsController.postItem);
router.put('/:id', eventsController.putItem);
router.delete('/:id', eventsController.deleteItem);


export default router;