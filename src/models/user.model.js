const User = require('./user.schema');

const getUser = async (userFile) => {
  const data = await User.findOne({ userFile });
  return data;
};
const getUserById = async (id) => {
  const data = await User.findById({ _id: id });
  console.log(data.rol);
  return data;
};
const saveUser = async (user) => {
  const data = await user.save();
  return data;
};

const postUser = async (data) => {
  const dataUser = await User.create(data);
  return dataUser;
};

const getUserRol = async (userFile) => {
  const { rol } = await User.findOne(userFile);
  return rol;
};

const getAllUsers = async () => {
  const response = await User.find();
  return response;
};

const updateUser = async (userFile, newData) => {
  const response = await User.updateOne(userFile, newData);
  return response;
};

const deleteUser = async (userFile) => {
  const response = await User.remove(userFile);
  return response;
};

const updateRolUser = async (userFile, rolId) => {
  const response = await User.updateOne(userFile, rolId);
  return response;
};

const deleteRolUser = async (userFile, rolId) => {
  const response = await User.updateOne(userFile, rolId);
  return response;
};

module.exports = {
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
  postUser,
  getUserRol,
  getUserById,
  saveUser,
  updateRolUser,
  deleteRolUser,
};
