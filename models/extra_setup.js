const { sequelize } = require("./sequelize");
const applyExtraSetup = () => {
    const { achievements, lesson, level,optionalanswers, question,stoppoint,useranswer,user } = sequelize.models;
    lesson.belongsTo(level, { foreignKey: "levelId", as: "level_Id" });
    question.belongsTo(lesson, { foreignKey: "lessonId", as: "lesson_Id" });
    achievements.belongsTo(user, { foreignKey: "userId", as: "user_Id" });
    achievements.belongsTo(lesson, { foreignKey: "lessonId", as: "lesson_Id" });
    stoppoint.belongsTo(lesson, { foreignKey: "lessonId", as: "lesson_Id" });
    stoppoint.belongsTo(user, { foreignKey: "userId", as: "user_Id" });
    optionalanswers.belongsTo(question, { foreignKey: "questionId", as: "question_Id" });
    useranswer.belongsTo(question, { foreignKey: "questionId", as: "question_Id" });
    useranswer.belongsTo(user, { foreignKey: "userId", as: "user_Id" });
    user.belongsTo(level, { foreignKey: "levelId", as: "level_Id" });
    stoppoint.belongsTo(question, { foreignKey: "questionId", as: "question_Id" });

};


module.exports = { applyExtraSetup }
