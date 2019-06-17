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
const _ = require('lodash');
const { Schema, model, copyInstance, SCHEMA_OPTIONS } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const exportable = require('@lykmapipo/mongoose-exportable');

/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = 'AlertSource';
const COLLECTION_NAME = 'alertsources';
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
 * @name prepareSeedCriteria
 * @function prepareSeedCriteria
 * @description prepare alert source seeding upsert criteria
 * @param {Object} seed plain object alert source seed
 * @return {Object} criteria used to upsert alert source
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.5.0
 * @version 0.1.0
 * @public
 */
AlertSourceSchema.statics.prepareSeedCriteria = seed => {
  // prepare alert upsert criteria by _id or fields
  let criteria = copyInstance(seed);
  criteria = (
    criteria._id ?
      _.pick(criteria, '_id') :
      _.pick(criteria, 'name')
  );

  // return alert source upsert criteria
  return criteria;
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
