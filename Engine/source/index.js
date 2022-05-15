

const express = require('express');
const config  = require('./config');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const https = require('https')
const fs = require('fs')
const regattaRoute = require('./routes/regattaRoute');
const boatRoute = require('./routes/boatRoute');
const userRoute = require('./routes/userRoute');
const classRoute = require('./routes/classRoute');
const clubRoute = require('./routes/clubRoute');
const crewRoute = require('./routes/crewRoute');
const fleetRoute = require('./routes/fleetRoute');
const countryRoute = require('./routes/countryRoute');
const raceRoute = require('./routes/raceRoute');
const sailorRoute = require('./routes/sailorRoute');
const resultRoute = require('./routes/resultRoute');
const authRoute = require('./routes/authRoute');




const app = express();

// var jwt = require('express-jwt');
// var jwks = require('jwks-rsa');

app.use(helmet());

app.disable('x-powered-by')

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("combined"));

// var jwtCheck = jwt.expressjwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-tqnxvhxz.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://sailingpoint-api',
//   issuer: 'https://dev-tqnxvhxz.us.auth0.com/',
//   algorithms: ['RS256']
// });

app.use('/api', authRoute.routes);

//app.use(jwtCheck);

app.use('/api', regattaRoute.routes);
app.use('/api', boatRoute.routes);
app.use('/api', userRoute.routes);
app.use('/api', classRoute.routes);
app.use('/api', clubRoute.routes);
app.use('/api', crewRoute.routes);
app.use('/api', countryRoute.routes);
app.use('/api', fleetRoute.routes);
app.use('/api', raceRoute.routes);
app.use('/api', sailorRoute.routes);
app.use('/api', resultRoute.routes);

const httpsOptions = {
    key: fs.readFileSync('C:/Users/lucia/source/repos/SailingPoint/source/security/cert.key'),
    cert: fs.readFileSync('C:/Users/lucia/source/repos/SailingPoint/source/security/cert.pem')
}
const server = https.createServer(httpsOptions, app)
    .listen(config.port, () => {
        console.log('Server running https at ' + config.port)
    })
//app.listen(config.port, () => console.log("Server is listening on port " + config.port));
