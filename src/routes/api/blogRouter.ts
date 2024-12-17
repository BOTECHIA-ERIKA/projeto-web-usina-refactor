import express from 'express';
import { Router } from 'express';
import * as  blogController from '../../controllers/api/blogController';
const router = express.Router();



router.get('/', blogController.getAll);
router.get('/:id', blogController.getItem);
router.post('/', blogController.postItem);
router.put('/:id', blogController.putItem);
router.delete('/:id', blogController.deleteItem);


export default router;