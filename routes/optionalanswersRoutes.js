const express = require("express");
const router = express.Router();
const optionalanswersController = require("../controllers/optionalanswersController")

router.route('/')
    .get(optionalanswersController.getAllOptionalanswers)


module.exports = router