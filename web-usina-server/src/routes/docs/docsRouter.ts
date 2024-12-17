import express from 'express';
import { Router } from 'express';
import * as  docsController from '../../controllers/docs/docsController';
const router = express.Router();


router.get('/', docsController.getDocsCollection);

export default router;