const express = require("express");
const router = express.Router();
const stoppointController = require("../controllers/stoppointController")
const verifyJWT = require('../middleware/verifyJWT')
//router.use(verifyJWT)

router.route('/')
    .get(verifyJWT,stoppointController.getAllStoppoints)
    .post(verifyJWT,stoppointController.AddStopPoint)

module.exports = router