const request = require("supertest");
const app = require("./index");

let server;

beforeAll(() => {
  server = app.listen(3000, () => console.log("Servidor iniciado para testes"));
});

afterAll((done) => {
  server.close(done); // Fecha o servidor corretamente após os testes
});

describe("Testando a API", () => {
  test("GET / deve retornar Olá, mundo!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Olá, mundo!");
  });
});
