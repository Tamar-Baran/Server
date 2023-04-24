const db = require('../models/index')
const Lesson=db.lesson


const getAllLessons = async (req, res) => {
    console.log("db", db)
    const lesson = await Lesson.findAll({})

    // If no notes 
    if (!lesson?.length) {
        return res.status(400).json({ message: 'No lesson found' })
    }

    res.json(lesson)
}

const getName= async  (req, res) => {
    if(req.user){
    const data=await Lesson.findAll({ attributes: ['lessonId','name'] ,where: {lessonType: req.params.type, levelId:req.user.levelId}});
   if (!data) {
        return res.status(400).json({ message: 'No ' })
    }
    res.json(data)}
    else{
        const data=await Lesson.findAll({ attributes: ['lessonId','name'] ,where: {lessonType: req.params.type, levelId:1}});
        if (!data) {
             return res.status(400).json({ message: 'No ' })
         }
         res.json(data)}  
}


const getname= async  (req, res) => {
    
    const data=await Lesson.findAll({ attributes: ['lessonId','name'] ,where: {lessonType: req.params.type, levelId:1}});
   if (!data) {
        return res.status(400).json({ message: 'No ' })
    }
    res.json(data)
}
const getLessonContent= async  (req, res) => {
    const data=await Lesson.findOne({ attributes: ['lessonContent'] ,where: {lessonId: req.params.lessonId}});
   if (!data) {
        return res.status(400).json({ message: 'No ' })
    }
    res.json(data)
}

const getLessonsById= async (req, res) => {
    const Idlesson=await Lesson.findOne({ where: { lessonId: parseInt(req.params.id) } });;
    if (!Idlesson) {
        return res.status(400).json({ message: 'No ' })
    }

    res.json(Idlesson)
}

const getLessonsBylevelId=async (req, res) => {
    const lessonBylevel=await Lesson.findAll({ where: { levelId: parseInt(req.params.id) } });;
    if (!lessonBylevel) {
        return res.status(400).json({ message: 'No ' })
    }

    res.json(lessonBylevel)
}

const getLessonsBylessonType=async (req, res) => {
    console.log(req.user.levelId)
const lessonBylessonType=await Lesson.findAll({ where: { lessonType: req.params.type,levelId:req.user.levelId }});;
    if (!lessonBylessonType) {
        return res.status(400).json({ message: 'No ' })
    }

    res.json(lessonBylessonType)
}

const createLesson= async (req, res) => {
    const { name,levelId, lessonType, lessonContent} = req.body

    // Confirm data
    if (!name || !levelId || !lessonType) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const lesson = await Lesson.create({ name,levelId, lessonType, lessonContent })

    if (lesson) { // Created 
        return res.status(201).json({ message: 'New note created' })
    } else {
        return res.status(400).json({ message: 'Invalid note data received' })
    }

}

const updatelesson= async (req, res) => {
    
    const { lessonId,name,levelId, lessonType, lessonContent} = req.body
    if (!lessonId || !name || !levelId || !lessonType) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const lesson = await Lesson.update({lessonId,name,levelId, lessonType, lessonContent},{where:{lessonId:parseInt(req.params.id)}})

    console.log(lesson)
    if (!lesson) {
        return res.status(400).json({ message: 'lesson not found' })
    }


    res.json(lesson)
}

const deleteLesson = async (req, res) => {
    const { lessonId } = req.body
    console.log(lessonId)

    // Confirm data
    if (!lessonId) {
        return res.status(400).json({ message: 'lesson ID required' })
    }
    await Lesson.destroy({
        where: {
            lessonId: parseInt(req.params.id)
        }
    });
    res.json( `lesson  with ID ${lessonId} deleted`)
}

module.exports = {
    getname,
    getAllLessons,
    getLessonsById,
    getLessonsBylevelId,
    getLessonsBylessonType,
    createLesson,
    updatelesson,
    deleteLesson,
    getName,
    getLessonsBylessonType,
    getLessonContent,
}