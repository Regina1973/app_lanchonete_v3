const request = require("supertest");
const app = require("../src/App");

describe("Users API", () => {
  test("GET /api/users deve retornar lista", async () => {
    const response = await request(app)
      .get("/api/users");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /api/users/1 deve retornar usuário", async () => {
    const response = await request(app)
      .get("/api/users/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
  });
});
