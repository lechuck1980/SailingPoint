const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Sailor = sequelize.define("sailors", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      surname: {
        type: DataTypes.STRING
      },
      sex: {
        type: DataTypes.STRING
      },
      borndate: {
        type: DataTypes.DATE
      },
      address: {
        type: DataTypes.STRING
      },
      countryId: {
        type: DataTypes.INTEGER
      },
      state: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      }
    });
  
    return Sailor;
  };