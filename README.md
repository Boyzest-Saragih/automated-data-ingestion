# Automated Data Ingestion System

A robust Node.js and TypeScript backend service designed for automated extraction, transformation, loading (ETL), and management of financial market data (OHLCV candles). The system ingests raw market data from multiple data providers (such as Binance and Yahoo Finance), standardizes the raw payloads into processed financial candle data, and executes scheduled ingestion background jobs using `node-cron`.

---

## 🌟 Key Features

- **Multi-Provider Data Ingestion**: Built-in support for fetching OHLCV (Open, High, Low, Close, Volume) data from external financial APIs including **Binance** (Cryptocurrency) and **Yahoo Finance** (Stocks & Equities).
- **Extensible Architecture**: Modular provider interface ([OHLCVProvider](file:///d:/automated-data-ingestion/src/interfaces/ohlcv-provider.interface.ts)) allowing easy addition of custom data sources.
- **Two-Stage Data Storage (ETL Pipeline)**:
  - **Raw Ingestion**: Stores original API payload responses into `RawData` with execution status (`PENDING`, `SUCCESS`, `FAILED`).
  - **Data Normalization**: Transforms raw JSON into standardized `ProcessedData` records containing structured candle time-series.
- **Automated Cron Scheduler**: Background scheduling via [IngestionScheduler](file:///d:/automated-data-ingestion/src/schedulers/ingestion.scheduler.ts):
  - **Real-Time Crypto Job**: Runs every 15 minutes for Binance market symbols.
  - **Daily Stock Job**: Runs every morning at 07:00 WIB for Yahoo Finance market symbols.
- **Data Source & Symbol Management**: Dynamic registration and toggling of data sources and active market tickers.
- **Comprehensive Audit Logging**: Ingestion logs, cron execution results, and system error tracebacks stored in the `AuditLog` table for monitoring and auditability.

---

## 🏗️ Tech Stack

- **Runtime & Language**: [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Web Framework**: [Express.js v5](https://expressjs.com/)
- **Database & ORM**: [PostgreSQL](https://www.postgresql.org/), [Prisma ORM v6](https://www.prisma.io/)
- **Scheduler**: [node-cron](https://www.npmjs.com/package/node-cron)
- **HTTP Client & Parsing**: [Axios](https://axios-http.com/), [csv-parser](https://www.npmjs.com/package/csv-parser), [xlsx](https://www.npmjs.com/package/xlsx)
- **Dev Tools**: `tsx` (TypeScript Execution Engine), `dotenv`

---

## 📂 Project Structure

```
automated-data-ingestion/
├── prisma/
│   └── schema.prisma               # Prisma Database Schema (DataSource, Symbol, RawData, ProcessedData, AuditLog)
├── src/
│   ├── app.ts                      # Express Application setup & Route definitions
│   ├── server.ts                   # Server entry point & Scheduler initialization
│   ├── config/                     # Configuration (e.g., Prisma Client instance)
│   ├── controllers/                # Request Handlers
│   │   ├── audit-log.controller.ts
│   │   ├── data-source.controller.ts
│   │   ├── processed-data.controller.ts
│   │   ├── raw-ingestion.controller.ts
│   │   └── symbol.controller.ts
│   ├── interfaces/                 # Core Interfaces
│   │   └── ohlcv-provider.interface.ts
│   ├── middlewares/                # Custom Express Middlewares
│   ├── repositories/               # Data Access Layer (Prisma queries)
│   │   ├── audit-log.repository.ts
│   │   ├── data-source.repository.ts
│   │   ├── processed.repository.ts
│   │   ├── raw.repository.ts
│   │   └── symbol.repository.ts
│   ├── routes/                     # API Route Definitions
│   │   ├── audit-log.route.ts
│   │   ├── data-source.routes.ts
│   │   ├── processed-data.route.ts
│   │   ├── raw.routes.ts
│   │   └── symbol.route.ts
│   ├── schedulers/                 # Automated Background Jobs
│   │   └── ingestion.scheduler.ts
│   ├── services/                   # Business Logic & ETL Processing
│   │   ├── audit-log.service.ts
│   │   ├── binance-client.service.ts
│   │   ├── data-source.service.ts
│   │   ├── processed-data.service.ts
│   │   ├── raw-data-ingestion.service.ts
│   │   ├── symbol.service.ts
│   │   └── yahoo-client.service.ts
│   ├── types/                      # TypeScript definitions & Enums
│   └── utils/                      # Helper Functions & Utilities
├── .env                            # Environment Variables Configuration
├── package.json
└── tsconfig.json
```

---

## 🗄️ Database Entity Architecture

The PostgreSQL database schema consists of 5 core entities defined in [schema.prisma](file:///d:/automated-data-ingestion/prisma/schema.prisma):

1. **`DataSource`**: Represents an external API provider configuration (e.g., Binance, Yahoo Finance).
2. **`Symbol`**: Market tickers attached to a `DataSource` (e.g., `BTCUSDT`, `BBCA.JK`) with assigned intervals (e.g., `15m`, `1d`) and active status flags.
3. **`RawData`**: Ingested JSON payloads stored prior to processing, linked to a specific `DataSource`.
4. **`ProcessedData`**: Standardized OHLCV candles (`open`, `high`, `low`, `close`, `volume`, `timestamp`, `granularity`) derived from `RawData`.
5. **`AuditLog`**: System log entries capturing actions, status (`SUCCESS`, `FAILED`, `WARNING`, `INFO`), messages, and JSON details.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **PostgreSQL**: Running instance of PostgreSQL database

### Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Boyzest-Saragih/automated-data-ingestion.git
   cd automated-data-ingestion
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the project root directory:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>?schema=public"
   ```

4. **Run Database Migrations & Generate Prisma Client**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The API server will start on `http://localhost:5000` (or your configured `PORT`) and automatically launch the background [IngestionScheduler](file:///d:/automated-data-ingestion/src/schedulers/ingestion.scheduler.ts).

---

## 🔌 API Reference Endpoints

All API endpoints are prefixed with `/api`.

### 1. Data Sources (`/api/dataSource`)
- `POST /api/dataSource` - Create a new DataSource configuration.
- `GET /api/dataSource` - Get all DataSources.
- `GET /api/dataSource/search` - Search DataSources by name query.
- `GET /api/dataSource/search/:id` - Get a DataSource by ID.
- `PATCH /api/dataSource/:id` - Update a DataSource.

### 2. Market Symbols (`/api/symbol`)
- `POST /api/symbol` - Register a new ticker symbol for a DataSource.
- `GET /api/symbol` - Retrieve all symbols.
- `GET /api/symbol/:dataSourceId` - Retrieve symbols linked to a specific DataSource.
- `PATCH /api/symbol/:id` - Toggle symbol active status (`isActive`).

### 3. Raw Data Ingestion (`/api/ingestRawData`, `/api/raw`)
- `POST /api/ingestRawData` - Trigger manual ingestion for a provider & symbol.
- `GET /api/raw` - Retrieve paginated raw ingested datasets.
- `GET /api/raw/:id` - Retrieve raw dataset details by ID.
- `PATCH /api/raw/:id` - Update raw data status (`PENDING`, `SUCCESS`, `FAILED`).

### 4. Processed OHLCV Data (`/api/processedData`)
- `GET /api/processedData` - Query processed candles filtered by `symbol`, `granularity`, start/end dates, and pagination limits.
- `GET /api/processedData/latest` - Fetch the most recent processed candle for a symbol and granularity.

### 5. Audit Logs (`/api/auditLog`)
- `GET /api/auditLog` - Fetch recent system audit logs.

---

## ⏰ Cron Scheduler Configuration

Automated data collection is managed by [IngestionScheduler](file:///d:/automated-data-ingestion/src/schedulers/ingestion.scheduler.ts). It inspects active symbols in the database matching specific providers:

| Task Name | Cron Schedule | Target Provider | Action |
| :--- | :--- | :--- | :--- |
| **Realtime Crypto** | `*/15 * * * *` (Every 15 mins) | `binance` | Fetches active Binance symbol OHLCV data & processes candles |
| **Daily Stocks** | `0 7 * * *` (Daily 07:00 WIB) | `yahoo` | Fetches active Yahoo Finance stock OHLCV data & processes candles |

---

## 🛠️ Adding a New Data Provider

To introduce a new market provider (e.g., AlphaVantage, CoinGecko):

1. Create a service in `src/services/` that implements the [OHLCVProvider](file:///d:/automated-data-ingestion/src/interfaces/ohlcv-provider.interface.ts) interface:
   ```typescript
   export class CustomClientService implements OHLCVProvider {
     async getOHLCV(symbol: string, options?: FetchOHLCVOptions, config?: ProviderConfig): Promise<NormalizedOHLCV[]> {
       // Implementation logic...
     }
   }
   ```
2. Register the provider instance inside [RawDataIngestionService](file:///d:/automated-data-ingestion/src/services/raw-data-ingestion.service.ts).
3. Add the provider key to the `ProviderType` union in `src/types/types.ts`.

---

## 📄 License

This project is licensed under the **ISC License**.
