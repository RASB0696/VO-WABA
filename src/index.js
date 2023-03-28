import express from 'express'
import http from 'http'
import cors from 'cors'

const express = require("express");
const apiRoute = require("./routes/routes");
const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => (console.log("El puerto es: " + PORT)))