const knex = require("./db");

async function fetchUsers() {
  try {
    const users = await knex.select("*").from("users");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    await knex.destroy();
  }
}

module.exports = {
  fetchUsers,
};

/*
mkdir db
touch db/db.js
touch db/productsDao.js
touch db/usersDao.js

編輯或改寫 db/db.js、config/config.json
*/ 