const { getUser, postUser, getUserRol } = require('../models/user.model');
const { getRol, getUserCourses, getUserSoftware } = require('./rol.controller');
const { getCourses } = require('./courses.controller');
const { getSoftware } = require('./softwareAccess.controller');

async function getUserController(req, res) {
  const userFile = req.params.id;
  const users = await getUser(userFile);
  if (users) {
    return res.status(200).json(users);
  }
  return res.json('sin usuarios');
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

async function getRolUserController(req, res) {
  const userFile = req.params.id;
  const rol = await getUserRol({ userFile });
  const data = await getRol(rol);
  return res.status(200).json(data);
}

async function getUserCoursesController(req, res) {
  const userFile = req.params.id;
  const rol = await getUserRol({ userFile });
  const courses = await getUserCourses(rol);
  const response = await getCourses(courses);
  return res.status(200).json(response);
}

async function getUserSoftwareController(req, res) {
  const userFile = req.params.id;
  const rol = await getUserRol({ userFile });
  const software = await getUserSoftware(rol);
  const response = await getSoftware(software);
  return res.status(200).json(response);
}

module.exports = {
  getUserController,
  postUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
};
