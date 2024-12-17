import express from 'express';
import { Router } from 'express';
import * as  stockRouter from '../../controllers/api/stockController';
const router = express.Router();


router.get('/', stockRouter.getAll);
router.get('/:id', stockRouter.getItem);
router.post('/', stockRouter.postItem);
router.put('/:id', stockRouter.putItem);
router.delete('/:id', stockRouter.deleteItem);


export default router;