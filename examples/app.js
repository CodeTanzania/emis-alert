'use strict';


/* ensure mongodb uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-alert');


/* dependencies */
const path = require('path');
const { waterfall } = require('async');
const { include } = require('@lykmapipo/include');
const { connect } = require('@lykmapipo/mongoose-common');
const { Party } = require('@codetanzania/emis-stakeholder');
const { Alert, info, app } = include(__dirname, '..');


// seeds
const seedParties = (next) => Party.seed((error) => next(error));
const seedAlerts = (next) => Alert.seed((error) => next(error));


// establish mongodb connection
connect((error) => {

  // seed
  waterfall([
    seedParties, seedAlerts
  ], (error, results) => {

    // expose module info
    app.get('/', (request, response) => {
      response.status(200);
      response.json(info);
    });

    // fire the app
    app.start((error, env) => {
      console.log(`visit http://0.0.0.0:${env.PORT}`);
    });

  });

});
