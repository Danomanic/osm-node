OSM Node
=======================
Make API calls to OSM (Online Scout Manager) in Node.

Prerequisites
-------------

- [OSM Account](http://onlinescoutmanager.co.uk)
- [Node.js 8.0+](http://nodejs.org)


Install
---------------

The easiest way to get started is to clone the repository:

```bash
$ npm install osm-node
```

Configuration
---------------

Set the API ID and Token
```js
osm.core.apiid = '<API-ID>';
osm.core.token = '<API-TOKEN>';

osm.core.email = '<EMAIL>';
osm.core.password = '<PASSWORD>';
```

Usage
---------------
```js
const osm = require('osm-node');

osm.core.apiid = '123';
osm.core.token = '9b7782b7-0f28-4fd8-adb5-6da212e3217b';

osm.core.email = 'joe@blogs.com';
osm.core.password = 'securepassword';
```

### Core
```js
// MUST be called before calling other methods.
osm.core.authorise();
```
### Members
```js
// Get Members
osm.members.getMembers();

// Get Member Details (sectionid, memberid)
osm.members.getMemberDetails(1234, 1234);

// Get Attendance (sectionid, termid)
osm.members.getAttendance(1234, 1234);

// Get Patrols (sectionid, termid)
osm.members.getPatrols(1234, 1234);
```

### Terms
```js
// Get Terms
osm.terms.getTerms();
```

### Programme
```js
// Get Programme Summary (secitonid, termid)
osm.programme.getProgrammeSummary(1234, 1234);
```

### Events
```js
// Get Event Summary (sectionid, termid)
osm.events.getEventsSummary(1234, 1234);

// Get Event Structure (sectionid, eventid)
osm.events.getEventStructure(1234, 1234);

// Get Event Attendance (sectionid, eventid, termid)
osm.events.getEventAttendance(1234, 1234, 1234);

// Get Event Attachments (sectionid, eventid)
osm.events.getEventAttachments(1234, 1234);
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