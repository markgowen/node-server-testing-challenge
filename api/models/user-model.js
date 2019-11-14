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
  return db('users')
    .insert(user)
    .then(ids => {
      return db('users').where({ id: ids[0] }).first();
    })
}

async function remove(id) {
  return null;
}

async function findById(id) {
  return null;
}
