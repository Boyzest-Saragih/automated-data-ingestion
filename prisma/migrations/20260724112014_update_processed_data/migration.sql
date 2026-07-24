/*
  Warnings:

  - You are about to drop the column `result` on the `ProcessedData` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ProcessedData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[symbol,granularity,timestamp]` on the table `ProcessedData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `close` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `granularity` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `high` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `low` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `open` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symbol` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `ProcessedData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProcessedData" DROP COLUMN "result",
DROP COLUMN "status",
ADD COLUMN     "close" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "granularity" TEXT NOT NULL,
ADD COLUMN     "high" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "low" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "open" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "symbol" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "volume" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE INDEX "ProcessedData_symbol_granularity_timestamp_idx" ON "ProcessedData"("symbol", "granularity", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "ProcessedData_symbol_granularity_timestamp_key" ON "ProcessedData"("symbol", "granularity", "timestamp");
