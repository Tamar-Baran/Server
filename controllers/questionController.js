const { question } = require('../models/index')
const db = require('../models/index')
const Question=db.question
const Optionalanswers=db.optionalanswers

const getAllquestions = async (req, res) => {
    console.log("db", db)
    const question = await Question.findAll({})

    // If no notes 
    if (!question?.length) {
        return res.status(400).json({ message: 'No question found' })
    }

    res.json(question)
}

const getQuestionsByLessonId= async (req, res) => {
    const questionById=await Optionalanswers.findAll({
        attributes:["optionalAnswerId","questionId","answerText","isCorrect"],
        include:[{model:Question,as:'question_Id',where: { lessonId: parseInt(req.params.id) }}],
         /*where: { lessonId: parseInt(req.params.id) } */
        //where:{questionId:}
        });
    if (!questionById) {
        return res.status(400).json({ message: 'No ' })
    }

    res.json(questionById)
}

const createQuestion= async (req, res) => {
    const { questionId,questionText, lessonId} = req.body

    // Confirm data
    if (!lessonId || !questionId ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const question = await Question.create({ questionId,questionText, lessonId})

    if (question) { // Created 
        return res.status(201).json({ message: 'New question created' })
    } else {
        return res.status(400).json({ message: 'Invalid question data received' })
    }

}

const deleteQuestion = async (req, res) => {
    const { questionId } = req.body
    console.log(questionId)

    // Confirm data
    if (!questionId) {
        return res.status(400).json({ message: 'question ID required' })
    }
    await Question.destroy({
        where: {
            questionId: parseInt(req.params.id)
        }
    });
    console.log(parseInt(req.params.id))
    res.json( `question  with ID ${questionId} deleted`)
}

module.exports = {
    getAllquestions,
    createQuestion,
    getQuestionsByLessonId,
    deleteQuestion,
}