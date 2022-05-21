const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Race = sequelize.define("races", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      regattaId: {
        type: DataTypes.INTEGER
      },
      fleetId: {
        type: DataTypes.INTEGER
      },
      classId: {
        type: DataTypes.INTEGER
      }
    });
  
    return Race;
  };