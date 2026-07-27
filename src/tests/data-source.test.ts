import { describe, it, expect, vi, beforeEach } from "vitest";
import { DataSourceService } from "../services/data-source.service.js";
import { DataSourceType } from "../generated/prisma/index.js";
import type { ProviderType } from "../types/types.js";

describe("DataSourceService", () => {
  let dataSourceService: DataSourceService;
  let mockDataSourceRepository: any;

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

  beforeEach(() => {
    mockDataSourceRepository = {
      create: vi.fn(),
      findAll: vi.fn(),
      findById: vi.fn(),
      findByName: vi.fn(),
      update: vi.fn(),
    };
    dataSourceService = new DataSourceService(mockDataSourceRepository);
  });

  describe("create()", () => {
    it("harus berhasil membuat DataSource baru dan mengembalikan datanya", async () => {
      mockDataSourceRepository.create.mockResolvedValue(mockDataSourceRecord);

      const result = await dataSourceService.create(
        "Binance Spot Public",
        DataSourceType.REST_API,
        "binance",
        "",
        "https://api.binance.com/api/v3",
      );

      expect(mockDataSourceRepository.create).toHaveBeenCalledTimes(1);
      expect(mockDataSourceRepository.create).toHaveBeenCalledWith({
        name: "Binance Spot Public",
        type: DataSourceType.REST_API,
        provider: "binance",
        connection: "",
        baseURL: "https://api.binance.com/api/v3",
      });
      expect(result).toEqual(mockDataSourceRecord);
    });

    it("harus melempar error dan mencetak console.error jika repository gagal", async () => {
      const dbError = new Error("Database connection failed");
      mockDataSourceRepository.create.mockRejectedValue(dbError);

      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await expect(
        dataSourceService.create(
          "Binance Spot Public",
          DataSourceType.REST_API,
          "binance",
          "",
          "https://api.binance.com/api/v3",
        ),
      ).rejects.toThrow("Database connection failed");

      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });
});
