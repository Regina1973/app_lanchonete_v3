const request = require("supertest");
const app = require("../src/App");
 
describe("Products API", () => {
test("GET /api/products deve retornar lista", async () => {
const response = await request(app)
.get("/api/products");
 
expect(response.statusCode).toBe(200);
expect(Array.isArray(response.body)).toBe(true);
expect(response.body.length).toBeGreaterThan(0);
});
 
test("GET /api/products/1 deve retornar produto", async () => {
const response = await request(app)
.get("/api/products/1");
 
expect(response.statusCode).toBe(200);
expect(response.body.id).toBe(1);
});
});
