'use strict';


/* dependencies */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Polygon } = require('mongoose-geojson-schemas');


/**
 * @name Area
 * @description Affected area of the alert message.
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const Area = new Schema({
  /**
   * @name name
   * @alias areaDesc
   * @description The text describing the affected area of the alert message
   * e.g Tandale etc.
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
  name: {
    alias: 'areaDesc',
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'address',
      type: 'streetName'
    }
  },


  /**
   * @name polygon
   * @alias geometry
   * @alias coordinates
   * @description The paired values of points defining a polygon that
   * delineates the affected area of the alert message.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  polygon: Polygon,


  /**
   * @name altitude
   * @description The specific or minimum altitude of the affected area of
   * the alert message.
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
   * @description The maximum altitude of the affected area of the
   * alert message.
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

});


/* exports */
exports = module.exports = Area;
