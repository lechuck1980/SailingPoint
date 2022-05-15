const dotenv=  require('dotenv')
const assert = require('assert')

dotenv.config();

const {AUTH_ALGORITHMS, AUTH_AUDIENCE, AUTH_CACHE, AUTH_DOMAIN, AUTH_RATE, AUTH_REQMINUTE, PORT, HOST, HOST_URL, SQL_USER, SQL_PWD, SQL_DATABASE, SQL_SERVER, SQL_ENCRYPT, SQL_TRUSTCERTIFICATE } = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,

    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PWD,
        options: {
            encrypt: SQL_ENCRYPT === "true",
            trustServerCertificate: SQL_TRUSTCERTIFICATE === "true"
        }
    }
}