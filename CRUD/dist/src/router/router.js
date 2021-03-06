"use strict";
var express = require("express");
var router = express.Router();
var controller = require("../controller/controller");
router.post("/", controller.addStud);
router.get("/", controller.getAllStud);
router.get("/:id", controller.getIndividualStud);
router.put("/:id", controller.updateIndividualStud);
router.delete("/:id", controller.deleteIndividualStud);
module.exports = router;
