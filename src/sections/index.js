const core = require('../core');

/**
 * Get's a list of all sections registered on OSM nationally
 */

module.exports.getSectionsNationally = async () => {
  const parts = [];
  const out = await core.performQuery('/ext/members/sectionplanning/?action=listSections', parts);
  return out;
};
