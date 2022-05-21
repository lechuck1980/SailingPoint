
const databaseConfig = require("../config/database_config.js");

const Sequelize = require("sequelize");
const sequelizeInstance = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  },
  define: {
    timestamps: false
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeInstance;

db.regattas = require("./regatta.js")(sequelizeInstance, Sequelize);
db.boats = require("./boat.js")(sequelizeInstance, Sequelize);
db.classes = require("./class.js")(sequelizeInstance, Sequelize);
db.clubs = require("./club.js")(sequelizeInstance, Sequelize);
db.countries = require("./country.js")(sequelizeInstance, Sequelize);
db.crews = require("./crew.js")(sequelizeInstance, Sequelize);
db.fleets = require("./fleet.js")(sequelizeInstance, Sequelize);
db.races = require("./race.js")(sequelizeInstance, Sequelize);
db.regattas = require("./regatta.js")(sequelizeInstance, Sequelize);
db.results = require("./result.js")(sequelizeInstance, Sequelize);
db.sailors = require("./sailor.js")(sequelizeInstance, Sequelize);
db.users = require("./user.js")(sequelizeInstance, Sequelize);


module.exports = db;