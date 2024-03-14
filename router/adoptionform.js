const express = require("express");
const router = express.Router();
const adoptionFrom = require("../controller/adoptionform");
const protect = require("../controller/registration");

router.get("/get", adoptionFrom.getFrom);
router.get("/getSingle/:id", adoptionFrom.getSingleFrom);
router.post("/insert", adoptionFrom.formInsert);
router.delete("/deleteSingle/:id", adoptionFrom.deleteSinglepet);

module.exports = router;
