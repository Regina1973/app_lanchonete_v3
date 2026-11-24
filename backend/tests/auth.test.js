require("dotenv").config();

const request = require("supertest");
const app = require("../src/App");

describe("Auth API", () => {
  test("POST /api/auth/login deve retornar token", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@lanchonete.com",
        password: "123456"
      });

    console.log(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
