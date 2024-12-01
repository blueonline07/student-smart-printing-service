import express from 'express';
import PrinterController from '../controllers/PrinterController.js';

const router = express.Router();

router.get('/', PrinterController.getPrinters);      // GET /printers
router.post('/', PrinterController.createPrinter);   // POST /printers
router.put('/:id', PrinterController.updatePrinter);    // PUT /printers
router.delete('/:id', PrinterController.deletePrinter); // DELETE /printers


export default router;