import {
  SymbolRepository,
  type CreateSymbolDto,
} from "../repositories/symbol.repository.js";
import { DataSourceRepository } from "../repositories/data-source.repository.js";
import { AuditLogService } from "./audit-log.service.js";

export class SymbolService {
  private symbolRepo: SymbolRepository;
  private dataSourceRepo: DataSourceRepository;
  private auditLogService: AuditLogService;

  constructor(
    symbolRepo = new SymbolRepository(),
    dataSourceRepo = new DataSourceRepository(),
    auditLogService = new AuditLogService(),
  ) {
    this.symbolRepo = symbolRepo;
    this.dataSourceRepo = dataSourceRepo;
    this.auditLogService = auditLogService;
  }

  async createSymbol(data: CreateSymbolDto) {
    // 1. Validasi: Pastikan DataSource ada dan aktif
    const dataSource = await this.dataSourceRepo.findById(data.dataSourceId);

    if (!dataSource) {
      throw new Error(
        `DataSource dengan ID '${data.dataSourceId}' tidak ditemukan.`,
      );
    }

    if (!dataSource.isActive) {
      throw new Error(
        `Tidak bisa menambahkan symbol. DataSource '${dataSource.name}' sedang non-aktif.`,
      );
    }

    // 2. Simpan Symbol via Repository
    const newSymbol = await this.symbolRepo.create(data);

    // 3. Catat Audit Log
    await this.auditLogService.logSuccess(
      "CREATE_SYMBOL",
      "Symbol",
      `Symbol ${newSymbol.ticker} berhasil didaftarkan pada DataSource ${dataSource.name}`,
      { ticker: newSymbol.ticker, dataSourceId: dataSource.id },
      newSymbol.id,
    );

    return newSymbol;
  }

  async getAllSymbol() {
    return await this.symbolRepo.getAllSymbol();
  }

  async getSymbolsByDataSource(dataSourceId: string) {
    return await this.symbolRepo.findByDataSource(dataSourceId);
  }

  async toggleSymbolStatus(id: string, isActive: boolean) {
    const updated = await this.symbolRepo.updateStatus(id, isActive);

    await this.auditLogService.logInfo(
      "TOGGLE_SYMBOL_STATUS",
      "Symbol",
      `Status symbol ${updated.ticker} diubah menjadi ${isActive ? "ACTIVE" : "INACTIVE"}`,
      { ticker: updated.ticker, isActive },
      updated.id,
    );

    return updated;
  }

  /**
   * Helper Service khusus untuk dipanggil oleh Scheduler / Cron Job
   */
  async getActiveSymbolsForScheduler() {
    return await this.symbolRepo.findActiveSymbolsForIngestion();
  }
}
