'use strict';


/**
 * @module Alert
 * @name Alert
 * @alias Notification
 * @alias Warning
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
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const uuidv1 = require('uuid/v1');
const mongoose = require('mongoose');
const { getString } = require('@lykmapipo/env');
const actions = require('mongoose-rest-actions');
const { Geometry, Point, centroidOf } = require('mongoose-geojson-schemas');
const { Schema } = mongoose;


/* constants */


/* directions */
const DEFAULT_DIRECTION = 'Inbound';
const DIRECTIONS = ['Outbound', DEFAULT_DIRECTION];


/* statuses */
const DEFAULT_STATUS = 'Test';
const STATUSES = [
  'Actual', 'Exercise',
  'System', 'Draft',
  DEFAULT_STATUS
];


/* types */
const DEFAULT_TYPE = 'Ask';
const TYPES = [
  'Alert', 'Update',
  'Cancel', 'Error',
  DEFAULT_TYPE
];


/* scopes */
const DEFAULT_SCOPE = 'Private';
const SCOPES = [
  'Public', 'Restricted',
  DEFAULT_SCOPE
];


/* categories */
const DEFAULT_CATEGORY = 'Other';
const CATEGORIES = [
  'Geo', 'Met',
  'Safety', 'Security',
  'Rescue', 'Fire',
  'Health', 'Env',
  'Transport', 'Infra',
  'CBRNE', DEFAULT_CATEGORY
];


/* responses*/
const DEFAULT_RESPONSE = 'None';
const RESPONSES = [
  'Shelter', 'Evacuate',
  'Prepare', 'Execute',
  'Avoid', 'Monitor',
  'Assess', 'AllClear',
  DEFAULT_RESPONSE
];


/* urgencies */
const DEFAULT_URGENCY = 'Unknown';
const URGENCIES = [
  'Immediate', 'Expected',
  'Future', 'Past',
  DEFAULT_URGENCY
];


/* severities */
const DEFAULT_SEVERITY = 'Unknown';
const SEVERITIES = [
  'Extreme', 'Severe',
  'Moderate', 'Minor',
  DEFAULT_SEVERITY
];


/* colors */
const COLOR_UNKNOWN = '#3366FF';
const COLOR_MINOR = '#88E729';
const COLOR_MODERATE = '#FFFF00';
const COLOR_SEVERE = '#FE9901';
const COLOR_EXTREME = '#D72E29';
const DEFAULT_COLOR = COLOR_UNKNOWN;
const COLORS = {
  COLOR_UNKNOWN,
  COLOR_MINOR,
  COLOR_MODERATE,
  COLOR_SEVERE,
  COLOR_EXTREME
};


/* certainties */
const DEFAULT_CERTAINTY = 'Unknown';
const CERTAINTIES = [
  'Observed', 'Likely',
  'Possible', 'Unlikely',
  DEFAULT_CERTAINTY
];


/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = getString('ALERT_MODEL_NAME', 'Alert');
const COLLECTION_NAME = getString('ALERT_COLLECTION_NAME', 'alerts');
const ALERT_SEED = getString('ALERT_SEED', 'alerts');
const SCHEMA_OPTIONS = ({
  timestamps: true,
  emitIndexErrors: true,
  collection: COLLECTION_NAME
});
const OPTION_AUTOPOPULATE = {
  maxDepth: POPULATION_MAX_DEPTH
};


