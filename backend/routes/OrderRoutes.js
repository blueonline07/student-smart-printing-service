import express from 'express';

import OrderController from '../controllers/OrderController.js';

const router = express.Router();


router.get('/', OrderController.getOrders);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);

export default router;