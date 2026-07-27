import { Prisma } from "../../src/generated/prisma/index.js";
import { prisma } from "../config/prisma.js";
import { RawDataStatus } from "../generated/prisma/index.js";
export class RawRepository {
    async create(data) {
        try {
            return await prisma.rawData.create({
                data: {
                    dataSourceId: data.datasourceId,
                    payload: data.payload,
                    status: data.status,
                },
            });
        }
        catch (error) {
            console.error("Error createin raw data : ", error);
            throw error;
        }
    }
    async createMany(datas) {
        try {
            const formattedData = datas.map((item) => ({
                dataSourceId: item.datasourceId,
                payload: item.payload,
                status: item.status,
            }));
            return await prisma.rawData.createMany({
                data: formattedData,
            });
        }
        catch (error) {
            console.error("Error Create many in raw data : ", error);
            throw error;
        }
    }
    async findById(id) {
        try {
            return await prisma.rawData.findUnique({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            console.error("Error in find Raw data by ID : ", error);
            throw error;
        }
    }
    async findAll(limit) {
        try {
            return await prisma.rawData.findMany({ take: limit });
        }
        catch (error) {
            console.error("Error fetching all raw data : ", error);
            throw error;
        }
    }
    async findBystatus(status, limit) {
        try {
            const queryOptions = {
                where: {
                    status: status,
                },
                orderBy: {
                    createdAt: "asc",
                },
            };
            if (limit !== undefined) {
                queryOptions.take = limit;
            }
            return await prisma.rawData.findMany(queryOptions);
        }
        catch (error) {
            console.error("Error fetching pending raw data : ", error);
            throw error;
        }
    }
    async findByDatasource(dataSourceId, limit) {
        try {
            return await prisma.rawData.findMany({
                where: { dataSourceId: dataSourceId },
                orderBy: { createdAt: "desc" },
                ...(limit && { take: limit }),
            });
        }
        catch (error) {
            console.error("Error fetching raw data by datasource : ", error);
            throw error;
        }
    }
    async findLatest(dataSourceId) {
        try {
            // return await prisma.rawData.findFirst({
            //   where: dataSourceId ? { dataSourceId: dataSourceId } : undefined ,
            //   orderBy: { createdAt: "desc" },
            // });
            return await prisma.rawData.findFirst({
                ...(dataSourceId && { where: { dataSourceId } }),
                orderBy: { createdAt: "desc" },
            });
        }
        catch (error) {
            console.error("Error fetching latest raw data : ", error);
            throw error;
        }
    }
    async findWithPagination(options) {
        try {
            const { page, limit } = options;
            const skip = (page - 1) * limit;
            const [data, total] = await prisma.$transaction([
                prisma.rawData.findMany({
                    skip,
                    take: limit,
                    orderBy: { createdAt: "desc" },
                }),
                prisma.rawData.count(),
            ]);
            return {
                data,
                meta: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            };
        }
        catch (error) {
            console.error("Error fetching raw data with pagination : ", error);
            throw error;
        }
    }
    async count() {
        try {
            return await prisma.rawData.count();
        }
        catch (error) {
            console.error("Error counting raw data : ", error);
            throw error;
        }
    }
    async countByStatus(status) {
        try {
            return await prisma.rawData.count({
                where: { status },
            });
        }
        catch (error) {
            console.error("Error counting raw data by status : ", error);
            throw error;
        }
    }
    async updateStatus(id, status) {
        try {
            return await prisma.rawData.update({
                where: { id },
                data: { status },
            });
        }
        catch (error) {
            console.error("Error update status raw data : ", error);
            throw error;
        }
    }
    async exists(id) {
        try {
            const count = await prisma.rawData.count({
                where: { id },
            });
            return count > 0;
        }
        catch (error) {
            console.error("Error checking raw data existence : ", error);
            throw error;
        }
    }
}
//# sourceMappingURL=raw.repository.js.map