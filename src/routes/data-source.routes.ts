import { Router } from "express";
import { DataSourceCtr } from "../controllers/data-source.controller.js";

const router = Router();
const controller = new DataSourceCtr();

router.post("/dataSource", controller.createDataSource);
router.get("/dataSource", controller.getAllDataSources);
router.get("/dataSource/search/:id", controller.getDataSourcesById);
router.get("/dataSource/search", controller.getDataSourcesByName);
router.patch("/dataSource/:id", controller.updateDataSources);

export default router;
