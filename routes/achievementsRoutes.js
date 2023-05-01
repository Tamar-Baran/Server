const express = require("express");
const router = express.Router();
const achievementsController = require("../controllers/achievementsController")
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .get(achievementsController.getAllAchievements)

router.route('/grades')
    .get(verifyJWT,achievementsController.getAllGrades)
    
router.route('/grades/:lessonId')
    .get(verifyJWT,achievementsController.getGradeByLessonId)


module.exports = router