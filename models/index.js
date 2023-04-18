const {Sequelize} = require('sequelize');
const {sequelize} = require('./sequelize');
 const { applyExtraSetup } = require('./extra_setup');



const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
//********************MODELS*************************//
db.lesson = require('./lesson')
db.level = require('./level')
db.question = require('./question')
db.optionalanswers = require('./optionalanswers')
db.useranswer = require('./useranswer')
db.stoppoint = require('./stoppoint')
db.achievements = require('./achievements')
db.user = require('./user')

//********************END MODELS*********************//

 applyExtraSetup();


db.sequelize.sync({ force: false })
    .then(() => {
console.log('yes re-sync done!')
})
module.exports = db
