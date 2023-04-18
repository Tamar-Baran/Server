const db = require('../models/index')
const Useranswer=db.useranswer


const getAllUseranswer = async (req, res) => {
    console.log("db", db)
    const useranswer = await Useranswer.findAll({})

    // If no notes 
    if (!useranswer?.length) {
        return res.status(400).json({ message: 'No optionalanswers found' })
    }

    res.json(useranswer)
}
module.exports = {
    getAllUseranswer,
}