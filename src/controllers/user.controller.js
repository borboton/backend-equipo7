const { getUsers, postUser } = require('../models/user.model');

async function getUsersController(req, res) {
  const users = await getUsers();
  if (users) {
    res.json(users);
  } else {
    res.json('sin usuarios');
  }
}

async function postUserController(req, res) {
  const { name, password } = req.body;
  const data = {
    name,
    password,
  };
  const users = await postUser(data);
  if (users) {
    res.json(users);
  } else {
    res.json('sin usuarios');
  }
}

module.exports = {
  getUsersController,
  postUserController,
};
