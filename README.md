# emis-alert

[![Build Status](https://travis-ci.org/CodeTanzania/emis-alert.svg?branch=develop)](https://travis-ci.org/CodeTanzania/emis-alert)
[![Dependencies Status](https://david-dm.org/CodeTanzania/emis-alert/status.svg?style=flat-square)](https://david-dm.org/CodeTanzania/emis-alert)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/CodeTanzania/emis-alert/tree/develop)

A representation of an envelope(or payload) which carries disaster notifications(or warning) from source(s) to audience(s).

[Demo](https://emis-alert.herokuapp.com/v1/alerts)

## Domain Model

![EMIS Alert Domain Model](https://raw.githubusercontent.com/CodeTanzania/emis-alert/develop/specifications/alert.model.png)

## Requirements

- [NodeJS v8.11.1+](https://nodejs.org)
- [Npm v5.6.0+](https://www.npmjs.com/)
- [MongoDB v3.4.10+](https://www.mongodb.com/)
- [Mongoose v5.1.2+](https://github.com/Automattic/mongoose)

## Installation

```sh
npm install @codetanzania/emis-alert --save
```

## Usage

```js
const { app } = require('@codetanzania/emis-alert');
app.start((error) => { ... });
```

## References
- [Common Alerting Protocol](https://en.wikipedia.org/wiki/Common_Alerting_Protocol)
- [Common Alerting Protocol Version 1.2](http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html)
- [CAP-v1.2-PR03](http://docs.oasis-open.org/emergency/cap/v1.2/pr03/CAP-v1.2-PR03.pdf)
- [Google Public Alerts CAP v1.0](https://developers.google.com/public-alerts/reference/cap-google)
- [Guidelines for Implementation CAP](https://library.wmo.int/pmb_ged/wmo_1109_en.pdf)
- [Wikipedia: ISO 22324](https://en.wikipedia.org/wiki/ISO_22324)

## Testing

- Clone this repository

- Install all development dependencies

```sh
npm install
```

- Run example

```sh
npm run dev
```

- Then run test

```sh
npm test
```

## Contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.

## Licence

The MIT License (MIT)

Copyright (c) 2018 CodeTanzania & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
