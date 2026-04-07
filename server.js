import express from "express";
import { db } from "./db.js"

const app = express();

app.get("/usuario",  async (req, res) => {
    const usuario = await db.query("select * from usuario;")
    res.send(usuario.rows);
});


app.listen(3000, () => {
    console.log("server is run in port 3000")
});