const db = require('../models/index')
const Optionalanswers=db.optionalanswers


const getAllOptionalanswers = async (req, res) => {
    console.log("db", db)
    const optionalanswers = await Optionalanswers.findAll({})

    // If no notes 
    if (!optionalanswers?.length) {
        return res.status(400).json({ message: 'No optionalanswers found' })
    }

    res.json(optionalanswers)
}
module.exports = {
    getAllOptionalanswers,
}