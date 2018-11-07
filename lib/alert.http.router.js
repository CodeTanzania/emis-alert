'use strict';


/**
 * @apiDefine Alert  Alert
 *
 * @apiDescriptionA representation of an envelope(or payload) which carries
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
 */


/**
 * @apiDefine Alert
 * @apiSuccess {String} _id Unique alert identifier
 * @apiSuccess {String} source Human readable name of party(agency, authority etc)
 * issuing(or generating) an alert.
 * @apiSuccess {String} [number] Human readable, system specific identifier of
 * an alert.
 * @apiSuccess {String} [status] Human readable code denoting the appropriate
 * handling of an alert.
 * @apiSuccess {String} [type] Human readable code denoting the nature
 * of an alert.
 * @apiSuccess {String} [scope] Human readable code denoting the intended
 * distribution of an alert.
 * @apiSuccess {String} [category] Human readable code denoting the category
 * of an alert.
 * @apiSuccess {String} event Human readable text denoting the subject of
 * an alert.
 * @apiSuccess {String} [response] Human readable code denoting the type of
 * action recommended for the target audience as per instruction of an alert.
 * @apiSuccess {String} [urgency] Human readable code denoting the urgency
 * of an alert.
 * @apiSuccess {String} [severity] Human readable code denoting the severity
 * of an alert.
 * @apiSuccess {String} [certainty] Human readable code denoting the certainty
 * of an alert.
 * @apiSuccess {String} [headline] A brief human-readable headline(title) of
 * an alert.
 * @apiSuccess {String} [description] An extended human readable description
 * of an alert.
 * @apiSuccess {String} [instruction] Human readable text describing the
 * recommended action to be taken by recipients of an alert.
 * @apiSuccess {String} [url] A full, absolute URI for an HTML page or other
 * text resource with additional or reference information regarding an alert.
 * @apiSuccess {String} area Human readble text describing the affected area(s)
 * of an alert.
 * @apiSuccess {Geometry} [geometry] The paired values of geo-points defining
 * a geometry(i.e polygon, line etc) that delineates the affected area(s) of
 * an alert.
 * @apiSuccess {Point} [centroid] The centre of affected area of an alert.
 * @apiSuccess {Date} [reportedAt] Date and time when an alert was
 * issued(or generated) by sender(source, generator).
 * @apiSuccess {Date} [expectedAt] The expected time of the beginning of
 * an alert.
 * @apiSuccess {Date} [expiredAt] The expiry time of the information
 * of an alert.
 * @apiSuccess {String} [direction=Inbound]  Human readable direction(received
 * or given) of the alert.
 * @apiSuccess {Date} createdAt Date when alert was created.
 * @apiSuccess {Date} updatedAt Date when alert was last updated.
 */


/**
 * @apiDefine Alerts
 * @apiSuccess {Object[]} data List of alerts
 * @apiSuccess {String} data._id Unique alert identifier
 * @apiSuccess {String} data.source Human readable name of party(agency,
 * authority etc) issuing(or generating) an alert.
 * @apiSuccess {String} [data.number] Human readable, system specific identifier
 * of an alert.
 * @apiSuccess {String} [data.status] Human readable code denoting the
 * appropriate handling of an alert.
 * @apiSuccess {String} [data.type] Human readable code denoting the nature
 * of an alert.
 * @apiSuccess {String} [data.scope] Human readable code denoting the intended
 * distribution of an alert.
 * @apiSuccess {String} [data.category] Human readable code denoting the category
 * of an alert.
 * @apiSuccess {String} data.event Human readable text denoting the subject of
 * an alert.
 * @apiSuccess {String} [data.response] Human readable code denoting the type of
 * action recommended for the target audience as per instruction of an alert.
 * @apiSuccess {String} [urgency] Human readable code denoting the urgency
 * of an alert.
 * @apiSuccess {String} [data.severity] Human readable code denoting the severity
 * of an alert.
 * @apiSuccess {String} [data.certainty] Human readable code denoting the certainty
 * of an alert.
 * @apiSuccess {String} [data.headline] A brief human-readable headline(title) of
 * an alert.
 * @apiSuccess {String} [data.description] An extended human readable description
 * of an alert.
 * @apiSuccess {String} [data.instruction] Human readable text describing the
 * recommended action to be taken by recipients of an alert.
 * @apiSuccess {String} [data.url] A full, absolute URI for an HTML page or other
 * text resource with additional or reference information regarding an alert.
 * @apiSuccess {String} data.area Human readble text describing the affected area(s)
 * of an alert.
 * @apiSuccess {Geometry} [data.geometry] The paired values of geo-points defining
 * a geometry(i.e polygon, line etc) that delineates the affected area(s) of
 * an alert.
 * @apiSuccess {Point} [data.centroid] The centre of affected area of an alert.
 * @apiSuccess {Date} [data.reportedAt] Date and time when an alert was
 * issued(or generated) by sender(source, generator).
 * @apiSuccess {Date} [data.expectedAt] The expected time of the beginning of
 * an alert.
 * @apiSuccess {Date} [data.expiredAt] The expiry time of the information
 * of an alert.
 * @apiSuccess {String} [data.direction=Inbound]  Human readable direction(received
 * or given) of the alert.
 * @apiSuccess {Date} data.createdAt Date when alert was created.
 * @apiSuccess {Date} data.updatedAt Date when alert was last updated.
 * @apiSuccess {Number} total Total number of alert
 * @apiSuccess {Number} size Number of alert returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest alert
 * was last modified
 */


