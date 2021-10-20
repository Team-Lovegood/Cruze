const LanguageController = require("./languages.controller");
const router = require("express").Router();

router.get("/:language", LanguageController.getLanguagePackages);

module.exports = router;
