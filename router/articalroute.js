const express = require("express");
const router = express.Router();
const artical = require("../controller/artical");
const protect = require("../controller/registration");

router.post(
  "/insert",
  protect.protect,
  //   protect.restrict("user"),
  artical.articalInsert
);
router.get("/get", artical.getArtical);
router.delete("/deleteOne", artical.deleteOneArtical);

module.exports = router;
