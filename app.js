const http = require('http');
const querystring = require('querystring');

const { log, error } = console;

const apiid = '<Insert-APIID>';
const token = '<Intert-Token>';


const base = 'https://www.onlinescoutmanager.co.uk/';
const port = 443;

const myEmail = '';
const myPassword = '';

const userid = 0;
const secret = '';

const performQuery = (path, parts) => {
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

  const options = {
    hostname: base,
    port,
    path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  const req = http.request(options, (res) => {
    log(`STATUS: ${res.statusCode}`);
    log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    error(`Problem with request: ${e.message}`);
  });

  req.write(postData);
  req.end();
};

const authorise = () => {
  const parts = [];
  parts.email = myEmail;
  parts.password = myPassword;
  return performQuery('users.php?action=authorise', parts);
};

const json = authorise();

log(json);
