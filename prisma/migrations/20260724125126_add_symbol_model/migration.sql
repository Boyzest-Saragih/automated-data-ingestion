-- CreateTable
CREATE TABLE "Symbol" (
    "id" TEXT NOT NULL,
    "dataSourceId" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "name" TEXT,
    "defaultInterval" TEXT NOT NULL DEFAULT '15m',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Symbol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Symbol_ticker_isActive_idx" ON "Symbol"("ticker", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Symbol_dataSourceId_ticker_key" ON "Symbol"("dataSourceId", "ticker");

-- AddForeignKey
ALTER TABLE "Symbol" ADD CONSTRAINT "Symbol_dataSourceId_fkey" FOREIGN KEY ("dataSourceId") REFERENCES "DataSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
