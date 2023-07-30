const express = require("express");
const app = express();
const port = 3000;

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Hola, este es un servidor básico hecho en Express.js!");
});

// Ruta de ejemplo con parámetros
app.get("/saludo/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.send(`¡Hola, ${nombre}!`);
});

// Ruta para manejar solicitudes que no coinciden con ninguna ruta
app.use((req, res) => {
  res.status(404).send("¡Página no encontrada!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
