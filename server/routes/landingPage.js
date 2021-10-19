var promise = require('../models/landingPage.js');
var router = require('express').Router();

router.get('/profile', promise.Login);
router.post('/riders', promise.RiderSignup);
router.post('/drivers', promise.DriverSignup);


module.exports = router;