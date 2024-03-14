const express = require("express");
const router = express.Router();
const Shopping = require("../controller/Shopping");
// const protect = require("../controller/registration");

router.post(
  "/insert",
  // protect.protect,
  // protect.restrict("admin", "user"),
  Shopping.itemInsert
);
router.get(
  "/get",
  // protect.protect,
  // protect.restrict("admin", "user"),
  Shopping.getitem
);
router.delete(
  "/deleteOne",

  Shopping.deleteOneitem
);

module.exports = router;
