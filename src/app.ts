import express, { type Application } from "express";
import ingestionRawDataRouter from "./routes/raw.routes.js";
import DataSourceRouter from "./routes/data-source.routes.js";
import SymbolRouter from "./routes/symbol.route.js";
import ProcessedData from "./routes/processed-data.route.js";
import AuditLog from "./routes/audit-log.route.js";

const app: Application = express();

app.use(express.json());

app.use("/api", ingestionRawDataRouter);
app.use("/api", DataSourceRouter);
app.use("/api", SymbolRouter);
app.use("/api", ProcessedData);
app.use("/api", AuditLog);

export default app;
