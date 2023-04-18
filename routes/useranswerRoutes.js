const express = require("express");
const router = express.Router();
const optionalanswersController = require("../controllers/useranswerController")

router.route('/')
    .get(optionalanswersController.getAllUseranswer)
   


module.exports = router