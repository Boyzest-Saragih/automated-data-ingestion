import { Router } from "express";
import { ProcessedDataCtr } from "../controllers/processed-data.controller.js";

const router = Router();
const controller = new ProcessedDataCtr();


// Read Raw Data
router.get("/processedData", controller.getCandles);
router.get("/processedData/latest", controller.getLatestCandle);

export default router;