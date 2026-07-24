import { Router } from "express";
import { DataSourceCtr } from "../controllers/data-source.controller.js";

const router = Router();
const controller = new DataSourceCtr();

router.post("/dataSource", controller.createDataSource);

export default router;
