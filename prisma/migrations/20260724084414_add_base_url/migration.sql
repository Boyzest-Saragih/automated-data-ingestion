/*
  Warnings:

  - Added the required column `baseURL` to the `DataSource` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `DataSource` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `RawData` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DataSourceType" AS ENUM ('REST_API', 'DATABASE', 'FILE');

-- CreateEnum
CREATE TYPE "RawDataStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- AlterTable
ALTER TABLE "DataSource" ADD COLUMN     "baseURL" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "DataSourceType" NOT NULL,
ALTER COLUMN "connection" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RawData" DROP COLUMN "status",
ADD COLUMN     "status" "RawDataStatus" NOT NULL;
