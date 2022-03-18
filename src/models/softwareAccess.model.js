const SoftwareAccess = require('./softwareAccess.schema');

async function getSoftware(software) {
  const response = await SoftwareAccess.find({ software });
  return response;
}

module.exports = {
  getSoftware,
};
