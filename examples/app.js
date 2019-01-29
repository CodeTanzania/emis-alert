'use strict';


/* dependencies */
const path = require('path');
const { waterfall } = require('async');
const { include } = require('@lykmapipo/include');
const { connect } = require('@lykmapipo/mongoose-common');
const { Party } = require('@codetanzania/emis-stakeholder');
const { AlertSource, Alert, info, app } = include(__dirname, '..');


// seeds
const seedParties = (next) => Party.seed((error) => next(error));
const seedAlertSources = (next) => AlertSource.seed((error) => next(error));
const seedAlerts = (next) => Alert.seed((error) => next(error));


// establish mongodb connection
connect(error => {

  // re-throw if error
  if (error) { throw error; }

  // seed
  waterfall([
    seedParties, seedAlertSources, seedAlerts
  ], (error, results) => {

    // re-throw if error
    if (error) { throw error; }

    // expose module info
    app.get('/', (request, response) => {
      response.status(200);
      response.json(info);
    });

    // fire the app
    app.start((error, env) => {
      // re-throw if error
      if (error) { throw error; }

      // start http server
      console.log(`visit http://0.0.0.0:${env.PORT}`);
    });

  });

});
