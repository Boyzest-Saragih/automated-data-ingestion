import { describe, it, expect, vi, beforeEach } from "vitest";
import { SymbolService } from "../services/symbol.service.js";
import { type CreateSymbolDto } from "../repositories/symbol.repository.js";
import { DataSourceType } from "../generated/prisma/index.js";
import type { ProviderType } from "../types/types.js";

describe("SymbolService", () => {
  let symbolService: SymbolService;
  let mockSymbolRepository: any;
  let mockDataSourceRepository: any;
  let mockAuditLogRepository: any;

  const mockDataSourceRecord = {
    id: "ds-uuid-123",
    name: "Binance Spot Public",
    type: DataSourceType.REST_API,
    provider: "binance" as ProviderType,
    connection: "",
    baseURL: "https://api.binance.com/api/v3",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockSymbolRecord = {
    id: "0001",
    dataSourceId: "ds-uuid-123",
    ticker: "ETHUSDT",
    name: "Ethereum",
    defaultInterval: "15m",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    mockSymbolRepository = {
      create: vi.fn(),
      getAllSymbol: vi.fn(),
      findByDataSource: vi.fn(),
      updateStatus: vi.fn(),
    };
    mockDataSourceRepository = {
      findById: vi.fn(),
    };
    mockAuditLogRepository = {
      logSuccess: vi.fn().mockResolvedValue(true),
      logInfo: vi.fn().mockResolvedValue(true),
      logError: vi.fn().mockResolvedValue(true),
    };

    symbolService = new SymbolService(
      mockSymbolRepository,
      mockDataSourceRepository,
      mockAuditLogRepository,
    );
  });

  describe("createSymbol()", () => {
    it("harus berhasil membuat symbol baru, mengembalikan datanya, dan mencatat audit log success", async () => {
      // Arrange
      mockDataSourceRepository.findById.mockResolvedValue(mockDataSourceRecord);
      mockSymbolRepository.create.mockResolvedValue(mockSymbolRecord);

      const data: CreateSymbolDto = {
        dataSourceId: "ds-uuid-123",
        ticker: "ETHUSDT",
        name: "Ethereum",
        defaultInterval: "15m",
        isActive: true,
      };

      // Act
      const result = await symbolService.createSymbol(data);

      // Assert
      expect(mockDataSourceRepository.findById).toHaveBeenCalledWith("ds-uuid-123");
      expect(mockSymbolRepository.create).toHaveBeenCalledTimes(1);
      expect(mockSymbolRepository.create).toHaveBeenCalledWith(data);
      expect(mockAuditLogRepository.logSuccess).toHaveBeenCalledTimes(1);
      expect(mockAuditLogRepository.logSuccess).toHaveBeenCalledWith(
        "CREATE_SYMBOL",
        "Symbol",
        `Symbol ${mockSymbolRecord.ticker} berhasil didaftarkan pada DataSource ${mockDataSourceRecord.name}`,
        {
          ticker: mockSymbolRecord.ticker,
          dataSourceId: mockDataSourceRecord.id,
        },
        mockSymbolRecord.id,
      );
      expect(result).toEqual(mockSymbolRecord);
    });
  });

  describe("getAllSymbol()", () => {
    it("harus mengembalikan daftar seluruh data symbol", async () => {
      // Arrange
      const mockList = [mockSymbolRecord];
      mockSymbolRepository.getAllSymbol.mockResolvedValue(mockList);

      // Act
      const result = await symbolService.getAllSymbol();

      // Assert
      expect(mockSymbolRepository.getAllSymbol).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockList);
      expect(result).toHaveLength(1);
    });
  });

  describe("getSymbolsByDataSource()", () => {
    it("harus mengembalikan data symbol berdasarkan data source id", async () => {
      // Arrange
      const mockList = [mockSymbolRecord];
      mockSymbolRepository.findByDataSource.mockResolvedValue(mockList);

      // Act
      const result = await symbolService.getSymbolsByDataSource("ds-uuid-123");

      // Assert
      expect(mockSymbolRepository.findByDataSource).toHaveBeenCalledTimes(1);
      expect(mockSymbolRepository.findByDataSource).toHaveBeenCalledWith("ds-uuid-123");
      expect(result).toEqual(mockList);
    });
  });

  describe("toggleSymbolStatus()", () => {
    it("harus memperbarui status isActive symbol dan mencatat audit log info", async () => {
      // Arrange
      const mockUpdateSymbolRecord = { ...mockSymbolRecord, isActive: false };
      mockSymbolRepository.updateStatus.mockResolvedValue(
        mockUpdateSymbolRecord,
      );

      // Act
      const result = await symbolService.toggleSymbolStatus("0001", false);

      // Assert
      expect(mockSymbolRepository.updateStatus).toHaveBeenCalledTimes(1);
      expect(mockSymbolRepository.updateStatus).toHaveBeenCalledWith(
        "0001",
        false,
      );

      expect(mockAuditLogRepository.logInfo).toHaveBeenCalledTimes(1);
      expect(mockAuditLogRepository.logInfo).toHaveBeenCalledWith(
        "TOGGLE_SYMBOL_STATUS",
        "Symbol",
        `Status symbol ${mockUpdateSymbolRecord.ticker} diubah menjadi INACTIVE`,
        { ticker: mockUpdateSymbolRecord.ticker, isActive: false },
        mockUpdateSymbolRecord.id,
      );

      expect(result).toEqual(mockUpdateSymbolRecord);
    });
  });
});