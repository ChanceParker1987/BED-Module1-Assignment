import { Request, Response } from "express";

/**
 * Health check controller
 * Returns basic server health status
 */
export const healthCheck = (req: Request, res: Response): void => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
};
