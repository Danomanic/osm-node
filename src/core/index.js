const axios = require('axios');
const querystring = require('querystring');


/**
 * Obtain these from OSM Support
 */
module.exports.apiid = '';
module.exports.token = '';

/**
 *  Your OSM username and password
 */
module.exports.email = '';
module.exports.password = '';

module.exports.base = 'https://www.onlinescoutmanager.co.uk';

/**
 *  Do not change these, they are set by authorise()
 */
module.exports.userid = 0;
module.exports.secret = '';

/**
 * Performs the Query to the API Call
 * @param {*} path the query path
 * @param {*} parts contains the parts of the query being performed
 */
module.exports.performQuery = async (path, parts) => {
  let postParts = [];
  postParts = parts;
  postParts.token = this.token;
  postParts.apiid = this.apiid;

  if (this.userid > 0) {
    postParts.userid = this.userid;
  }
  if (this.secret.length === 32) {
    postParts.secret = this.secret;
  }

  const postData = querystring.stringify(postParts);

  return new Promise((resolve, reject) => {
    const url = this.base + path;
    axios.post(url, postData).then((response) => {
      resolve(response.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Authorises the app against the OSM API
 */
module.exports.authorise = async () => {
  const parts = [];
  parts.email = this.email;
  parts.password = this.password;
  const out = await this.performQuery('/users.php?action=authorise', parts);
  this.userid = out.userid;
  this.secret = out.secret;
};
