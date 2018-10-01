'use strict';


/* dependencies */
const path = require('path');
const mongoose = require('mongoose');
const constants = require(path.join(__dirname, 'alert.constants'));
const { Schema } = mongoose;


/* constants */
const SUB_DOC_SCHEMA_OPTIONS = ({ _id: false, id: false, emitIndexErrors: true });
const {
  CATEGORIES,
  URGENCIES,
  SEVERITIES,
  CERTAINTIES,
  RESPONSE_TYPES
} = constants;


/**
 * @name EventSchema
 * @description Denoting type of the subject of the alert.
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const EventSchema = new Schema({
  /**
   * @name code
   * @alias eventCode
   * @apiDescription Human readable, system specific code identifying the event
   * type(incident type) of the alert e.g 2018090001, 20180001 etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  code: { /* @todo link to incident type given code */
    alias: 'eventCode',
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'uuid'
    }
  },


  /**
   * @name name
   * @alias event
   * @description Human readable text denoting the type of the subject event
   * of the alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  name: {
    alias: 'event',
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name category
   * @description Human readable code denoting the CAP category of the
   * subject event of the alert. e.g Met, Fire etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  category: { /* @todo link to incident type cap code */
    type: String,
    trim: true,
    required: true,
    enum: CATEGORIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name description
   * @description An extended human readable description of the hazard or
   * event that occasioned the alert.
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
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'paragraph'
    }
  },


  /**
   * @name urgency
   * @description Human readable code denoting the urgency of the subject event
   * of the alert message e.g Immediate etc.
   *
   * The <urgency>, <severity>, and <certainty> elements collectively
   * distinguish less emphatic from more emphatic messages.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  urgency: {
    type: String,
    trim: true,
    required: true,
    enum: URGENCIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name severity
   * @description Human readable code denoting the severity of the subject
   * event of the alert message e.g Moderate etc.
   *
   * The <urgency>, <severity>, and <certainty> elements collectively
   * distinguish less emphatic from more emphatic messages.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  severity: {
    type: String,
    trim: true,
    required: true,
    enum: SEVERITIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name certainty
   * @description Human readable code denoting the certainty of the subject
   * event of the alert message e.g Likely etc.
   *
   * The <urgency>, <severity>, and <certainty> elements collectively
   * distinguish less emphatic from more emphatic messages.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  certainty: {
    type: String,
    trim: true,
    required: true,
    enum: CERTAINTIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name response
   * @alias responseType
   * @description Human readable code denoting the type of action recommended
   * for the target audience as per instruction e.g Evacuate etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  response: {
    alias: 'responseType',
    type: String,
    trim: true,
    required: true,
    enum: RESPONSE_TYPES,
    index: true,
    searchable: true,
    fake: true
  }

}, SUB_DOC_SCHEMA_OPTIONS);


/* exports alert event schema */
exports = module.exports = EventSchema;
