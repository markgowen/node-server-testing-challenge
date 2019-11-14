const db = require("../../data/dbConfig");

module.exports = {
  find,
  insert,
  remove,
  findById
};

async function find() {
  return db("users");
}

async function insert(user) {
  return null;
}

async function remove(id) {
  return null;
}

async function findById(id) {
  return null;
}
