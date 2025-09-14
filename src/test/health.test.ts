import request, { Response } from "supertest";
import app from "../app";

describe("GET /api/v1/health", () => {
  it("should return status 200", async () => {
    // ARRANGE
    const endpoint = "/api/v1/health";

    // ACT
    const response: Response = await request(app).get(endpoint);

    // ASSERT
    expect(response.status).toBe(200);
  });

  it("should return server status and metadata", async () => {
    // ARRANGE
    const endpoint = "/api/v1/health";

    // ACT
    const response: Response = await request(app).get(endpoint);

    // ASSERT
    expect(response.body).toHaveProperty("status", "OK");
    expect(response.body).toHaveProperty("uptime");
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("version");
  });

  it("should include a valid ISO timestamp", async () => {
    // ARRANGE
    const endpoint = "/api/v1/health";

    // ACT
    const response: Response = await request(app).get(endpoint);
    const timestamp = response.body.timestamp;

    // ASSERT
    const date = new Date(timestamp);
    expect(date.toString()).not.toBe("Invalid Date");
  });
});
