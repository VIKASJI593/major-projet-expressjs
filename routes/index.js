const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const homeController = require("../controllers/home_controller");
console.log("router loaded");
//-------------------3rd step----------------
router.get("/", homeController.home);
router.use('/users', require('./users'));

//---------------------vikas controller----------------
//router.use('/', require('./vikas'));
//http://localhost:8000/mtu

router.use('/hum', require('./vikas'));
//http://localhost:8000/hum/mtu

//for an further routes access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router;
