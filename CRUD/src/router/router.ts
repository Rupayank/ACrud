const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/", controller.addStud);
// router.get("/", controller.getAllStud);
router.get("/:id", controller.getIndividualStud);
router.put("/:id", controller.updateIndividualStud);
router.delete("/:id", controller.deleteIndividualStud);

module.exports = router;
