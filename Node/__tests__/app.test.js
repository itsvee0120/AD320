const request = require("supertest");
const app = require("../index"); // Make sure this path is correct

describe("GET /", () => {
  it("should return a 200 status and the correct content", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Home"); // Assuming your home.html contains an <h1>Home</h1>
  });
});
