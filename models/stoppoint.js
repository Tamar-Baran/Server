const { sequelize, DataTypes } = require("./sequelize");

    const stoppoint = sequelize.define(
      "stoppoint",
      {
        stopPointId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lessonId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    },
    {
      timestamps: false,
    }
    );
  
    module.exports = stoppoint;
  
  