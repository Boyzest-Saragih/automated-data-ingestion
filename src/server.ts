import app from "./app.js";
import dotenv from "dotenv";
import { IngestionScheduler } from "./schedulers/ingestion.scheduler.js";

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Ingestion API running on port http://localhost:${PORT}`);
  const scheduler = new IngestionScheduler();
  scheduler.init();
});
