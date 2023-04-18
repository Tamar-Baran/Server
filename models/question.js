const { sequelize, DataTypes } = require("./sequelize");
    const question = sequelize.define(
      "question",
      {
        questionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        questionText: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        lessonId: {
            type: DataTypes.INTEGER,
            allowNull: false,

        }
    },
    {
      timestamps: false,
    }
    );
  
    module.exports = question;
 
  