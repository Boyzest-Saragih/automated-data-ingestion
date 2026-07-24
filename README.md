# Automated Data Ingestion & Reconciliation Pipeline

Backend service for collecting, validating, processing, and storing data from multiple external sources (REST API, CSV, Database) into a centralized database using a layered architecture.

---

## Overview

This project simulates an enterprise data ingestion pipeline that automatically retrieves data from multiple data sources, validates and normalizes the incoming data, stores the raw payload for auditing, processes it into a structured format, and exposes the processed data through REST APIs.

The project is built as a portfolio project to demonstrate backend software engineering practices including:

- Layered Architecture
- REST API Development
- Database Design
- SQL & ORM
- Data Validation
- Data Processing
- Data Integrity Verification
- Automated Testing
- CI/CD

---

## Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Language | TypeScript |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Security | Node.js Crypto (AES-256-GCM, SHA-256) |
| Testing | Jest, Supertest |
| Documentation | Swagger (Planned) |
| CI/CD | GitHub Actions |

---

## Architecture

```
                Client
                   │
                   ▼
             Express Router
                   │
                   ▼
             Controller Layer
                   │
                   ▼
              Service Layer
                   │
                   ▼
            Repository Layer
                   │
                   ▼
                PostgreSQL
```

---

## Project Structure

```
src/

├── config/
├── controllers/
├── middlewares/
├── repositories/
├── routes/
├── services/
├── utils/
├── validators/
├── generated/
├── types/
├── app.ts
└── server.ts

prisma/

tests/

docs/

.github/

```

---

# Data Flow

```
Create Data Source
        │
        ▼
Save Configuration
        │
        ▼
Collect Data
        │
        ▼
External Source
        │
        ▼
Raw Data
        │
        ▼
Validation
        │
        ▼
Data Processing
        │
        ▼
Processed Data
        │
        ▼
REST API
```

---

# Database

Current entities

- DataSource
- RawData
- ProcessedData
- AuditLog

---

# Features

## Data Source Management

- Create Data Source
- Update Data Source
- Delete Data Source
- Activate / Deactivate Data Source

Supported source types

- REST API
- Database
- File (CSV / Excel)

---

## Data Collection

Current

- REST API (Planned)

Upcoming

- Yahoo Finance
- CoinGecko
- CSV
- Excel

---

## Raw Data Storage

Stores original payload received from external systems before any processing.

Example

```json
{
  "symbol": "BTC-USD",
  "price": 118000,
  "volume": 1838291
}
```

---

## Data Processing

- Validation
- Normalization
- Data Cleaning
- Transformation

---

## Audit Log

Tracks every important system activity.

Examples

- Create datasource
- Collect data
- Validation failed
- Processing completed

---

# API Documentation

Swagger

> Coming Soon

Dummy URL

```
http://localhost:3000/api/docs
```

Production

```
https://api.example.com/docs
```

---

# Frontend

Repository

```
https://github.com/your-username/automated-data-ingestion-frontend
```

Development

```
http://localhost:5173
```

Production

```
https://app.example.com
```

---

# Backend

Repository

```
https://github.com/your-username/automated-data-ingestion-backend
```

Development

```
http://localhost:3000
```

Production

```
https://api.example.com
```

---

# REST API

## Data Sources

| Method | Endpoint |
|---------|----------|
| GET | /datasources |
| GET | /datasources/:id |
| POST | /datasources |
| PUT | /datasources/:id |
| DELETE | /datasources/:id |
| POST | /datasources/:id/collect |

---

## Raw Data

| Method | Endpoint |
|---------|----------|
| GET | /raw-data |
| GET | /raw-data/:id |

---

## Processed Data

| Method | Endpoint |
|---------|----------|
| GET | /processed-data |
| GET | /processed-data/:id |

---

## Audit Logs

| Method | Endpoint |
|---------|----------|
| GET | /audit-logs |

---

# Environment Variables

Example

```
PORT=3000

DATABASE_URL=

JWT_SECRET=

ENCRYPTION_KEY=

NODE_ENV=development
```

---

# Installation

Clone repository

```bash
git clone https://github.com/your-username/automated-data-ingestion-backend.git
```

Install dependencies

```bash
npm install
```

Setup environment

```bash
cp .env.example .env
```

Run Prisma Migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

Start development server

```bash
npm run dev
```

---

# Running Tests

Unit Test

```bash
npm test
```

Coverage

```bash
npm run test:coverage
```

---

# CI/CD

Every push to GitHub automatically executes

- Install Dependencies
- Generate Prisma Client
- Run Unit Tests
- Build Project

GitHub Actions

```
.github/workflows/backend.yml
```

---

# Roadmap

## Phase 1

- [x] Express Setup
- [x] Prisma Setup
- [x] Layered Architecture
- [ ] Data Source CRUD
- [ ] Raw Data CRUD

---

## Phase 2

- [ ] Yahoo Finance Collector
- [ ] CSV Collector
- [ ] Validation
- [ ] Processing
- [ ] SHA-256 Integrity Check

---

## Phase 3

- [ ] AES Encryption
- [ ] Scheduler
- [ ] Swagger
- [ ] Dashboard Integration
- [ ] Audit Improvements

---

## Phase 4

- [ ] Historical Data Collection
- [ ] Multiple Data Sources
- [ ] Data Reconciliation
- [ ] Performance Optimization

---

# License

MIT License

---

# Author

Your Name

GitHub

```
https://github.com/your-username
```

LinkedIn

```
https://linkedin.com/in/your-profile
```
