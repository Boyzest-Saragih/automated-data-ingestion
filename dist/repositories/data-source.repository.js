import {} from "../generated/prisma/index.js";
import { DataSourceType } from "../generated/prisma/index.js";
import { prisma } from "../config/prisma.js";
export class DataSourceRepository {
    async create(data) {
        try {
            return await prisma.dataSource.create({
                data: {
                    name: data.name,
                    type: data.type,
                    provider: data.provider,
                    connection: data.connection ?? null,
                    baseURL: data.baseURL,
                },
            });
        }
        catch (error) {
            console.log("Error createin raw data : ", error);
            throw error;
        }
    }
    async findAll() {
        try {
            return await prisma.dataSource.findMany();
        }
        catch (error) {
            console.error("Error fetching all data source : ", error);
            throw error;
        }
    }
    async findById(id) {
        try {
            return await prisma.dataSource.findFirst({
                where: { id },
            });
        }
        catch (error) {
            console.error("Error get data source by id: ", error);
            throw error;
        }
    }
    async findByName(name) {
        try {
            return await prisma.dataSource.findFirst({
                where: { name },
            });
        }
        catch (error) {
            console.error("Error get data source by name: ", error);
            throw error;
        }
    }
    async update(id, isActive) {
        try {
            return await prisma.dataSource.update({
                where: { id },
                data: { isActive },
            });
        }
        catch (error) {
            console.error("Error update data source: ", error);
            throw error;
        }
    }
}
//# sourceMappingURL=data-source.repository.js.map