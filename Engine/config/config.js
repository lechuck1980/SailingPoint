//require("dotenv").config();


module.exports = {
    PORT: +process.env.PORT,
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    DIALECT: process.env.DIALECT,
    DIALECTOPTIONS: {
        ENCRYPT: process.env.ENCRYPT
    },
    POOL: {//pool process.envuration
      MAX: +process.env.POOLMAX,//maximum number of connection in pool
      MIN: +process.env.POOLMIN,//minimum number of connection in pool
      ACQUIRE: +process.env.POOLACQUIRE,//maximum time in ms that pool will try to get connection before throwing error
      IDLE: +process.env.POOLIDLE//maximum time in ms, that a connection can be idle before being released
    },
    DEFINE: {
      TIMESTAMPS: +process.env.TIMESTAMPS
    }
  };