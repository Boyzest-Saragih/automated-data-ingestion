import { Router } from "express";
import { SymbolCtr } from "../controllers/symbol.controller.js";

const router = Router();
const controller = new SymbolCtr();

router.post("/symbol", controller.createSymbol);

router.get("/symbol", controller.getAllSymbols);
router.get("/symbol/:dataSourceId", controller.getSymbolsByDataSource);

router.patch("/symbol/:id", controller.toggleStatus);

export default router;