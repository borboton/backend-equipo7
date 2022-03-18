const mongoose = require('mongoose');
const {
  getUser,
  getAllUsers,
  updateRolUser,
  postUser,
  getUserRol,
  deleteRolUser,
  updateUserCourse,
  saveUser,
  updateUser,
  deleteUser,
} = require('../models/user.model');
const {
  getRol,
  getUserCourses,
  getUserSoftware,
} = require('../models/rol.model');
const { getCourses } = require('../models/courses.model');
const { getSoftware } = require('../models/softwareAccess.model');

async function getUserController(req, res) {
  const userFile = req.params.id;
  try {
    const user = await getUser(userFile);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ code: 404, message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
  }
}

async function postUserController(req, res) {
  const { name, password } = req.body;
  const data = {
    name,
    password,
  };
  try {
    const users = await postUser(data);
    if (users) {
      res.status(201).json(users);
    } else {
      res.status(409).json({ code: 409, message: 'Conflict' });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getRolUserController(req, res) {
  const userFile = req.params.id;
  try {
    const [rolId] = await getUserRol({ userFile });
    if (rolId) {
      const rol = await getRol(mongoose.Types.ObjectId(rolId.rolId));
      res.status(200).json(rol);
    } else {
      res.status(404).json({ code: 404, message: 'Rol not found' });
    }
  } catch (error) {
    res.status(404).json(error);
  }
}

async function getUserCoursesController(req, res) {
  const userFile = req.params.id;
  try {
    const [rol] = await getUserRol({ userFile });
    const [courses] = await getUserCourses(rol.rolId);
    const data = await getCourses(courses);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ code: 404, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
  }
}

async function getUserSoftwareController(req, res) {
  const userFile = req.params.id;
  try {
    const [rol] = await getUserRol({ userFile });
    const software = await getSoftware(await getUserSoftware(rol.rolId));
    if (software) {
      res.status(200).json(software);
    } else {
      res.status(404).json({ code: 404, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
  }
}
async function postAddRolUserController(req, res) {
  const { id, idRol } = req.params;
  const user = await getUser(id);
  const { _id } = await getRol(idRol);
  if (!_id) {
    return res.status(500).json({
      type: 'Rol not founded',
      msg: 'Invalid request',
    });
  }
  user.rol.push({
    rolId: _id,
  });
  const result = await saveUser(user);

  return res.status(201).json(result);
}

async function getUsersController(req, res) {
  const response = await getAllUsers();
  res.status(200).json(response);
}

async function putUserController(req, res) {
  const userFile = req.params.id;
  const { body } = req;
  const response = await updateUser({ userFile }, body);
  res.status(200).json(response);
}

async function deleteUserController(req, res) {
  const userFile = req.params.id;
  const response = await deleteUser({ userFile });
  res.status(200).json(response);
}

async function putRolUserController(req, res) {
  const { id, idRol } = req.params;
  const response = await updateRolUser(
    { id },
    { rol: [mongoose.Types.ObjectId(idRol)] }
  );
  res.status(200).json(response);
}

async function deleteRolUserController(req, res) {
  const { id } = req.params;
  const response = await deleteRolUser({ id }, { rol: [] });
  res.status(200).json(response);
}

module.exports = {
  putUserController,
  getUserController,
  postUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
  postAddRolUserController,
  getUsersController,
  deleteUserController,
  putRolUserController,
  deleteRolUserController,
};
