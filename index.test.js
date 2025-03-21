const request = require("supertest");
const app = require("./index");

let server;

beforeAll((done) => {
  server = app.listen(3000, () => {
    console.log("Servidor iniciado para testes");
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log("Servidor de teste fechado");
    done();
  });
});

describe("Testando a API", () => {
  test("GET / deve retornar Olá, mundo!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Olá, mundo!");
  });
});
