const { sequelize, DataTypes } = require("./sequelize");

    const user = sequelize.define(
      "user",
      {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        levelId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:'1'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:false,
        },
      
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        permissionLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        wordsList: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
      timestamps: false,
    }
    );
  
    module.exports = user;
  
  