const core = require('../core');

/**
 * Get's a summary of Programmes in a given term or all terms
 * @param {int} sectionid Section ID
 * @param {int} termid Term ID
 */
module.exports.getProgrammeSummary = async (sectionid, termid = -1) => {
  const parts = [];
  const out = await core.performQuery(`/ext/programme/?action=getProgrammeSummary&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
};
