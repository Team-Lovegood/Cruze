var promise = require('../models/landingPage.js');
var router = require('express').Router();

router.get('/', promise.Login);


module.exports = router;