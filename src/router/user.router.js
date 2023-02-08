const express = require("express");
const router = express.Router();
const {
  create,
  getOne,
  update,
  remove,
} = require("@controllers/user.controller.js");

router.post("/", create);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
