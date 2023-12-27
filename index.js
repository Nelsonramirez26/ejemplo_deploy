const express = require("express");
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en puerto : ", process.env.PORT);
})

const productos = [
    {id: 1, nombre: "Televisor"},
    {id: 2, nombre: "Radio Am/Fm"},

]

app.get("/api/v1/productos", (req, res) => {
    res.json({productos});
});

app.all("*", (req, res) => {
    res.status(404).json({code: 404, message: "Ruta no existe."});
})

