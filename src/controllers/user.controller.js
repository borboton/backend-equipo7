const {
  getUser,
  postUser,
  getUserRol,
  getUserById,
  saveUser,
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
    const rol = await getRol(await getUserRol({ userFile }));
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ code: 404, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
  }
}

async function getUserCoursesController(req, res) {
  const userFile = req.params.id;
  try {
    const courses = await getCourses(
      await getUserCourses(await getUserRol({ userFile }))
    );
    if (courses) {
      res.status(200).json(courses);
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
    const software = await getSoftware(
      await getUserSoftware(await getUserRol({ userFile }))
    );
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
  const user = await getUserById(id);
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
module.exports = {
  getUserController,
  postUserController,
  getRolUserController,
  getUserCoursesController,
  getUserSoftwareController,
  postAddRolUserController,
};
