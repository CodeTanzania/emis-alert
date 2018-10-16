'use strict';


/* dependencies */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Geometry, Point } = require('mongoose-geojson-schemas');


/* constants */
const SUB_DOC_SCHEMA_OPTIONS = ({ _id: false, id: false, emitIndexErrors: true });


/**
 * @name AreaSchema
 * @description Delineation of area(s) that may be affected by the alert.
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const AreaSchema = new Schema({
  /**
   * @name description
   * @alias areaDesc
   * @description The text describing the affected area(s) of the alert
   * e.g Ilala, Temeke etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  description: {
    alias: 'areaDesc',
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'address',
      type: 'county'
    }
  },


  /**
   * @name geometry
   * @description The paired values of points defining a geometry(i.e polygon,
   * line etc) that delineates the affected area of the alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  geometry: Geometry,


  /**
   * @name centroid
   * @description The centre of affected area of the alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  centroid: Point,


  /**
   * @name altitude
   * @description The specific or minimum altitude of the affected area of the
   * alert.
   *
   * The altitude measure is in feet above mean sea level.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  altitude: {
    type: Number,
    index: true,
    fake: {
      generator: 'random',
      type: 'number'
    }
  },


  /**
   * @name ceiling
   * @description The maximum altitude of the affected area of the alert.
   *
   * The ceiling measure is in feet above mean sea level.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  ceiling: {
    type: Number,
    index: true,
    fake: {
      generator: 'random',
      type: 'number'
    }
  },

}, SUB_DOC_SCHEMA_OPTIONS);


/* exports alert area schema */
exports = module.exports = AreaSchema;
