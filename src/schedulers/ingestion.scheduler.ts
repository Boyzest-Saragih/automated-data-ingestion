import cron from "node-cron";
import { RawDataIngestionService } from "../services/raw-data-ingestion.service.js";
import { SymbolService } from "../services/symbol.service.js";
import { AuditLogService } from "../services/audit-log.service.js";
import type { FetchOHLCVOptions, ProviderType } from "../types/types.js";

export class IngestionScheduler {
  private dataIngestionService: RawDataIngestionService;
  private symbolService: SymbolService;
  private auditLogService: AuditLogService;

  constructor(
    dataIngestionService = new RawDataIngestionService(),
    symbolService = new SymbolService(),
    auditLogService = new AuditLogService(),
  ) {
    this.dataIngestionService = dataIngestionService;
    this.symbolService = symbolService;
    this.auditLogService = auditLogService;
  }

  public init() {
    console.log("[Scheduler] Inisialisasi Automated Ingestion Scheduler...");

    // 1. Task Realtime (e.g., Binance / Crypto) - Jalan setiap 1 menit
    // Format Cron: Sec(opt) Min Hour Day Month DayOfWeek
    cron.schedule("*/15 * * * *", async () => {
      console.log("[Scheduler] Running 15-Minute Realtime Ingestion...");
      await this.runIngestionJob("binance");
    });

    // 2. Task Daily (e.g., Yahoo / Saham) - Jalan Setiap Hari Jam 07:00 WIB
    cron.schedule("0 7 * * *", async () => {
      console.log("[Scheduler] Running Daily Morning Ingestion...");
      await this.runIngestionJob("yahoo");
    });
  }

  private async runIngestionJob(targetProvider?: ProviderType) {
    try {
      const activeSymbols =
        await this.symbolService.getActiveSymbolsForScheduler();

      if (!activeSymbols || activeSymbols.length === 0) {
        return;
      }

      const targetSymbols = targetProvider
        ? activeSymbols.filter(
            (s) =>
              s.dataSource.provider.toLowerCase() ===
              targetProvider.toLowerCase(),
          )
        : activeSymbols;

      if (targetSymbols.length === 0) return;

      console.log(
        `[Scheduler] Memproses ${targetSymbols.length} symbol untuk provider '${targetProvider || "ALL"}'`,
      );

      let successCount = 0;
      let failCount = 0;

      for (const item of targetSymbols) {
        try {
          await this.dataIngestionService.ingestData(
            item.dataSource.provider as ProviderType,
            item.dataSourceId,
            item.ticker,
            {
              interval: item.defaultInterval as NonNullable<
                FetchOHLCVOptions["interval"]
              >,
            },
          );
          successCount++;
        } catch (error: any) {
          failCount++;
          console.error(
            `[Scheduler] Gagal ingest ${item.ticker}:`,
            error?.message || error,
          );
        }
      }

      await this.auditLogService.logInfo(
        "CRON_INGESTION_RUN",
        "Scheduler",
        `Job ${targetProvider || "ALL"} selesai. Sukses: ${successCount}, Gagal: ${failCount}`,
        {
          provider: targetProvider,
          successCount,
          failCount,
          total: targetSymbols.length,
        },
      );
    } catch (error: any) {
      console.error("[Scheduler] Error fatal pada Cron Job:", error);
      await this.auditLogService.logError(
        "CRON_INGESTION_FATAL",
        "Scheduler",
        `Error fatal pada Scheduler Job '${targetProvider}'`,
        error,
      );
    }
  }
}
