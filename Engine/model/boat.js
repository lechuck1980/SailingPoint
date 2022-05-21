const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Boat = sequelize.define("boats", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      sailnumber:{
        type: DataTypes.STRING
      },
      classId: {
        type: DataTypes.INTEGER
      }
    });
  
    return Boat;
  };