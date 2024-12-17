import express from 'express';
import { Router } from 'express';
import * as  volluntersController from '../../controllers/api/volluntersController';
const router = express.Router();


router.get('/', volluntersController.getAll);
router.get('/:id', volluntersController.getItem);
router.post('/', volluntersController.postItem);
router.put('/:id', volluntersController.putItem);
router.delete('/:id', volluntersController.deleteItem);


export default router;