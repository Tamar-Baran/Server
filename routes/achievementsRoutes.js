const express = require("express");
const router = express.Router();
const achievementsController = require("../controllers/achievementsController")
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .get(achievementsController.getAllAchievements)
router.route('/test')
    .get(verifyJWT,achievementsController.getTest)
router.route('/grades')
    .get(verifyJWT,achievementsController.getAllGrades)
router.route('/graph')
    .get(verifyJWT,achievementsController.getGradeAndDate)
     
router.route('/grades/:lessonId')
    .get(verifyJWT,achievementsController.getGradeByLessonId)


module.exports = router