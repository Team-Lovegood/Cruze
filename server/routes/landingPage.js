var promise = require('../models/landingPage.js');
var router = require('express').Router();

router.get('/profile', promise.Login);
router.post('/rider', promise.RiderSignup);
router.post('/driver', promise.DriverSignup);


module.exports = router;