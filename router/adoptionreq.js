const express = require("express");
const router = express.Router();
const adoptionFrom = require("../controller/AdoptionRequest");
const protect = require("../controller/registration");

router.get("/get", adoptionFrom.getrequest);
router.post("/insert", adoptionFrom.postrequest);
router.delete("/deleteSingle/:id", adoptionFrom.deleterequest);
router.post("/success/:id", adoptionFrom.requestsuccess);
router.post("/reject/:id", adoptionFrom.requestreject);

module.exports = router;
