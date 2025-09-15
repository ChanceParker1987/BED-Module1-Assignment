import express, { Express } from "express";
import {
  calculatePortfolioPerformance,
} from "../portfolio/portfolioPerformance";
import {
  findLargestHolding,
  calculateAssetAllocation,
  Asset,
} from "../portfolio/portfolioUtils";

// Initialize Express application
const app: Express = express();

// Health check endpoint
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Example static portfolio for demonstration
const examplePortfolio: Asset[] = [
  { name: "Stocks", value: 7000 },
  { name: "Bonds", value: 3000 },
  { name: "Real Estate", value: 12000 },
];

// Portfolio performance endpoint
app.get("/api/v1/portfolio/performance", (req, res) => {
  const result = calculatePortfolioPerformance(10000, 12000);
  res.json(result);
});

// Largest holding endpoint
app.get("/api/v1/portfolio/largest-holding", (req, res) => {
  const result = findLargestHolding(examplePortfolio);
  res.json(result);
});

// Asset allocation endpoint
app.get("/api/v1/portfolio/allocation", (req, res) => {
  const result = calculateAssetAllocation(examplePortfolio);
  res.json(result);
});

export default app;
