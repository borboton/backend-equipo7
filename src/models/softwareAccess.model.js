const SoftwareAccess = require('./softwareAccess.schema');

async function getSoftware(software) {
  const response = await SoftwareAccess.find({ software });
  return response;
}

async function getSoftwareById(id) {
  const response = await SoftwareAccess.findById({ _id: id });
  return response;
}

async function postSoftware(softwareBody) {
  const response = await SoftwareAccess.create(softwareBody);
  return response;
}

async function putSoftwareById(rol) {
  const response = await rol.save();
  return response;
}

async function deleteSoftwareById(id) {
  const response = await SoftwareAccess.remove({ _id: id });
  return response;
}

module.exports = {
  getSoftware,
  getSoftwareById,
  postSoftware,
  putSoftwareById,
  deleteSoftwareById,
};
