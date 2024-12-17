import express from 'express';
import { Router } from 'express';
import * as  usersController from '../../controllers/api/usersController';
const router = express.Router();


router.get('/', usersController.getSlash);
router.get('/list', usersController.getAll);
router.get('/:id', usersController.getItem);
router.post('/', usersController.postItem);
router.put('/:id', usersController.putItem);
router.delete('/:id', usersController.deleteItem);


export default router;