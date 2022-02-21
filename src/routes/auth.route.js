var express = require("express");
var router = express.Router();
const authController = require("..//controllers/auth.controller");
/* auth routes listening */

router.get("/login", authController.login);

module.exports = router;
