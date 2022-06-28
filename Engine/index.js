

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyparser = require('body-parser');
//const config = require("./config/config.js");

const app = express();

app.use(helmet());

app.disable('x-powered-by')

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("combined"));

const apiversion = '/api';
const regattaRoute = require("./route/regatta.js");
const boatRoute = require('./route/boat.js');
const classRoute = require('./route/class.js');
const clubRoute = require('./route/club.js');
const countryRoute = require('./route/country.js');
const crewRoute = require('./route/crew.js');
const fleetRoute = require('./route/fleet.js');
const raceRoute = require('./route/race.js');
const resultRoute = require('./route/result.js');
const sailorRoute = require('./route/sailor.js');
const userRoute = require('./route/user.js');


app.use(apiversion, regattaRoute.routes);
app.use(apiversion, boatRoute.routes);
app.use(apiversion, classRoute.routes);
app.use(apiversion, clubRoute.routes);
app.use(apiversion, countryRoute.routes);
app.use(apiversion, crewRoute.routes);
app.use(apiversion, fleetRoute.routes);
app.use(apiversion, raceRoute.routes);
app.use(apiversion, resultRoute.routes);
app.use(apiversion, sailorRoute.routes);
app.use(apiversion, userRoute.routes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});