const core = require('../core');

/**
 * Get's a summary of Events in a given term or all terms
 * @param {int} sectionid Section ID
 * @param {int} termid Term ID (Optional)
 */
module.exports.getEventsSummary = async (sectionid, termid = -1) => {
  const parts = [];
  const out = await core.performQuery(`/ext/events/summary/?action=get&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
};

/**
 * Get's structure & parameters of a given Events
 * @param {int} sectionid Section ID
 * @param {int} eventid Event ID
 */
module.exports.getEventStructure = async (sectionid, eventid) => {
  const parts = [];
  const out = await core.performQuery(`/ext/events/event/?action=getStructureForEvent&sectionid=${sectionid}&eventid=${eventid}`, parts);
  return out;
};

/**
 * Get's attendance of a given Event
 * @param {int} sectionid Section ID
 * @param {int} eventid Event ID
 * @param {int} termid Term ID
 */
module.exports.getEventAttendance = async (sectionid, eventid, termid) => {
  const parts = [];
  const out = await core.performQuery(`/ext/events/event/?action=getAttendance&eventid=${eventid}&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
};
