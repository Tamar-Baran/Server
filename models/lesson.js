const { sequelize, DataTypes } = require("./sequelize");
    const lesson = sequelize.define(
      "lesson",
      {
        lessonId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        levelId: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        lessonType: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        lessonContent: {
            type: DataTypes.JSON, 
            allowNull: true,
        }
      },
      {
        timestamps: false,
      }
    );
  
    module.exports = lesson;
  
  