/**
 * @apiDefine AlertSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "_id": "5be1df42842d9d5bf8556da8",
 *    "sender": "Vandervort",
 *    "number": "55DAEB99-14C5-4009-9A84-EBF01D96D89C",
 *    "status": "Exercise",
 *    "type": "Error",
 *    "scope": "Public",
 *    "category": "Fire",
 *    "event": "Omnis et delectus id omnis quibusdam.",
 *    "response": "AllClear",
 *    "urgency": "Past",
 *    "severity": "Severe",
 *    "certainty": "Observed",
 *    "headline": "Autem sint hic dolorem quasi aliquam amet beatae.",
 *    "description": "Ut voluptate quo voluptatem ea asperiores.",
 *    "instruction": "Et doloremque odit alias optio nihil temporibus soluta.",
 *    "url": "https://loyce.org",
 *    "area": "Avon",
 *    "geometry":
 *    {
 *        "type": "Polygon",
 *        "coordinates": [
 *            [
 *                [34.0962460876592, -6.027472074582597],
 *                [36.14211410064278, -7.73276252407186],
 *                [34.26678374339001, -11.052568169309106],
 *                [37.9984237359413, -19.518211005210446],
 *                [34.81395505104936, -16.756448591687228],
 *                [33.1875973147786, -19.028057614810873],
 *                [33.19738425670787, -11.327556097253908],
 *                [29.532252395715762, -9.526871069904153],
 *                [27.14333524479317, -5.2808693952369214],
 *                [33.662964128882464, -10.049782036387153],
 *                [34.0962460876592, -6.027472074582597]
 *            ]
 *        ]
 *    },
 *    "centroid":
 *    {
 *        "type": "Point",
 *        "coordinates": [39.14056019762375, -3.7587456547395846]
 *    },
 *    "reportedAt": "2018-09-30T05:05:28.689Z",
 *    "expectedAt": "2018-10-29T11:29:16.562Z",
 *    "expiredAt": "2018-10-25T05:35:26.462Z",
 *    "direction": "Outbound",
 *    "updatedAt": "2018-11-06T18:36:50.998Z",
 *    "createdAt": "2018-11-06T18:36:50.998Z"
 * }
 */


/**
 * @apiDefine AlertsSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "data": [
 *    {
 *        "sender": "Vandervort",
 *        "number": "55DAEB99-14C5-4009-9A84-EBF01D96D89C",
 *        "status": "Exercise",
 *        "type": "Error",
 *        "scope": "Public",
 *        "category": "Fire",
 *        "event": "Omnis et delectus id omnis quibusdam.",
 *        "response": "AllClear",
 *        "urgency": "Past",
 *        "severity": "Severe",
 *        "certainty": "Observed",
 *        "headline": "Autem sint hic dolorem quasi aliquam amet beatae.",
 *        "description": "Ut voluptate quo voluptatem ea asperiores et.",
 *        "instruction": "Et doloremque odit alias optio nihil temporibus.",
 *        "url": "https://loyce.org",
 *        "area": "Avon",
 *        "geometry":
 *        {
 *            "type": "Polygon",
 *            "coordinates": [
 *                [
 *                    [34.0962460876592, -6.027472074582597],
 *                    [36.14211410064278, -7.73276252407186],
 *                    [34.26678374339001, -11.052568169309106],
 *                    [37.9984237359413, -19.518211005210446],
 *                    [34.81395505104936, -16.756448591687228],
 *                    [33.1875973147786, -19.028057614810873],
 *                    [33.19738425670787, -11.327556097253908],
 *                    [29.532252395715762, -9.526871069904153],
 *                    [27.14333524479317, -5.2808693952369214],
 *                    [33.662964128882464, -10.049782036387153],
 *                    [34.0962460876592, -6.027472074582597]
 *                ]
 *            ]
 *        },
 *        "centroid":
 *        {
 *            "type": "Point",
 *            "coordinates": [39.14056019762375, -3.7587456547395846]
 *        },
 *        "reportedAt": "2018-09-30T05:05:28.689Z",
 *        "expectedAt": "2018-10-29T11:29:16.562Z",
 *        "expiredAt": "2018-10-25T05:35:26.462Z",
 *        "direction": "Outbound",
 *        "_id": "5be1df42842d9d5bf8556da8",
 *        "updatedAt": "2018-11-06T18:36:50.998Z",
 *        "createdAt": "2018-11-06T18:36:50.998Z"
 *    }],
 *    "total": 32,
 *    "size": 10,
 *    "limit": 10,
 *    "skip": 0,
 *    "page": 1,
 *    "pages": 32,
 *    "lastModified": "2018-11-06T18:36:50.999Z"
 * }
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const Router = require('@lykmapipo/express-common').Router;
const { env } = require('@codetanzania/majifix-common');


/* local constants */
const API_VERSION = env.API_VERSION;
const PATH_LIST = '/alerts';
const PATH_SINGLE = '/alerts/:id';


