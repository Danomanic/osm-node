OSM Node Example
=======================
This is an example of how to access Online Scout Mananager via NodeJS. This example makes a simple authorisation call.

Prerequisites
-------------

- [OSM Account](http://onlinescoutmanager.co.uk)
- [Node.js 8.0+](http://nodejs.org)


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/Danomanic/osm-node.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

Configuration
---------------

Update the API ID and Token
```js
const apiid = '<Insert-APIID>';
const token = '<Intert-Token>';

const myEmail = '<USER-EMAIL>';
const myPassword = '<USER-PASSWORD>';
```

Example:
```js
const apiid = '123';
const token = '9b7782b7-0f28-4fd8-adb5-6da212e3217b';

const myEmail = 'joe@blogs.com';
const myPassword = 'securepassword';

```

Changelog
---------

You can find the changelog for the project in: [CHANGELOG.md](https://github.com/Danomanic/osm-node/blob/master/CHANGELOG.md)


Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome. Please open an issue before
submitting a pull request. This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.