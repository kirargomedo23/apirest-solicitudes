require("module-alias/register");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("@models/associations.model");

const port = process.env.PORT || 4210;

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
console.log("API escuchando en: " + `http://localhost:${port}/`);

app.use("/api/user", require("@router/user.router.js"));
app.use("/api/solicitud", require("@router/solicitud.router.js"));

module.exports = app;
