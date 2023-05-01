const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const verifyJWT = require('../middleware/verifyJWT')


router.post('/register', userController.register)
router.post('/login', userController.login)

router.route('/wordsList')
    .get(verifyJWT,userController.getWordsList)
    .post(verifyJWT,userController.addword)
router.route('/level')
    .get(verifyJWT,userController.getMyLevel)

module.exports = router