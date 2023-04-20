const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const homeController = require("../controllers/home_controller");
console.log("router loaded");
//-------------------3rd step----------------
router.get("/", homeController.home);

module.exports = router;
