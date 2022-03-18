const Rol = require('./rol.schema');

const getRol = async (idRol) => {
  const data = await Rol.findOne({ idRol });
  console.log(data.rol);
  return data;
};

module.exports = { getRol };