/**
 * @name AlertSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const AlertSchema = new Schema({
  /**
   * @name source
   * @description Human readable name of party(agency, authority etc)
   * issuing(or generating) an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} startcase - forcing start case(or title case)
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * World Meteorological Organization
   */
  source: {
    type: String,
    trim: true,
    required: true,
    startcase: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'company',
      type: 'companyName'
    }
  },


  /**
   * @name number
   * @apiDescription Human readable, system specific identifier of an alert.
   *
   * It consist of two letters to identify the disaster(or incident) type
   * (e.g. EQ - earthquake); the year of the disaster; a six-digit, sequential
   * disaster number; and the three-letter ISO code for country of occurrence
   * e.g EQ-2001-000033-TZA.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} uppercase - force value to uppercase
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * EQ-2018-000033-TZA, FL-2018-000033-TZA etc.
   */
  number: {
    type: String,
    trim: true,
    required: true,
    uppercase: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'uuid'
    }
  },


  /**
   * @name status
   * @description Human readable code denoting the appropriate handling of
   * an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Test
   */
  status: {
    type: String,
    trim: true,
    default: DEFAULT_STATUS,
    enum: STATUSES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name type
   * @description Human readable code denoting the nature of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Test
   */
  type: {
    type: String,
    trim: true,
    default: DEFAULT_TYPE,
    enum: TYPES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name scope
   * @description Human readable code denoting the intended distribution
   * of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Private
   */
  scope: {
    type: String,
    trim: true,
    default: DEFAULT_SCOPE,
    enum: SCOPES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name category
   * @description Human readable code denoting the category of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Geo
   */
  category: {
    type: String,
    trim: true,
    default: DEFAULT_CATEGORY,
    enum: CATEGORIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name event
   * @description Human readable text denoting the subject of an alert.
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
   * @version 0.1.0
   * @instance
   * @example
   * Strong Winds
   */
  event: {
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
   * @name response
   * @description Human readable code denoting the type of action recommended
   * for the target audience as per instruction of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Evacuate
   */
  response: {
    type: String,
    trim: true,
    default: DEFAULT_RESPONSE,
    enum: RESPONSES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name urgency
   * @description Human readable code denoting the urgency of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Immediate
   */
  urgency: {
    type: String,
    trim: true,
    default: DEFAULT_URGENCY,
    enum: URGENCIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name severity
   * @description Human readable code denoting the severity of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Extreme
   */
  severity: {
    type: String,
    trim: true,
    default: DEFAULT_SEVERITY,
    enum: SEVERITIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name certainty
   * @description Human readable code denoting the certainty of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} default - default value set when none provided
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Likely
   */
  certainty: {
    type: String,
    trim: true,
    default: DEFAULT_CERTAINTY,
    enum: CERTAINTIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name headline
   * @description A brief human-readable headline(title) of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Flood Warning issued April 11 by TMA Dar es salaam
   */
  headline: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name description
   * @description An extended human readable description of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
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
   * @name instruction
   * @description Human readable text describing the recommended action to
   * be taken by recipients of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  instruction: {
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
   * @name url
   * @description A full, absolute URI for an HTML page or other text resource
   * with additional or reference information regarding an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  url: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'url'
    }
  },


  /**
   * @name area
   * @description Human readble text describing the affected area(s) of an alert.
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
   * @version 0.1.0
   * @instance
   * @example
   * Dar es salaam, Dodoma
   */
  area: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'address',
      type: 'county'
    }
  },


  /**
   * @name geometry
   * @description The paired values of geo-points defining a geometry(i.e polygon,
   * line etc) that delineates the affected area(s) of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  geometry: Geometry,


  /**
   * @name centroid
   * @description The centre of affected area of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  centroid: Point,


  /**
   * @name reportedAt
   * @alias sent
   * @description Date and time when an alert was issued(or generated) by
   * sender(source, generator).
   *
   * @type {object}
   * @property {string} alias - alternative name
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * 2018-07-28 23:53:19
   */
  reportedAt: {
    type: Date,
    required: true,
    index: true,
    fake: {
      generator: 'date',
      type: 'past'
    }
  },


  /**
   * @name expectedAt
   * @alias onset
   * @description The expected time of the beginning of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * 2018-02-01T16:49:00
   */
  expectedAt: {
    type: Date,
    index: true,
    fake: {
      generator: 'date',
      type: 'recent'
    }
  },


  /**
   * @name expiredAt
   * @alias expires
   * @description The expiry time of the information of an alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * 2018-02-01T16:49:00
   */
  expiredAt: {
    type: Date,
    index: true,
    fake: {
      generator: 'date',
      type: 'future'
    }
  },


  /**
   * @name direction
   * @description Human readable direction(received or given) of the alert.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * Inbound
   */
  direction: {
    type: String,
    trim: true,
    enum: DIRECTIONS,
    default: DEFAULT_DIRECTION,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name color
   * @description A color code(in hexadecimal format) used to differentiate an
   * alert visually.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} uppercase - force upper-casing
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   * @example
   * #20687C
   */
  color: {
    type: String,
    trim: true,
    uppercase: true,
    enum: _.values(COLORS),
    default: DEFAULT_COLOR,
    fake: true
  },


}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */


AlertSchema.pre('validate', function (next) {

  this.preValidate(next);

});


/*
 *------------------------------------------------------------------------------
 *  Instance
 *------------------------------------------------------------------------------
 */


/**
 * @name preValidate
 * @function preValidate
 * @description alert schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 * @since 1.1.0
 * @version 0.1.0
 * @instance
 */
AlertSchema.methods.preValidate = function preValidate(done) {

  // ensure reported date
  if (!this.reportedAt) {
    this.reportedAt = new Date();
  }

  // ensure alert number
  if (_.isEmpty(this.number)) {
    //TODO refactor to use sequence generator
    this.number = uuidv1();
  }

  // ensure centroid of Polygon
  if (this.geometry && !_.isEmpty(this.geometry.coordinate)) {
    const centroid = centroidOf(this.geometry);
    if (centroid) {
      this.centroid = centroid;
    }
  }

  // ensure alert color
  if (!_.isEmpty(this.severity)) {
    const colorKey = `COLOR_${this.severity.toUpperCase()}`;
    this.color = _.get(COLORS, colorKey, DEFAULT_COLOR);
  }

  return done();

};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* expose static constants */
AlertSchema.statics.MODEL_NAME = MODEL_NAME;
AlertSchema.statics.COLLECTION_NAME = COLLECTION_NAME;
AlertSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;

AlertSchema.statics.DEFAULT_STATUS = DEFAULT_STATUS;
AlertSchema.statics.STATUSES = STATUSES;

AlertSchema.statics.DEFAULT_TYPE = DEFAULT_TYPE;
AlertSchema.statics.TYPES = TYPES;

AlertSchema.statics.DEFAULT_SCOPE = DEFAULT_SCOPE;
AlertSchema.statics.SCOPES = SCOPES;

AlertSchema.statics.DEFAULT_CATEGORY = DEFAULT_CATEGORY;
AlertSchema.statics.CATEGORIES = CATEGORIES;

AlertSchema.statics.DEFAULT_RESPONSE = DEFAULT_RESPONSE;
AlertSchema.statics.RESPONSES = RESPONSES;

AlertSchema.statics.DEFAULT_URGENCY = DEFAULT_URGENCY;
AlertSchema.statics.URGENCIES = URGENCIES;

AlertSchema.statics.DEFAULT_SEVERITY = DEFAULT_SEVERITY;
AlertSchema.statics.SEVERITIES = SEVERITIES;

AlertSchema.statics.DEFAULT_COLOR = DEFAULT_COLOR;
AlertSchema.statics.COLOR_UNKNOWN = COLOR_UNKNOWN;
AlertSchema.statics.COLOR_MINOR = COLOR_MINOR;
AlertSchema.statics.COLOR_MODERATE = COLOR_MODERATE;
AlertSchema.statics.COLOR_EXTREME = COLOR_EXTREME;
AlertSchema.statics.COLOR_SEVERE = COLOR_SEVERE;
AlertSchema.statics.COLORS = COLORS;

AlertSchema.statics.DEFAULT_CERTAINTY = DEFAULT_CERTAINTY;
AlertSchema.statics.CERTAINTIES = CERTAINTIES;

AlertSchema.statics.DEFAULT_DIRECTION = DEFAULT_DIRECTION;
AlertSchema.statics.DIRECTIONS = DIRECTIONS;


/**
 * @name upsert
 * @function upsert
 * @description create or update existing alert
 * @param {Object} alert valid alert details
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */
AlertSchema.statics.upsert = function upsert(alert, done) {

  // normalize arguments
  let _alert = (
    _.isFunction(alert.toObject) ?
    alert.toObject() :
    alert
  );

  // refs
  const Alert = this;

  // prepare upsert
  async.waterfall([

    function findExistingAlert(next) {
      // prepare criteria by _id or fields
      let criteria = _.merge({}, _alert);
      criteria = (
        criteria._id ?
        _.pick(criteria, '_id') :
        _.pick(criteria, 'source', 'number', 'category', 'event')
      );
      Alert.findOne(criteria, next);
    },

    function upsertAlert(found, next) {
      // instantiate if not found
      if (!found) {
        found = new Alert(_alert);
      }

      // prepare updates
      _alert = _.merge({}, _alert, found.toObject());

      // do upsert
      found.updatedAt = new Date();
      found.put(_alert, next);
    }
  ], done);
};


/**
 * @name seed
 * @function seed
 * @description seed alerts into database, on duplicate existing wins
 * on merging.
 * @param {Alert[]} [alerts] set of alert(s) to seed
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.1.0
 * @version 0.1.0
 * @public
 */
AlertSchema.statics.seed = function seed(seeds, done) {

  // normalize arguments
  let _seeds = _.isFunction(seeds) ? [] : [].concat(seeds);
  const _done = _.isFunction(seeds) ? seeds : done;

  // refs
  const Alert = this;

  // init alerts collection
  let alerts = [];

  // try load seeds from environment
  const BASE_PATH = getString('BASE_PATH', process.cwd());
  const SEEDS_PATH = getString('SEEDS_PATH', path.join(BASE_PATH, 'seeds'));
  const SEED_PATH = path.join(SEEDS_PATH, ALERT_SEED);
  try {
    const seed = require(SEED_PATH);
    _seeds = [].concat(_seeds).concat(seed);
  } catch (e) { /* ignore */ }

  // collect unique alert from seeds
  _seeds = _.compact(_seeds);
  _seeds = _.uniqWith(_seeds, _.isEqual);

  // upsert alerts
  alerts = _.map([].concat(_seeds), function (alert) {
    return function upsertAlerts(next) {
      Alert.upsert(alert, next);
    };
  });

  // seed alerts
  async.parallel(alerts, _done);

};


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions*/
AlertSchema.plugin(actions);


/* export alert model */
exports = module.exports = mongoose.model(MODEL_NAME, AlertSchema);
