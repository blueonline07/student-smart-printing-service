import PrintDetailsController from "../controllers/PrintDetailsController.js";
import express from "express";

const router = express.Router();

router.post("/", PrintDetailsController.create);
router.get("/:order_id", PrintDetailsController.getFromOrderId);

export default router;
