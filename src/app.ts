import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";

const app: Express = express();

// Global middleware
app.use(express.json());

// Register API routes
app.use("/api/v1", healthRoutes);

// Default route for unknown endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default app;
