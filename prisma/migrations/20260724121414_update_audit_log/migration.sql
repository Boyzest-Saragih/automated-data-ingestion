-- CreateEnum
CREATE TYPE "AuditStatus" AS ENUM ('SUCCESS', 'FAILED', 'WARNING', 'INFO');

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "details" JSONB,
ADD COLUMN     "status" "AuditStatus" NOT NULL DEFAULT 'INFO';

-- CreateIndex
CREATE INDEX "AuditLog_action_entity_idx" ON "AuditLog"("action", "entity");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");
