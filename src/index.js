const core = require('./core');
const terms = require('./terms');
const members = require('./members');
const programme = require('./programme');
const events = require('./events');

const { log } = console;
/**
 * Obtain these from OSM Support
 */
core.apiid = '<API-ID>';
core.token = '<API-TOKEN>';

/**
 *  Your OSM username and password
 */
core.email = '<EMAIL>';
core.password = '<PASSWORD>';

/**
 * Main
 */
async function main() {
  await core.authorise();

  /* Get Terms */
  log(await terms.getTerms());
  /* Get Members */
  log(await members.getMembers('<SECTIONID>', '<TERMID>'));
  /* Get Member Details */
  log(await members.getMemberDetails('<SECTIONID>', '<MEMBERID>'));
  /* Get Programme Summary */
  log(await programme.getProgrammeSummary('<SECTIONID>', '<TERMID(OPTIONAL)'));
  /* Get Events Summary */
  log(await events.getEventsSummary('<SECTIONID>', '<TERMID(OPTIONAL)'));
  /* Get Events Structure & Parameters */
  log(await events.getEventStructure('<SECTIONID>', '<EVENTID>'));
  /* Get Event Attendance */
  log(await events.getEventAttendance('<SECTIONID>', '<EVENTID>', '<TERMID>'));
}

main();
