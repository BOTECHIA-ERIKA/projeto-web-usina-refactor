import express, { Router } from "express";
import { authController } from "./../controller/authController.js";
const router = express.Router();

router.get("/", authController.getSlash);


export default router;