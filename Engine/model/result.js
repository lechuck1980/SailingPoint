const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("results", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      position: {
        type: DataTypes.INTEGER
      },
      scoring: {
        type: DataTypes.STRING
      },
      raceId: {
        type: DataTypes.INTEGER
      },
      crewId: {
        type: DataTypes.INTEGER
      }
    });
  
    return Result;
  };