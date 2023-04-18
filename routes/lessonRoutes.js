const express = require("express");
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const lessonsController = require("../controllers/lessonController")


router.route('/')
    .get(verifyJWT,lessonsController.getAllLessons)
    .post(verifyJWT,lessonsController.createLesson)
   

router.route('/lessonId/:id')
    .get(lessonsController.getLessonsById)
    .put(lessonsController.updatelesson)
    .delete(lessonsController.deleteLesson)


router.route('/levelId/:id')
    .get(verifyJWT,lessonsController.getLessonsBylevelId)


router.route('/lessonType/:type')
    .get(verifyJWT,lessonsController.getLessonsBylessonType)


    
router.route('/displayItem/:type')
    .get(verifyJWT,lessonsController.getGradeAndName)

module.exports = router