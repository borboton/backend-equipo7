const Rol = require('./rol.schema');

const getRol = async (id) => {
  const data = await Rol.findById({ _id: id });
  return data;
};

const getUserCourses = async (id) => {
  const { courses } = await Rol.findById({ _id: id });
  return courses;
};

const getUserSoftware = async (id) => {
  const { softwareAccess } = await Rol.findById({ _id: id });
  return softwareAccess;
};

module.exports = {
  getRol,
  getUserCourses,
  getUserSoftware,
};