/* declarations */
const Alert = require(path.join(__dirname, 'alert.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /alerts List Alerts
 * @apiVersion 1.0.0
 * @apiName GetAlerts
 * @apiGroup Alert
 * @apiDescription Returns a list of alerts
 * @apiUse RequestHeaders
 * @apiUse Alerts
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertsSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getAlerts(request, response, next) {

  //obtain request options
  const options = _.merge({}, request.mquery);

  Alert
    .get(options, function onGetAlerts(error, results) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});


/**
 * @api {post} /alerts Create New Alert
 * @apiVersion 1.0.0
 * @apiName PostAlert
 * @apiGroup Alert
 * @apiDescription Create new alert
 * @apiUse RequestHeaders
 * @apiUse Alert
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .post(PATH_LIST, function postAlert(request, response, next) {

    //obtain request body
    const body = _.merge({}, request.body);

    Alert
      .post(body, function onPostAlert(error, created) {

        //forward error
        if (error) {
          next(error);
        }

        //handle response
        else {
          response.status(201);
          response.json(created);
        }

      });

  });


/**
 * @api {get} /alerts/:id Get Existing Alert
 * @apiVersion 1.0.0
 * @apiName GetAlert
 * @apiGroup Alert
 * @apiDescription Get existing alert
 * @apiUse RequestHeaders
 * @apiUse Alert
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .get(PATH_SINGLE, function getAlert(request, response, next) {

    //obtain request options
    const options = _.merge({}, request.mquery);

    //obtain alert id
    options._id = request.params.id;

    Alert
      .getById(options, function onGetAlert(error, found) {

        //forward error
        if (error) {
          next(error);
        }

        //handle response
        else {
          response.status(200);
          response.json(found);
        }

      });

  });


/**
 * @api {patch} /alerts/:id Patch Existing Alert
 * @apiVersion 1.0.0
 * @apiName PatchAlert
 * @apiGroup Alert
 * @apiDescription Patch existing alert
 * @apiUse RequestHeaders
 * @apiUse Alert
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .patch(PATH_SINGLE, function patchAlert(request, response, next) {

    //obtain alert id
    const { id } = request.params;

    //obtain request body
    const patches = _.merge({}, request.body);

    Alert
      .patch(id, patches, function onPatchAlert(error, patched) {

        //forward error
        if (error) {
          next(error);
        }

        //handle response
        else {
          response.status(200);
          response.json(patched);
        }

      });

  });


/**
 * @api {put} /alerts/:id Put Existing Alert
 * @apiVersion 1.0.0
 * @apiName PutAlert
 * @apiGroup Alert
 * @apiDescription Put existing alert
 * @apiUse RequestHeaders
 * @apiUse Alert
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .put(PATH_SINGLE, function putAlert(request, response, next) {

    //obtain alert id
    const { id } = request.params;

    //obtain request body
    const updates = _.merge({}, request.body);

    Alert
      .put(id, updates, function onPutAlert(error, updated) {

        //forward error
        if (error) {
          next(error);
        }

        //handle response
        else {
          response.status(200);
          response.json(updated);
        }

      });

  });


/**
 * @api {delete} /alerts/:id Delete Existing Alert
 * @apiVersion 1.0.0
 * @apiName DeleteAlert
 * @apiGroup Alert
 * @apiDescription Delete existing alert
 * @apiUse RequestHeaders
 * @apiUse Alert
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse AlertSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .delete(PATH_SINGLE, function deleteAlert(request, response, next) {

    //obtain alert id
    const { id } = request.params;

    Alert
      .del(id, function onDeleteAlert(error, deleted) {

        //forward error
        if (error) {
          next(error);
        }

        //handle response
        else {
          response.status(200);
          response.json(deleted);
        }

      });

  });


/* expose router */
module.exports = router;
