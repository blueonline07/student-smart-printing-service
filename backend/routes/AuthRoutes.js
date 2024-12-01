import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();


router.post('', AuthController.login);


export default router;