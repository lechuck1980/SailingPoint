const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      sailorId: {
        type: DataTypes.INTEGER
      },
      clubId: {
        type: DataTypes.INTEGER
      }
    });
  
    return User;
  };