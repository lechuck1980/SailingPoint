const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Crew = sequelize.define("crews", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      clubId: {
        type: DataTypes.INTEGER
      },
      boatId: {
        type: DataTypes.INTEGER
      },
      skipperId: {
        type: DataTypes.INTEGER
      },
      mainsailtrimmerId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      headsailtrimmer1Id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      headsailtrimmer2Id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bowmanId: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  
    return Crew;
  };