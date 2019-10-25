const axios = require('axios');
const querystring = require('querystring');

const { log } = console;

/**
 * Obtain these from OSM Support
 */
const apiid = '<APP-ID>';
const token = '<TOKEN>';

/**
 *  Your OSM username and password
 */
const myEmail = '<USER-EMAIL>';
const myPassword = '<USER-PASSWORD>';

/**
 * OSM Base URL
 */
const base = 'https://www.onlinescoutmanager.co.uk';

/**
 *  Do not change these, they are set by authorise()
 */
let userid = 0;
let secret = '';

/**
 * Performs the Query to the API Call
 * @param {*} path the query path
 * @param {*} parts contains the parts of the query being performed
 */
async function performQuery(path, parts) {
  let postParts = [];
  postParts = parts;
  postParts.token = token;
  postParts.apiid = apiid;

  if (userid > 0) {
    postParts.userid = userid;
  }
  if (secret.length === 32) {
    postParts.secret = secret;
  }

  const postData = querystring.stringify(postParts);

  return new Promise((resolve, reject) => {
    const url = base + path;
    axios.post(url, postData).then((response) => {
      resolve(response.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Authorises the app against the OSM API
 */
async function authorise() {
  const parts = [];
  parts.email = myEmail;
  parts.password = myPassword;
  const out = await performQuery('/users.php?action=authorise', parts);
  userid = out.userid;
  secret = out.secret;
  log('Authorised');
}

/**
 * Get's a list of available Terms
 */
async function getTerms() {
  const parts = [];
  const out = await performQuery('/api.php?action=getTerms', parts);
  return (out);
}

/**
 * Get's a list of Members in a section
 * @param {*} sectionid Section ID
 * @param {*} termid Term ID
 */
async function getMembers(sectionid, termid) {
  const parts = [];
  const out = await performQuery(`/ext/members/contact/?action=getListOfMembers&sort=dob&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
}

/**
 * Get's Member Details
 * @param {G} sectionid Section ID
 * @param {*} memberid Member ID
 */
async function getMemberDetails(sectionid, memberid) {
  const parts = [];
  parts.associated_id = memberid;
  parts.associated_type = 'member';
  const out = await performQuery(`/ext/customdata/?action=getData&section_id=${sectionid}`, parts);
  return out;
}

/**
 * Get's a summary of Programmes in a given term or all terms
 * @param {*} sectionid Section ID
 * @param {*} termid Term ID
 */
async function getProgrammeSummary(sectionid, termid) {
  termid || (termid = '-1');
  const parts = [];
  const out = await performQuery(`/ext/programme/?action=getProgrammeSummary&sectionid=${sectionid}&termid=${termid}`, parts);
  return out;
}

/**
 * Main
 */
async function main() {
  await authorise();
  /* Get Terms */
  log(await getTerms());
  /* Get Members */
  log(await getMembers('<SECTIONID>', '<TERMID>'));
  /* Get Member Details */
  log(await getMemberDetails('<SECTIONID>', '<MEMBERID>'));
  /* Get Programme Summary */
  log(await getProgrammeSummary('<SECTIONID>', '<TERMID(OPTIONAL)'));
}

main();
