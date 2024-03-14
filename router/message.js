const express = require("express");
const router = express.Router();
const message = require("../controller/msaaging");

router.post("/insert", message.messageInsert);
router.get("/get", message.getmessage);
router.delete("/deleteOne", message.deleteOnemessage);

module.exports = router;
