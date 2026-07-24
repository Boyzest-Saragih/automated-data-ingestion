import { Router } from "express";
import { RawIngestionCtr } from "../controllers/raw-ingestion.controller.js";

const router = Router();
const controller = new RawIngestionCtr();

router.post("/ingestRawData", controller.ingestData);

router.get("/raw", controller.getAllRawData);
router.get("/raw/:id", controller.getRawDataById);

router.patch("/raw/:id", controller.updateStatus);

export default router;