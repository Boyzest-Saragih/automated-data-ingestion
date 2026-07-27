import { describe, it, expect, vi, beforeEach } from "vitest";
import { RawDataIngestionService } from "../services/raw-data-ingestion.service.js";
import { DataSourceType, RawDataStatus } from "../generated/prisma/index.js";
import type { ProviderType } from "../types/types.js";

describe("RawDataIngestionService", () => {
  let rawDataIngestionService: RawDataIngestionService;
  let mockRawRepository: any;
  let mockDataSourceRepository: any;
  let mockProcessedDataService: any;
  let mockYahooProvider: any;
  let mockBinanceProvider: any;

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

  const mockOHLCVData = {
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
  };

  const mockRawDataRecord = {
    id: "raw-uuid-123",
    dataSourceId: "ds-uuid-123",
    payload: mockOHLCVData,
    status: RawDataStatus.PENDING,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    mockRawRepository = {
      create: vi.fn(),
      findById: vi.fn(),
      findWithPagination: vi.fn(),
      findByDatasource: vi.fn(),
      exists: vi.fn(),
      updateStatus: vi.fn(),
    };
    mockDataSourceRepository = {
      findById: vi.fn(),
    };
    mockProcessedDataService = {
      processRawData: vi.fn(),
    };
    mockYahooProvider = {
      getOHLCV: vi.fn(),
    };
    mockBinanceProvider = {
      getOHLCV: vi.fn(),
    };

    rawDataIngestionService = new RawDataIngestionService(
      mockRawRepository,
      mockDataSourceRepository,
      mockProcessedDataService,
    );

    (rawDataIngestionService as any).providers = {
      yahoo: mockYahooProvider,
      binance: mockBinanceProvider,
    };
  });

  describe("ingestData()", () => {
    it("harus berhasil menginjeksi data OHLCV, membuat raw record, dan memproses data", async () => {
      // Arrange
      mockDataSourceRepository.findById.mockResolvedValue(mockDataSourceRecord);
      mockBinanceProvider.getOHLCV.mockResolvedValue(mockOHLCVData);
      mockRawRepository.create.mockResolvedValue(mockRawDataRecord);
      mockProcessedDataService.processRawData.mockResolvedValue({
        success: true,
        rawDataId: "raw-uuid-123",
        processedCount: 1,
      });

      // Act
      const result = await rawDataIngestionService.ingestData(
        "binance",
        "ds-uuid-123",
        "BTCUSDT",
        { interval: "1d" },
      );

      // Assert
      expect(mockDataSourceRepository.findById).toHaveBeenCalledWith("ds-uuid-123");
      expect(mockBinanceProvider.getOHLCV).toHaveBeenCalledWith(
        "BTCUSDT",
        { interval: "1d" },
        {
          baseURL: "https://api.binance.com/api/v3",
          connection: "",
        },
      );
      expect(mockRawRepository.create).toHaveBeenCalledWith({
        datasourceId: "ds-uuid-123",
        payload: mockOHLCVData,
        status: RawDataStatus.PENDING,
      });
      expect(mockProcessedDataService.processRawData).toHaveBeenCalledWith(
        "raw-uuid-123",
      );
      expect(result).toEqual(mockRawDataRecord);
    });

    it("harus melempar error jika DataSource tidak ditemukan", async () => {
      // Arrange
      mockDataSourceRepository.findById.mockResolvedValue(null);

      // Act & Assert
      await expect(
        rawDataIngestionService.ingestData("binance", "non-existent-ds", "BTCUSDT"),
      ).rejects.toThrow("DataSource dengan ID non-existent-ds tidak ditemukan.");
    });

    it("harus melempar error jika DataSource tidak aktif", async () => {
      // Arrange
      const inactiveDataSource = { ...mockDataSourceRecord, isActive: false };
      mockDataSourceRepository.findById.mockResolvedValue(inactiveDataSource);

      // Act & Assert
      await expect(
        rawDataIngestionService.ingestData("binance", "ds-uuid-123", "BTCUSDT"),
      ).rejects.toThrow(
        "DataSource 'Binance Spot Public' (ID: ds-uuid-123) sedang tidak aktif / dinonaktifkan.",
      );
    });

    it("harus melempar error jika provider tidak didukung", async () => {
      // Arrange
      mockDataSourceRepository.findById.mockResolvedValue(mockDataSourceRecord);

      // Act & Assert
      await expect(
        rawDataIngestionService.ingestData(
          "unsupported" as ProviderType,
          "ds-uuid-123",
          "BTCUSDT",
        ),
      ).rejects.toThrow("Provider 'unsupported' tidak didukung.");
    });

    it("harus mencetak console.error dan melempar error jika provider getOHLCV melempar error", async () => {
      // Arrange
      mockDataSourceRepository.findById.mockResolvedValue(mockDataSourceRecord);
      const providerError = new Error("API Network error");
      mockBinanceProvider.getOHLCV.mockRejectedValue(providerError);
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // Act & Assert
      await expect(
        rawDataIngestionService.ingestData("binance", "ds-uuid-123", "BTCUSDT"),
      ).rejects.toThrow("API Network error");

      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe("getRawDataById()", () => {
    it("harus mengembalikan RawData berdasarkan ID", async () => {
      // Arrange
      mockRawRepository.findById.mockResolvedValue(mockRawDataRecord);

      // Act
      const result = await rawDataIngestionService.getRawDataById("raw-uuid-123");

      // Assert
      expect(mockRawRepository.findById).toHaveBeenCalledWith("raw-uuid-123");
      expect(result).toEqual(mockRawDataRecord);
    });
  });

  describe("getPaginatedRawData()", () => {
    it("harus mengembalikan data RawData dengan paginasi", async () => {
      // Arrange
      const paginatedResult = {
        data: [mockRawDataRecord],
        meta: {
          total: 1,
          page: 1,
          limit: 10,
          totalPages: 1,
        },
      };
      const options = { page: 1, limit: 10 };
      mockRawRepository.findWithPagination.mockResolvedValue(paginatedResult);

      // Act
      const result = await rawDataIngestionService.getPaginatedRawData(options);

      // Assert
      expect(mockRawRepository.findWithPagination).toHaveBeenCalledWith(options);
      expect(result).toEqual(paginatedResult);
    });
  });

  describe("getRawDataByDatasource()", () => {
    it("harus mengembalikan RawData berdasarkan datasource ID", async () => {
      // Arrange
      const mockList = [mockRawDataRecord];
      mockRawRepository.findByDatasource.mockResolvedValue(mockList);

      // Act
      const result = await rawDataIngestionService.getRawDataByDatasource(
        "ds-uuid-123",
        5,
      );

      // Assert
      expect(mockRawRepository.findByDatasource).toHaveBeenCalledWith(
        "ds-uuid-123",
        5,
      );
      expect(result).toEqual(mockList);
    });
  });

  describe("updateRawStatus()", () => {
    it("harus memperbarui status RawData jika record ditemukan", async () => {
      // Arrange
      const updatedRecord = {
        ...mockRawDataRecord,
        status: RawDataStatus.SUCCESS,
      };
      mockRawRepository.exists.mockResolvedValue(true);
      mockRawRepository.updateStatus.mockResolvedValue(updatedRecord);

      // Act
      const result = await rawDataIngestionService.updateRawStatus(
        "raw-uuid-123",
        RawDataStatus.SUCCESS,
      );

      // Assert
      expect(mockRawRepository.exists).toHaveBeenCalledWith("raw-uuid-123");
      expect(mockRawRepository.updateStatus).toHaveBeenCalledWith(
        "raw-uuid-123",
        RawDataStatus.SUCCESS,
      );
      expect(result).toEqual(updatedRecord);
    });

    it("harus melempar error jika RawData tidak ditemukan saat update status", async () => {
      // Arrange
      mockRawRepository.exists.mockResolvedValue(false);

      // Act & Assert
      await expect(
        rawDataIngestionService.updateRawStatus(
          "non-existent-id",
          RawDataStatus.SUCCESS,
        ),
      ).rejects.toThrow("RawData dengan ID non-existent-id tidak ditemukan");
    });
  });
});
