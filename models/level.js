const { sequelize, DataTypes } = require("./sequelize");
    const level = sequelize.define(
      "level",
      {
        levelId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        levelName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

       
    },
    {
      timestamps: false,
    }
    );
  
    module.exports =level;
  
  