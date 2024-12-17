import express from 'express';
import { Router } from 'express';
import * as  adminController from '../../controllers/api/adminController';
const router = express.Router();



router.get('/', adminController.getAll);
router.get('/:id', adminController.getItem);
router.post('/', adminController.postItem);
router.put('/:id', adminController.putItem);
router.delete('/:id', adminController.deleteItem);


export default router;