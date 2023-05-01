const express = require("express");
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const lessonsController = require("../controllers/lessonController")


router.route('/')
    .get(verifyJWT,lessonsController.getAllLessons)
    .post(verifyJWT,lessonsController.createLesson)
   

router.route('/lessonId/:id')
    .get(lessonsController.getLessonsById)
    .put(verifyJWT,lessonsController.updatelesson)
    .delete(verifyJWT,lessonsController.deleteLesson)

router.route('/lessonContent/:lessonId')
    .get(lessonsController.getLessonContent)

router.route('/levelId/:id')
    .get(verifyJWT,lessonsController.getLessonsBylevelId)


router.route('/lessonType/:type')
    .get(verifyJWT,lessonsController.getLessonsBylessonType)
  


    
router.route('/displayItem/:type')    
    .get(lessonsController.getName)
module.exports = router