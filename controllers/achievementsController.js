const { achievements } = require('../models/index')
const db = require('../models/index')
const Achievements = db.achievements



const getAllAchievements = async (req, res) => {
    console.log("db", db)
    const achievements = await Achievements.findAll({})

    // If no notes 
    if (!achievements?.length) {
        return res.status(400).json({ message: 'No achievements found' })
    }

    res.json(achievements)
}

const getAllGrades = async (req, res) => {
    const grades = await Achievements.findAll({ where: { userId: req.user.userId } });
    res.json(grades)

}
const getGradeAndDate=async(req,res)=>{
    const data=await Achievements.findAll({ attributes: ['date','grade'] ,where: { userId: req.user.userId}});
    if (!data) {
         return res.status(400).json({ message: 'No ' })
     }
     res.json(data)
}
const getGradeByLessonId = async (req, res) => {
    const grade = await Achievements.findOne({ attributes: ['grade'], where: { lessonId: req.params.lessonId, userId: req.user.userId } });
    if (!grade)
        return res.json({ grade: 0 })
    console.log(grade);
    res.json(grade);
}



module.exports = {
    getAllAchievements,
    getAllGrades,
    getGradeByLessonId,
    getGradeAndDate
}
