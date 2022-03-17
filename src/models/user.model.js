const User = require('./user.schema');

const getUser = async (userFile) => {
  const data = await User.findOne({ userFile });
  console.log(data.rol);
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

module.exports = { getUser, postUser, getUserRol };
