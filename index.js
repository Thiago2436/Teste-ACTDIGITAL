const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Verifica se o arquivo está sendo executado diretamente
if (require.main === module) {
  app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
}

module.exports = app;
