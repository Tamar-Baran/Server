const { sequelize, DataTypes } = require("./sequelize");

    const optionalanswers = sequelize.define(
      "optionalanswers",
      {
        optionalAnswerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        answerText: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isCorrect:{
          type: DataTypes.BOOLEAN,
          allowNull:false,
        }
        ,
    },
    {
      timestamps: false,
    }
    );
  
    module.exports =optionalanswers;

  