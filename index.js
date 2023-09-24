const express = require("express");
const app = express();
const port = 3000;

// Configuración de EJS como motor de plantillas
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/beneficios", (req, res) => {
  res.render("beneficios");
});

app.get("/ejercicios", (req, res) => {
  res.render("ejercicios");
});
app.get("/medidasempresariales", (req, res) => {
    res.render("medidasemp");
  });

 
// Servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});