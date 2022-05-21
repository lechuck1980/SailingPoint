const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("classes", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return Class;
  };