const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const usersConrtoller = require('../controllers/users_controller');
//console.log("router loaded");
//-------------------3rd step----------------
router.get('/profile', usersConrtoller.profile);

module.exports = router;
