const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("countries", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      twochar:{
        type: DataTypes.STRING
      },
      threechar : {
        type: DataTypes.STRING
      }
    });
  
    return Country;
  };