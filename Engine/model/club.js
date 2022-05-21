const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define("clubs", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      shortname:{
        type: DataTypes.STRING
      },
      address : {
        type: DataTypes.STRING
      },
      countryId: {
        type: DataTypes.INTEGER
      },
      state: {
        type: DataTypes.STRING
      },
      city:{
        type: DataTypes.STRING
      }
    });
  
    return Club;
  };