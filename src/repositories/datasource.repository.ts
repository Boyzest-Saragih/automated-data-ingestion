import {
  PrismaClient,
  type DataSource,
} from "../../src/generated/prisma/client.js";
import {DataSourceType} from '../generated/prisma/client.js';

type createDataSourceDto = {
    name:string
    type:DataSourceType
    connection?:string|null
    baseURL?:string|null
}

export class RawRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: createDataSourceDto): Promise <DataSource>{
    try {
        return await this.prisma.dataSource.create({data:{
            name: data.name,
            type:data.type,
            connection:data.connection ?? null,
            baseURL:data.baseURL ?? null
        }});
        
    } catch (error) {
        console.log("Error createin raw data : ",error)
        throw error;
    }
  }
}
