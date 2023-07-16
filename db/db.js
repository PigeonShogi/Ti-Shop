const sqlConfig = require("../config/config.json");

const env = process.env.NODE_ENV || "development";

let knexConfig = {};

if (env === "production") {
  knexConfig = {
    client: sqlConfig[env].dialect,
    connection: process.env[sqlConfig[env].use_env_variable],
  };
} else {
  knexConfig = {
    client: sqlConfig[env].dialect,
    connection: {
      host: sqlConfig[env].host,
      user: sqlConfig[env].username,
      password: sqlConfig[env].password,
      database: sqlConfig[env].database,
      port: sqlConfig[env].port,
    },
  };
}

const knex = require("knex")(knexConfig);

module.exports = knex;
