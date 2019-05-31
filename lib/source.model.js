'use strict';

/**
 * @module Source
 * @name Source
 * @description A representation of an alert feed source.
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
 * @since 1.2.2
 * @version 0.1.0
 * @public
 */

/* dependencies */
const path = require('path');
const _ = require('lodash');
const { parallel, waterfall } = require('async');
const { getString } = require('@lykmapipo/env');
const { Schema, model, SCHEMA_OPTIONS } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const exportable = require('@lykmapipo/mongoose-exportable');

/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = 'AlertSource';
const COLLECTION_NAME = 'alertsources';
const ALERT_SEED = 'alertsources';
const OPTION_AUTOPOPULATE = {
  maxDepth: POPULATION_MAX_DEPTH,
  collection: COLLECTION_NAME,
};

/**
 * @name AlertSourceSchema
 * @type {Schema}
 * @since 1.2.2
 * @version 0.1.0
 * @private
 */
const AlertSourceSchema = new Schema(
  {
    /**
     * @name name
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
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @author lally elias <lallyelias87@gmail.com>
     * @since 1.2.2
     * @version 0.1.0
     * @instance
     * @example
     * World Meteorological Organization
     */
    name: {
      type: String,
      trim: true,
      required: true,
      startcase: true,
      index: true,
      searchable: true,
      taggable: true,
      exportable: { header: 'Name', order: 1 },
      fake: {
        generator: 'company',
        type: 'companyName',
      },
    },

    /**
     * @name mobile
     * @description Primary mobile phone number used to contact a
     * party(agency, authority etc) issuing(or generating) an alert.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} index - ensure database index
     * @property {boolean} unique - ensure database unique index
     * @property {boolean} searchable - allow for searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 1.2.2
     * @version 0.1.0
     * @instance
     * @example
     * 255765222333
     */
    mobile: {
      type: String,
      trim: true,
      required: true,
      // phone: true,
      index: true,
      unique: true,
      searchable: true,
      taggable: true,
      exportable: { header: 'Mobile Number', order: 2 },
      fake: {
        generator: 'phone',
        type: 'phoneNumber',
      },
    },

    /**
     * @name email
     * @description Primary email address used to contact a
     * party(agency, authority etc) issuing(or generating) an alert.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} lowercase - force lower-casing
     * @property {boolean} email - force to be a valid email address
     * @property {boolean} index - ensure database index
     * @property {boolean} unique - ensure database unique index
     * @property {boolean} searchable - allow for searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 1.2.2
     * @version 0.1.0
     * @instance
     * @example
     * jow.joz@jottot.com
     */
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      email: true,
      index: true,
      unique: true,
      searchable: true,
      taggable: true,
      exportable: { header: 'Email Address', order: 3 },
      fake: {
        generator: 'internet',
        type: 'email',
      },
    },

    /**
     * @name url
     * @description Primary feed url(or link) of a
     * party(agency, authority etc) issuing(or generating) an alert.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} lowercase - force lower-casing
     * @property {boolean} index - ensure database index
     * @property {boolean} searchable - allow for searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 1.2.2
     * @version 0.1.0
     * @instance
     * @example
     * https://www.acme.com/feeds/en/alerts/rss.xml
     */
    url: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      url: true,
      index: true,
      searchable: true,
      exportable: { header: 'Feed Url', order: 5 },
      fake: {
        generator: 'internet',
        type: 'url',
      },
    },

    /**
     * @name website
     * @description Primary public website url(or link) of a
     * party(agency, authority etc) issuing(or generating) an alert.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} lowercase - force lower-casing
     * @property {boolean} index - ensure database index
     * @property {boolean} searchable - allow for searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 1.2.2
     * @version 0.1.0
     * @instance
     * @example
     * https://www.acme.com
     */
    website: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      url: true,
      index: true,
      searchable: true,
      exportable: { header: 'Website', order: 4 },
      fake: {
        generator: 'internet',
        type: 'url',
      },
    },
  },
  SCHEMA_OPTIONS
);

/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */

AlertSourceSchema.pre('validate', function onPreValidate(next) {
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
 * @description alertsource schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 * @since 1.1.0
 * @version 0.1.0
 * @instance
 */
AlertSourceSchema.methods.preValidate = function preValidate(done) {
  return done();
};

/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */

/* expose static constants */
AlertSourceSchema.statics.MODEL_NAME = MODEL_NAME;
AlertSourceSchema.statics.COLLECTION_NAME = COLLECTION_NAME;
AlertSourceSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;

/**
 * @name upsert
 * @function upsert
 * @description create or update existing alert source
 * @param {Object} alert valid alert details
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.2.2
 * @version 0.1.0
 * @public
 */
AlertSourceSchema.statics.upsert = function upsert(source, done) {
  // normalize arguments
  let _source = _.isFunction(source.toObject) ? source.toObject() : source;

  // refs
  const AlertSource = this;

  // prepare upsert
  waterfall(
    [
      function findExistingAlertSource(next) {
        // prepare criteria by _id or fields
        let criteria = _.merge({}, _source);
        /* jshint ignore:start */
        criteria = criteria._id
          ? _.pick(criteria, '_id')
          : _.pick(criteria, 'name');
        /* jshint ignore:end */
        AlertSource.findOne(criteria, next);
      },

      function upsertAlertSource(found, next) {
        // instantiate if not found
        if (!found) {
          found = new AlertSource(_source);
        }

        // prepare updates
        _source = _.merge({}, _source, found.toObject());

        // do upsert
        found.updatedAt = new Date();
        found.put(_source, next);
      },
    ],
    done
  );
};

/**
 * @name seed
 * @function seed
 * @description seed alert sources into database, on duplicate existing wins
 * on merging.
 * @param {AlertSource[]} [alertsources] set of alert source(s) to seed
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.1.0
 * @version 0.1.0
 * @public
 */
AlertSourceSchema.statics.seed = function seed(seeds, done) {
  // normalize arguments
  let _seeds = _.isFunction(seeds) ? [] : [].concat(seeds);
  const _done = _.isFunction(seeds) ? seeds : done;

  // refs
  const AlertSource = this;

  // init alerts collection
  let alerts = [];

  // try load seeds from environment
  const BASE_PATH = getString('BASE_PATH', process.cwd());
  const SEEDS_PATH = getString('SEEDS_PATH', path.join(BASE_PATH, 'seeds'));
  const SEED_PATH = path.join(SEEDS_PATH, ALERT_SEED);
  try {
    const seed = require(SEED_PATH);
    _seeds = [].concat(_seeds).concat(seed);
  } catch (e) {
    /* ignore */
  }

  // collect unique alert from seeds
  _seeds = _.compact(_seeds);
  _seeds = _.uniqWith(_seeds, _.isEqual);

  // upsert alerts
  alerts = _.map([].concat(_seeds), function(alert) {
    return function upsertAlertSources(next) {
      AlertSource.upsert(alert, next);
    };
  });

  // seed alerts
  parallel(alerts, _done);
};

/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */

/* plug mongoose rest actions*/
AlertSourceSchema.plugin(actions);
AlertSourceSchema.plugin(exportable);

/* export alert model */
exports = module.exports = model(MODEL_NAME, AlertSourceSchema);
