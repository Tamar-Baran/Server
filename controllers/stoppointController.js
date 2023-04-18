const db = require('../models/index')
const Stoppoint=db.stoppoint


const getAllStoppoints = async (req, res) => {
    console.log("db", db)
    const stoppoint = await Stoppoint.findAll({})

    // If no notes 
    if (!stoppoint?.length) {
        return res.status(400).json({ message: 'No stoppoint found' })
    }

    res.json(stoppoint)
}
const AddStopPoint=async(req,res)=>{
    const {lessonId,questionId} = req.body
    userId=req.user.userId;
    
    if (!lessonId || !questionId) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const exist = await Stoppoint.findOne({ where: { userId: userId,lessonId:lessonId} })      
    if (exist) {
        const ex = await Stoppoint.update({questionId:questionId},{where:{ userId: userId,lessonId:lessonId} })
        res.json(ex)
   }
   else 
   {
    console.log("I came Here")
    const stop = await Stoppoint.create({ userId,lessonId, questionId})
    res.json(stop)
   }
}
module.exports = {
    getAllStoppoints,
    AddStopPoint,
}