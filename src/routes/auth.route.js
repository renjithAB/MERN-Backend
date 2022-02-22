var express = require("express");
var router = express.Router();
const authController = require("..//controllers/auth.controller");
const validate = require("../middleware/validate");
const authValidator = require("../validators/auth.validator");
/* auth routes listening */

router.post("/login", validate(authValidator.login), authController.login);
router.post("/register", authController.register);

module.exports = router;
