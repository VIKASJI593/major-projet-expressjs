const express = require("express");

const router = express.Router();

//-----------------2nd step---------------
const usersController = require('../controllers/users_controller');
//console.log("router loaded");
//-------------------3rd step----------------
router.get('/profile', usersController.profile);


router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);

router.post('/create-session', usersController.createSession);
module.exports = router;
