'use strict';


/**
 * @name emis-alert
 * @description A representation of an envelope(or payload) which carries
 * disaster notifications(or warning) from source(s) to audience(s).
 *
 * @see {@link http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html}
 * @see {@link http://docs.oasis-open.org/emergency/cap/v1.2/pr03/CAP-v1.2-PR03.pdf}
 * @see {@link https://en.wikipedia.org/wiki/Common_Alerting_Protocol}
 * @see {@link https://developers.google.com/public-alerts/reference/cap-google}
 * @see {@link https://library.wmo.int/pmb_ged/wmo_1109_en.pdf}
 * @see {@link https://en.wikipedia.org/wiki/ISO_22324}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @public
 * @example
 *
 * const { app } = require('@codetanzania/emis-alert');
 * app.start((error) => { ... });
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
const app = require('@lykmapipo/express-common');


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* import models */
const Alert =
  require(path.join(__dirname, 'lib', 'alert.model'));


/* import routers*/
const alertRouter =
  require(path.join(__dirname, 'lib', 'alert.http.router'));


/* export package(module) info */
exports.info = info;


/* export alert model */
exports.Alert = Alert;


/* export alert router */
exports.alertRouter = alertRouter;


/* export router api version */
exports.apiVersion = alertRouter.apiVersion;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {

    //TODO bind oauth middlewares authenticate, token, authorize

    /* bind alert router */
    app.mount(alertRouter);
    return app;
  }

});
