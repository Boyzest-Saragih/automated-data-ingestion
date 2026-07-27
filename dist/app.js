import express, {} from "express";
import cors from "cors";
import ingestionRawDataRouter from "./routes/raw.routes.js";
import DataSourceRouter from "./routes/data-source.routes.js";
import SymbolRouter from "./routes/symbol.route.js";
import ProcessedData from "./routes/processed-data.route.js";
import AuditLog from "./routes/audit-log.route.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
const app = express();
app.use(cors({
    origin: [
        "https://data-ingestion-pipeline.vercel.app",
        "https://data-ingestion-pipeline.vercel.app/",
        "http://localhost:5173/"
    ],
    credentials: true,
}));
// app.use(helmet());
// app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use("/api", ingestionRawDataRouter);
app.use("/api", DataSourceRouter);
app.use("/api", SymbolRouter);
app.use("/api", ProcessedData);
app.use("/api", AuditLog);
export default app;
//# sourceMappingURL=app.js.map