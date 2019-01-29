'use strict';


/**
 * @apiDefine AlertSource  AlertSource
 *
 * @apiDescription A representation of an alert feed source.
 *
 * @see {@link http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html}
 * @see {@link http://docs.oasis-open.org/emergency/cap/v1.2/pr03/CAP-v1.2-PR03.pdf}
 * @see {@link https://en.wikipedia.org/wiki/Common_AlertSourceing_Protocol}
 * @see {@link https://developers.google.com/public-alerts/reference/cap-google}
 * @see {@link https://library.wmo.int/pmb_ged/wmo_1109_en.pdf}
 * @see {@link https://en.wikipedia.org/wiki/ISO_22324}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 1.2.2
 * @version 0.1.0
 * @public
 */


/**
 * @apiDefine AlertSource
 * @apiSuccess {String} _id Unique alert source identifier
 * @apiSuccess {String} name Human readable name of party(agency, authority etc)
 * issuing(or generating) an alert.
 * @apiSuccess {String} mobile Primary mobile phone number used to contact a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} email Primary email address used to contact a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} url Primary feed url(or link) of a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} website Primary public website url(or link) of a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {Date} createdAt Date when alert source was created.
 * @apiSuccess {Date} updatedAt Date when alert source was last updated.
 */


/**
 * @apiDefine AlertSources
 * @apiSuccess {Object[]} data List of alert sources
 * @apiSuccess {String} data._id Unique alert source identifier
 * @apiSuccess {String} data.name Human readable name of party(agency, authority etc)
 * issuing(or generating) an alert.
 * @apiSuccess {String} data.mobile Primary mobile phone number used to contact a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} data.email Primary email address used to contact a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} data.url Primary feed url(or link) of a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} data.website Primary public website url(or link) of a
 * party(agency, authority etc) issuing(or generating) an alert.
 * @apiSuccess {Date} data.createdAt Date when alert source was created.
 * @apiSuccess {Date} data.updatedAt Date when alert source was last updated.
 * @apiSuccess {Number} total Total number of alert source
 * @apiSuccess {Number} size Number of alert source returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest alert source
 * was last modified
 */


/**
 * @apiDefine AlertSourceSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "_id": "5c5020f7c0e24a6d7de573a9",
 *   "name": "Tanzania Meteorological Agency",
 *   "mobile": "222460706",
 *   "email": "met@meteo.go.tz",
 *   "url": "http://tma.meteo.go.tz:8080/feeds/en/alerts/rss.xml",
 *   "website": "http://www.meteo.go.tz/",
 *   "updatedAt": "2019-01-29T09:46:31.149Z",
 *   "createdAt": "2019-01-29T09:46:31.149Z"
 * }
 */


/**
 * @apiDefine AlertSourcesSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "data": [{
 *      "_id": "5c5020f7c0e24a6d7de573a9",
 *      "name": "Tanzania Meteorological Agency",
 *      "mobile": "255222460706",
 *      "email": "met@meteo.go.tz",
 *      "url": "http://tma.meteo.go.tz:8080/feeds/en/alerts/rss.xml",
 *      "website": "http://www.meteo.go.tz/",
 *      "updatedAt": "2019-01-29T09:46:31.149Z",
 *      "createdAt": "2019-01-29T09:46:31.149Z"
 *    }],
 *    "total": 32,
 *    "size": 10,
 *    "limit": 10,
 *    "skip": 0,
 *    "page": 1,
 *    "pages": 32,
 *    "lastModified": "2019-01-29T09:46:31.149Z"
 * }
 */


/* dependencies */
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const { include } = require('@lykmapipo/include');
const Router = require('@lykmapipo/express-common').Router;


/* local constants */
const API_VERSION = getString('API_VERSION', '1.0.0');
const PATH_LIST = '/alertsources';
const PATH_SINGLE = '/alertsources/:id';
const PATH_SCHEMA = '/alertsources/schema/';


/* declarations */
const AlertSource = include(__dirname, 'source.model');
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /alertsources List AlertSources
 * @apiVersion 1.0.0
 * @apiName GetAlertSources
 * @apiGroup AlertSource
 * @apiDescription Returns a list of alertsources
 * @apiUse RequestHeaders
 * @apiUse AlertSources
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourcesSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getAlertSources(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  AlertSource
    .get(options, function onGetAlertSources(error, results) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});


/**
 * @api {get} /alertsources/schema Get AlertSources Schema
 * @apiVersion 1.0.0
 * @apiName GetAlertSourceSchema
 * @apiGroup AlertSource
 * @apiDescription Returns alert source json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getAlertSourceSchema(request, response) {
  const schema = AlertSource.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /alertsources Create New AlertSource
 * @apiVersion 1.0.0
 * @apiName PostAlertSource
 * @apiGroup AlertSource
 * @apiDescription Create new alert source
 * @apiUse RequestHeaders
 * @apiUse AlertSource
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourceSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.post(PATH_LIST, function postAlertSource(request, response, next) {

  // obtain request body
  const body = _.merge({}, request.body);

  AlertSource
    .post(body, function onPostAlertSource(error, created) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(201);
        response.json(created);
      }

    });

});


/**
 * @api {get} /alertsources/:id Get Existing AlertSource
 * @apiVersion 1.0.0
 * @apiName GetAlertSource
 * @apiGroup AlertSource
 * @apiDescription Get existing alert source
 * @apiUse RequestHeaders
 * @apiUse AlertSource
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourceSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_SINGLE, function getAlertSource(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  // obtain alert source id
  options._id = request.params.id;

  AlertSource
    .getById(options, function onGetAlertSource(error, found) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(found);
      }

    });

});


/**
 * @api {patch} /alertsources/:id Patch Existing AlertSource
 * @apiVersion 1.0.0
 * @apiName PatchAlertSource
 * @apiGroup AlertSource
 * @apiDescription Patch existing alert source
 * @apiUse RequestHeaders
 * @apiUse AlertSource
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourceSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.patch(PATH_SINGLE, function patchAlertSource(request, response, next) {

  // obtain alert source id
  const { id } = request.params;

  // obtain request body
  const patches = _.merge({}, request.body);

  AlertSource
    .patch(id, patches, function onPatchAlertSource(error, patched) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(patched);
      }

    });

});


/**
 * @api {put} /alertsources/:id Put Existing AlertSource
 * @apiVersion 1.0.0
 * @apiName PutAlertSource
 * @apiGroup AlertSource
 * @apiDescription Put existing alert source
 * @apiUse RequestHeaders
 * @apiUse AlertSource
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourceSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.put(PATH_SINGLE, function putAlertSource(request, response, next) {

  // obtain alert source id
  const { id } = request.params;

  // obtain request body
  const updates = _.merge({}, request.body);

  AlertSource
    .put(id, updates, function onPutAlertSource(error, updated) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(updated);
      }

    });

});


/**
 * @api {delete} /alertsources/:id Delete Existing AlertSource
 * @apiVersion 1.0.0
 * @apiName DeleteAlertSource
 * @apiGroup AlertSource
 * @apiDescription Delete existing alert source
 * @apiUse RequestHeaders
 * @apiUse AlertSource
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSourceSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.delete(PATH_SINGLE, function deleteAlertSource(request, response, next) {

  // obtain alert source id
  const { id } = request.params;

  // obtain request body
  const patches = { deletedAt: new Date() };

  AlertSource
    .patch(id, patches, function onPatchAlertSource(error, patched) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(patched);
      }

    });

});


/* expose router */
module.exports = router;
