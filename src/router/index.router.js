const express = require("express");
const app = express();

app.use("/api/user", require("@router/user.router.js"));
