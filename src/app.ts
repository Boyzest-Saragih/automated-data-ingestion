import express, { type Application } from "express";
import ingestionRawDataRouter from "./routes/raw.routes.js";
import DataSourceRouter from "./routes/data-source.routes.js"

const app: Application = express();

app.use(express.json());

app.use("/api", ingestionRawDataRouter);
app.use("/api", DataSourceRouter)

export default app;