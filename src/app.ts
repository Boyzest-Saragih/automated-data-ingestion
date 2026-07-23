import express, { type Application } from "express";
import ingestionRawDataRouter from "./routes/raw.routes.js";

const app: Application = express();

app.use(express.json());

app.use("/api", ingestionRawDataRouter);

export default app;