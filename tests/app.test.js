const request = require("supertest");
const app = require("../src/index");

describe("App Endpoints", () => {
  it("GET / should return greeting message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello from CI/CD App!");
  });

  it("GET /health should return status OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "OK");
  });

  it("GET /nonexistent should return 404", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toEqual(404);
    expect(res.text).toContain("Not Found");
  });

  it("GET / should return text/html content type", async () => {
    const res = await request(app).get("/");
    expect(res.headers["content-type"]).toMatch(/html/);
  });
});
