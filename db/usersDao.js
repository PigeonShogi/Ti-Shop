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