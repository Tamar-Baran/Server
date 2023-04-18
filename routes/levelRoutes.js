const express = require("express");
const router = express.Router();
const levelController = require("../controllers/levelController")

router.route('/')
    .get(levelController.getAllLevels)
   


module.exports = router