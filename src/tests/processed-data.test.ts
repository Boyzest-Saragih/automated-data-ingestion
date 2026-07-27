import { describe, it, expect, vi, beforeEach } from "vitest";
import { ProcessedDataService } from "../services/processed-data.service.js";
import { RawDataStatus } from "../generated/prisma/index.js";

describe("ProcessedDataService", () => {
  let processedDataService: ProcessedDataService;
  let mockRawRepository: any;
  let mockProcessedDataRepository: any;
  let mockAuditLogService: any;

  const mockRawRecord = {
    id: "raw-uuid-123",
    dataSourceId: "ds-uuid-123",
    payload: {
      symbol: "BTCUSDT",
      currency: "USDT",
      granularity: "1d",
      candles: [
        {
          timestamp: "2026-01-01T00:00:00.000Z",
          open: 40000,
          high: 41000,
          low: 39500,
          close: 40500,
          volume: 100,
        },
      ],
    },
    status: RawDataStatus.PENDING,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockProcessedCandle = {
    id: "proc-uuid-123",
    rawDataId: "raw-uuid-123",
    symbol: "BTCUSDT",
    granularity: "1d",
    timestamp: new Date("2026-01-01T00:00:00.000Z"),
    open: 40000,
    high: 41000,
    low: 39500,
    close: 40500,
    volume: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    mockRawRepository = {
      findById: vi.fn(),
      updateStatus: vi.fn(),
    };
    mockProcessedDataRepository = {
      upsertMany: vi.fn(),
      findCandles: vi.fn(),
      findLatestCandle: vi.fn(),
    };
    mockAuditLogService = {
      logSuccess: vi.fn().mockResolvedValue(true),
      logError: vi.fn().mockResolvedValue(true),
    };

    processedDataService = new ProcessedDataService(
      mockRawRepository,
      mockProcessedDataRepository,
      mockAuditLogService,
    );
  });

  describe("processRawData()", () => {
    it("harus berhasil memproses RawData, meng-upsert candle, meng-update status RawData menjadi SUCCESS, dan mencatat audit log success", async () => {
      // Arrange
      mockRawRepository.findById.mockResolvedValue(mockRawRecord);
      mockProcessedDataRepository.upsertMany.mockResolvedValue([
        mockProcessedCandle,
      ]);
      mockRawRepository.updateStatus.mockResolvedValue(mockRawRecord);

      // Act
      const result = await processedDataService.processRawData("raw-uuid-123");

      // Assert
      expect(mockRawRepository.findById).toHaveBeenCalledWith("raw-uuid-123");
      expect(mockProcessedDataRepository.upsertMany).toHaveBeenCalledWith([
        {
          rawDataId: "raw-uuid-123",
          symbol: "BTCUSDT",
          granularity: "1d",
          timestamp: new Date("2026-01-01T00:00:00.000Z"),
          open: 40000,
          high: 41000,
          low: 39500,
          close: 40500,
          volume: 100,
        },
      ]);
      expect(mockRawRepository.updateStatus).toHaveBeenCalledWith(
        "raw-uuid-123",
        RawDataStatus.SUCCESS,
      );
      expect(mockAuditLogService.logSuccess).toHaveBeenCalledWith(
        "PROCESS_RAW_DATA",
        "ProcessedData",
        "Berhasil memproses 1 candle untuk BTCUSDT",
        {
          symbol: "BTCUSDT",
          count: 1,
          granularity: "1d",
        },
        "raw-uuid-123",
      );
      expect(result).toEqual({
        success: true,
        rawDataId: "raw-uuid-123",
        processedCount: 1,
      });
    });

    it("harus melempar error jika RawData tidak ditemukan", async () => {
      // Arrange
      mockRawRepository.findById.mockResolvedValue(null);

      // Act & Assert
      await expect(
        processedDataService.processRawData("non-existent-id"),
      ).rejects.toThrow("RawData dengan ID non-existent-id tidak ditemukan.");
    });

    it("harus melempar error, meng-update status RawData menjadi FAILED, dan mencatat audit log error jika payload tidak valid", async () => {
      // Arrange
      const invalidRawRecord = {
        ...mockRawRecord,
        payload: { invalidField: true },
      };
      mockRawRepository.findById.mockResolvedValue(invalidRawRecord);
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // Act & Assert
      await expect(
        processedDataService.processRawData("raw-uuid-123"),
      ).rejects.toThrow("Payload JSON pada RawData ID raw-uuid-123 tidak valid.");

      expect(mockRawRepository.updateStatus).toHaveBeenCalledWith(
        "raw-uuid-123",
        RawDataStatus.FAILED,
      );
      expect(mockAuditLogService.logError).toHaveBeenCalledWith(
        "PROCESS_RAW_DATA",
        "RawData",
        "Gagal memproses RawData ID: raw-uuid-123",
        expect.any(Error),
        "raw-uuid-123",
      );

      consoleErrorSpy.mockRestore();
    });

    it("harus meng-update status RawData menjadi FAILED jika repository upsertMany melempar error", async () => {
      // Arrange
      mockRawRepository.findById.mockResolvedValue(mockRawRecord);
      const dbError = new Error("Database error");
      mockProcessedDataRepository.upsertMany.mockRejectedValue(dbError);
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // Act & Assert
      await expect(
        processedDataService.processRawData("raw-uuid-123"),
      ).rejects.toThrow("Database error");

      expect(mockRawRepository.updateStatus).toHaveBeenCalledWith(
        "raw-uuid-123",
        RawDataStatus.FAILED,
      );
      expect(mockAuditLogService.logError).toHaveBeenCalledWith(
        "PROCESS_RAW_DATA",
        "RawData",
        "Gagal memproses RawData ID: raw-uuid-123",
        dbError,
        "raw-uuid-123",
      );

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getCandles()", () => {
    it("harus mengembalikan daftar candle berdasarkan query", async () => {
      // Arrange
      const query = { symbol: "BTCUSDT", granularity: "1d" };
      const mockCandles = [mockProcessedCandle];
      mockProcessedDataRepository.findCandles.mockResolvedValue(mockCandles);

      // Act
      const result = await processedDataService.getCandles(query);

      // Assert
      expect(mockProcessedDataRepository.findCandles).toHaveBeenCalledWith(
        query,
      );
      expect(result).toEqual(mockCandles);
    });
  });

  describe("getLatestCandle()", () => {
    it("harus mengembalikan candle terbaru untuk symbol dan granularity tertentu", async () => {
      // Arrange
      mockProcessedDataRepository.findLatestCandle.mockResolvedValue(
        mockProcessedCandle,
      );

      // Act
      const result = await processedDataService.getLatestCandle(
        "BTCUSDT",
        "1d",
      );

      // Assert
      expect(mockProcessedDataRepository.findLatestCandle).toHaveBeenCalledWith(
        "BTCUSDT",
        "1d",
      );
      expect(result).toEqual(mockProcessedCandle);
    });
  });
});
