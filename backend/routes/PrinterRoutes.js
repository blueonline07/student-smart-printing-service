import express from 'express';
import {getPrinters} from '../controllers/PrinterController.js';

const router = express.Router();

router.get('/', getPrinters);      // GET /printers

export default router;