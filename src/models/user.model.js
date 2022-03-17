const User = require('./user.schema');

const getUser = async () => {
  const data = await User.find();
  return data;
};
const postUser = async (data) => {
  const dataUser = await User.create(data);
  return dataUser;
};
module.exports = { getUser, postUser };
