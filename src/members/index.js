const core = require('../core');

/**
 * Get's a list of Members in a section
 * @param {int} sectionid Section ID
 * @param {int} termid Term ID
 */
module.exports.getMembers = async (sectionid, termid = -1) => {
  const parts = [];
  const out = await core.performQuery(`/ext/members/contact/?action=getListOfMembers&sort=dob&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
};

/**
 * Get's Member Details
 * @param {int} sectionid Section ID
 * @param {int} memberid Member ID
 */
module.exports.getMemberDetails = async (sectionid, memberid) => {
  const parts = [];
  parts.associated_id = memberid;
  parts.associated_type = 'member';
  const out = await core.performQuery(`/ext/customdata/?action=getData&section_id=${sectionid}`, parts);
  return out;
};

/**
 * Get's Attendance
 * @param {int} sectionid Section ID
 * @param {int} termid Term ID
 */
module.exports.getAttendance = async (sectionid, termid) => {
  const parts = [];
  const out = await core.performQuery(`/ext/members/attendance/?action=get&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
};