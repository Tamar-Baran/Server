const { sequelize, DataTypes } = require("./sequelize");    
const achievements = sequelize.define(
      "achievements",
      {
        achievementId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        lessonId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    
        
    },
    {
      timestamps: false,
    }
    );
  
    module.exports =achievements
  