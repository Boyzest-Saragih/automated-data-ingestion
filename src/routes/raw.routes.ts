import { Router } from "express";
import { RawIngestionCtr } from "../controllers/rawIngestionCtr.js";

const router = Router();
const controller = new RawIngestionCtr();

// Trigger Ingestion
router.post("/ingest/yahoo", controller.ingestYahoo);

// Read Raw Data
router.get("/raw", controller.getAllRawData);
router.get("/raw/:id", controller.getRawDataById);

// Update Status & Delete
router.patch("/raw/:id/status", controller.updateStatus);
router.delete("/raw/:id", controller.deleteRawData);

export default router;