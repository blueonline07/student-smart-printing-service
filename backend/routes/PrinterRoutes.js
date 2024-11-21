import express from 'express';
import {getPrinters, createPrinter, updatePrinter, deletePrinter} from '../controllers/PrinterController.js';

const router = express.Router();

router.get('/', getPrinters);      // GET /printers
router.post('/', createPrinter);   // POST /printers
router.put('/:id', updatePrinter);    // PUT /printers
router.delete('/:id', deletePrinter); // DELETE /printers


export default router;