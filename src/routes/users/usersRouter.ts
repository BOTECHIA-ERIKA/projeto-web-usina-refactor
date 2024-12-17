import express, { Router } from 'express';
import * as usersController from '../../controllers/users/usersController';
const router = Router();

router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.post('/recovery', usersController.passwordRecovery);

export default router;