const { sequelize, DataTypes } = require("./sequelize");

    const useranswer = sequelize.define(
      "useranswer",
      {
        useranswersId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        correctAnswers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
      timestamps: false,
    }
    );
  
    module.exports =useranswer;

  