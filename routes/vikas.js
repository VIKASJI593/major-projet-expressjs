const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const vikasController = require('../controllers/vikas_controller');
//console.log("router loaded");
//-------------------3rd step----------------
router.get('/mtu',vikasController.stu);

module.exports = router;
