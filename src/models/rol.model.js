const Rol = require('./rol.schema');

const getRol = async (id) => {
  const data = await Rol.findById({ _id: id });
  return data;
};

const getAllRols = async () => {
  const rols = await Rol.find();
  return rols;
};

const getUserCourses = async (id) => {
  const { courses } = await Rol.findById({ _id: id });
  return courses;
};

const getUserSoftware = async (id) => {
  const { softwareAccess } = await Rol.findById({ _id: id });
  return softwareAccess;
};

const postRol = async (rol) => {
  const response = await Rol.create(rol);
  return response;
};

const putRol = async (rol) => {
  const response = await rol.save();
  return response;
};

const deleteRol = async (id) => {
  const response = await Rol.remove({ _id: id });
  return response;
};

module.exports = {
  getRol,
  getUserCourses,
  getUserSoftware,
  getAllRols,
  postRol,
  putRol,
  deleteRol,
};
