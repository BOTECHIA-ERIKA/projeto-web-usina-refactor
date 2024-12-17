import express from 'express';
import { Router } from 'express';
import * as  projectsRouter from '../../controllers/api/projectsRouter';
const router = express.Router();



router.get('/', projectsRouter.getAll);
router.get('/:id', projectsRouter.getItem);
router.post('/', projectsRouter.postItem);
router.put('/:id', projectsRouter.putItem);
router.delete('/:id', projectsRouter.deleteItem);


export default router;