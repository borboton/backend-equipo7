const User = require('./user.schema');

const getUser = async (userFile) => {
  const data = await User.findOne({ userFile });
  console.log(data.rol);
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

module.exports = { getUser, postUser, getUserRol, getUserById, saveUser };
