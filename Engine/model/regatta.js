const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Regatta = sequelize.define("regattas", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      startdate:{
        type: DataTypes.DATE
      },
      enddate: {
        type: DataTypes.DATE
      },
      clubId: {
        type: DataTypes.INTEGER
      }
    });
  
    return Regatta;
  };