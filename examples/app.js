'use strict';


/* ensure mongo uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-alert');


/* dependencies */
const path = require('path');
const async = require('async');
const mongoose = require('mongoose');
const { Party } = require('@codetanzania/emis-party');
const {
  Alert,
  apiVersion,
  info,
  app
} = require(path.join(__dirname, '..'));


/* connect to mongoose */
mongoose.connect(process.env.MONGODB_URI);

//boot
async.waterfall([

  function seedParties(next) {
    Party.seed(next);
  },

  function seedAlerts(parties, next) {
    Alert.seed(next);
  }

], ( /*error, results*/ ) => {

  /* expose module info */
  app.get('/', (request, response) => {
    response.status(200);
    response.json(info);
  });

  /* fire the app */
  app.start((error, env) => {
    console.log(
      `visit http://0.0.0.0:${env.PORT}/v${apiVersion}/alerts`
    );
  });

});
