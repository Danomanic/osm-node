const http = require('http');
const querystring = require('querystring');

var apiid = '<Insert-APIID>';
var token = '<Intert-Token>';


var base = 'https://www.onlinescoutmanager.co.uk/';
var port = 443;

var myEmail = '';
var myPassword = '';

var userid = 0;
var secret = '';

const authorise = () => {
    var parts = [];
    parts['email'] = myEmail;
    parts['password'] = myPassword;
    return perform_query('users.php?action=authorise', parts);
}

const perform_query = (path, parts) => {

    parts['token'] = token;
	parts['apiid'] = apiid;
	
	if (userid > 0) {
		parts['userid'] = userid;
	}
	if (secret.length == 32) {
		parts['secret'] = secret;
    }

    const postData = querystring.stringify(parts);
    
    const options = {
        hostname: base,
        port: port,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    
    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });
    
    req.write(postData);
    req.end();
}

var json = authorise();