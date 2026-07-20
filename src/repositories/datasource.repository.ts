import {
  PrismaClient,
  type RawData,
} from "../../src/generated/prisma/client.js";
import {DataSourceType} from '../generated/prisma/client.js';

export class RawRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(name: String, type:String, rawData:any[], connection?:String, baseURL?:String): Promise <RawData>{
    try {
        const queryOptions:any={
            name,
            DataSourceType,
            rawData,
        }

        return await this.prisma.rawData.create(queryOptions);
        
    } catch (error) {
        console.log("Error createin raw data : ",error)
        throw error;
    }
  }


  async findPending(limit?: number): Promise<RawData[]> {
    try {
      const queryOptions: any = {
        where: {
          status: "PENDING",
        },
        orderBy: {
          createdAt: "asc",
        },
      };

      if (limit !== undefined) {
        queryOptions.take = limit;
      }

      return await this.prisma.rawData.findMany(queryOptions);
    } catch (error) {
      console.error("Error fetching pending raw data : ", error);
      throw error;
    }
  }
}
