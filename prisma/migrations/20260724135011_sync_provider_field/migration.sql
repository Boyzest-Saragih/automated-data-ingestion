/*
  Warnings:

  - Added the required column `provider` to the `DataSource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataSource" ADD COLUMN     "provider" TEXT NOT NULL;
