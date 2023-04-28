const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const homeController = require("../controllers/home_controller");
console.log("router loaded");
//-------------------3rd step----------------
router.get("/", homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

router.use('/api', require('./api'));

//for an further routes access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router;
