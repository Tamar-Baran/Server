const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController")

router.route('/')
    .get(questionController.getAllquestions)
    .post(questionController.createQuestion)


router.route('/lessonId/:id')
    .get(questionController.getQuestionsByLessonId)

router.route('/questionId/:id')
    .delete(questionController.deleteQuestion)

module.exports = router