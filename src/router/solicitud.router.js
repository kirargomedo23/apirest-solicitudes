const express = require("express");
const router = express.Router();
const { create, update } = require("@controllers/solicitud.controller.js");

router.post("/", create);
router.put("/:id", update);

module.exports = router;
