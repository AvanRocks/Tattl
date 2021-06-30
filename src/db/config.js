// set config for production (heroku).
// for dev environment, env variables are used
let config = {};
if (process.env.NODE_ENV === "produdction") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

module.exports = config;
