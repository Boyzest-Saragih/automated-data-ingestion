import { describe, it, expect, vi, beforeEach } from "vitest";
import { DataSourceService } from "../services/data-source.service.js";
import { DataSourceType } from "../generated/prisma/index.js";
describe("DataSourceService", () => {
    let dataSourceService;
    let mockDataSourceRepository;
    const mockDataSourceRecord = {
        id: "ds-uuid-123",
        name: "Binance Spot Public",
        type: DataSourceType.REST_API,
        provider: "binance",
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
            // Arrange
            mockDataSourceRepository.create.mockResolvedValue(mockDataSourceRecord);
            //   Act
            const result = await dataSourceService.create("Binance Spot Public", DataSourceType.REST_API, "binance", "", "https://api.binance.com/api/v3");
            //   Assert
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
                .mockImplementation(() => { });
            await expect(dataSourceService.create("Binance Spot Public", DataSourceType.REST_API, "binance", "", "https://api.binance.com/api/v3")).rejects.toThrow("Database connection failed");
            expect(consoleErrorSpy).toHaveBeenCalled();
            consoleErrorSpy.mockRestore();
        });
    });
    describe("getAllDataSources()", () => {
        it("harus mengembalikan daftar seluruh dataSource", async () => {
            // Arrange
            const mockList = [mockDataSourceRecord];
            mockDataSourceRepository.findAll.mockResolvedValue(mockList);
            // Act
            const result = await dataSourceService.getAllDataSources();
            // Assert
            expect(mockDataSourceRepository.findAll).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockList);
            expect(result).toHaveLength(1);
        });
    });
    describe("getDataSourcesById()", () => {
        it("harus mengembalikan DataSource berdasarkan ID", async () => {
            // Arrange
            mockDataSourceRepository.findById.mockResolvedValue(mockDataSourceRecord);
            // Act
            const result = await dataSourceService.getDataSourcesById("ds-uuid-123");
            // Assert
            expect(mockDataSourceRepository.findById).toHaveBeenCalledWith("ds-uuid-123");
            expect(result).toEqual(mockDataSourceRecord);
        });
    });
    describe("getDataSourcesByName()", () => {
        it("harus mengembalikan DataSource berdasarkan Name", async () => {
            // Arrange
            mockDataSourceRepository.findByName.mockResolvedValue(mockDataSourceRecord);
            // Act
            const result = await dataSourceService.getDataSourcesByName("Binance Spot Public");
            // Assert
            expect(mockDataSourceRepository.findByName).toHaveBeenCalledWith("Binance Spot Public");
            expect(result).toEqual(mockDataSourceRecord);
        });
    });
    describe("updateDataSources()", () => {
        it("harus memperbarui status isActive DataSource", async () => {
            // Arrange
            const updatedRecord = { ...mockDataSourceRecord, isActive: false };
            mockDataSourceRepository.update.mockResolvedValue(updatedRecord);
            // Act
            const result = await dataSourceService.updateDataSources("ds-uuid-123", false);
            // Assert
            expect(mockDataSourceRepository.update).toHaveBeenCalledWith("ds-uuid-123", false);
            expect(result.isActive).toBe(false);
        });
    });
});
//# sourceMappingURL=data-source.test.js.map