import express from 'express';
import { Router } from 'express';
import * as  galleriesController from '../../controllers/api/galleriesController';
const router = express.Router();



router.get('/', galleriesController.getAll);
router.get('/:id', galleriesController.getItem);
router.post('/', galleriesController.postItem);
router.put('/:id', galleriesController.putItem);
router.delete('/:id', galleriesController.deleteItem);


export default router;