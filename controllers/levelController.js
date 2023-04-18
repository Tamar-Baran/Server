const db = require('../models/index')
const Level=db.level


const getAllLevels = async (req, res) => {
    console.log("db", db)
    const level = await Level.findAll({})

    // If no notes 
    if (!level?.length) {
        return res.status(400).json({ message: 'No level found' })
    }

    res.json(level)
}

module.exports = {
    getAllLevels,
}