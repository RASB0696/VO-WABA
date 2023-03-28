const expres = require("express");
const router = expres.Router();
const whatsappcontroller = require("../controllers/whatsappcontrolles");

router
.get("/", whatsappcontroller.verifytoken)
.post("/", whatsappcontroller.receivedmessage)

module.exports = router;