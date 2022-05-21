const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Fleet = sequelize.define("fleets", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return Fleet;
  };