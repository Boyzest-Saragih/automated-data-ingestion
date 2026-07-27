import { DataSourceService } from "../services/data-source.service.js";
export class DataSourceCtr {
    dataSourceService;
    constructor(dataSourceService = new DataSourceService()) {
        this.dataSourceService = dataSourceService;
    }
    createDataSource = async (req, res) => {
        try {
            const { name, type, provider, connection, baseURL } = req.body;
            if (!name || !type || !baseURL) {
                res.status(400).json({
                    success: false,
                    message: "semua field wajib diisi.",
                });
                return;
            }
            const result = await this.dataSourceService.create(name, type, provider, connection, baseURL);
            res.status(201).json({
                success: true,
                message: "DataSource berhasil dibuat",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error?.message || "Terjadi kesalahan saat membuat data source",
            });
        }
    };
    getAllDataSources = async (req, res) => {
        try {
            const dataSources = await this.dataSourceService.getAllDataSources();
            return res.status(200).json({
                success: true,
                message: "Berhasil mengambil semua data source",
                data: dataSources,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data source",
                error: error.message,
            });
        }
    };
    getDataSourcesById = async (req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: "Query parameter 'id' wajib diisi",
                });
            }
            const dataSource = await this.dataSourceService.getDataSourcesById(id);
            return res.status(200).json({
                success: true,
                message: `Berhasil mengambil data source dengan id: ${id}`,
                data: dataSource,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data source berdasarkan id",
                error: error.message,
            });
        }
    };
    // GET /api/data-sources/search?name=xyz
    getDataSourcesByName = async (req, res) => {
        try {
            const name = req.query.name;
            if (!name) {
                return res.status(400).json({
                    success: false,
                    message: "Query parameter 'name' wajib diisi",
                });
            }
            const dataSource = await this.dataSourceService.getDataSourcesByName(name);
            return res.status(200).json({
                success: true,
                message: `Berhasil mengambil data source dengan nama: ${name}`,
                data: dataSource,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data source berdasarkan nama",
                error: error.message,
            });
        }
    };
    // PATCH /api/data-sources/:id
    updateDataSources = async (req, res) => {
        try {
            const { id } = req.params;
            const { isActive } = req.body;
            if (typeof isActive !== "boolean") {
                return res.status(400).json({
                    success: false,
                    message: "Body parameter 'isActive' harus bertipe boolean (true/false)",
                });
            }
            if (!id || typeof id !== "string") {
                res.status(400).json({
                    success: false,
                    message: "ID tidak valid atau tidak ditemukan",
                });
                return;
            }
            const updatedDataSource = await this.dataSourceService.updateDataSources(id, isActive);
            return res.status(200).json({
                success: true,
                message: "Status data source berhasil diperbarui",
                data: updatedDataSource,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate data source",
                error: error.message,
            });
        }
    };
}
//# sourceMappingURL=data-source.controller.js.map