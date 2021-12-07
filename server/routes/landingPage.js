var promise = require('../models/landingPage.js');
var router = require('express').Router();
const LanguageController = require("../languages/languages.controller");

router.get("/profile", promise.Login);
router.post("/riders", promise.RiderSignup);
router.post("/drivers", promise.DriverSignup);
router.get("/test", (req, res) => res.send("test hello"));
router.get("/languages/:language", LanguageController.getLanguagePackages);

module.exports = router;
