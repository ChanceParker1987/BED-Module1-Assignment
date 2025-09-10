import { Router } from "express";
import { healthCheck } from "../controllers/healthController";

const router: Router = Router();

// Health check endpoint
router.get("/health", healthCheck);

export default router;
