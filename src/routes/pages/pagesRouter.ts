import express, { Router } from 'express';
import * as pagesController from '../../controllers/pages/pagesController';
const router = Router();

router.get('/projects', pagesController.getPage0);
router.get('/usina', pagesController.getPage1);
router.get('/coletivo', pagesController.getPage2);
router.get('/timeline', pagesController.getPage3);
router.get('/blog', pagesController.getPage4);
router.get('/agenda', pagesController.getPage5);
router.get('/loja', pagesController.getPage6);
router.get('/doar', pagesController.getPage7);
router.get('/apoio-e-patrocinio', pagesController.getPage8);
router.get('/contact', pagesController.getPage9);
router.get('/login', pagesController.getPage10);
router.get('/registration', pagesController.getPage11);
router.get('/recovery', pagesController.getPage12);
export default router;