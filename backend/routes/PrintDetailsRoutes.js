import PrintDetailsController from "../controllers/PrintDetailsController.js";
import express from "express";

const router = express.Router();

router.post("/", PrintDetailsController.create);
router.get("/:order_id", PrintDetailsController.getFromOrderId);
router.put("/:order_id", PrintDetailsController.update);
router.delete("/:order_id", PrintDetailsController.delete);

export default router;
