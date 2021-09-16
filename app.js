const express = require("express");
const app = express();
const path = require("path");

app.listen(42242, () => {
  console.log("Servidor iniciado en puerto 42242");
  console.log("Servidor: http://localhost:42242");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.use(express.static("public"));
