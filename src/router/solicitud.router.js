const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
} = require("@controllers/solicitud.controller.js");

router.post("/", create);
router.get("/:userId", getAll);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
