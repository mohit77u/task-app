const express = require('express');
const router = express.Router();
const passport = require('passport');
const frontendController = require('../controllers/frontendController');

router.get('/', passport.checkAuthentication,frontendController.home);

router.use('/', require('./users'));
router.use('/', require('./task'));

module.exports = router;