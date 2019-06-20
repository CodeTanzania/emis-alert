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
const _ = require('lodash');
const uuidv1 = require('uuid/v1');
const { formatDate } = require('@lykmapipo/common');
const { getString } = require('@lykmapipo/env');
const {
  Schema,
  model,
  copyInstance,
  ObjectId,
  SCHEMA_OPTIONS,
} = require('@lykmapipo/mongoose-common');
const { Geometry, Point, centroidOf } = require('mongoose-geojson-schemas');
const { fetchContacts } = require('@codetanzania/emis-stakeholder');
const { Feature } = require('@codetanzania/emis-feature');
const { Campaign, FORM_ALERT } = require('@lykmapipo/postman')({
  fetchContacts,
});
const { DEFAULT_DATE_FORMAT } = require('@lykmapipo/constants');
const actions = require('mongoose-rest-actions');
const exportable = require('@lykmapipo/mongoose-exportable');
const Source = require('./source.model');
console.log(Feature.MODEL_NAME);

/* constants */

/* directions */
const DEFAULT_DIRECTION = 'Inbound';
const DIRECTIONS = ['Outbound', DEFAULT_DIRECTION];

/* statuses */
const DEFAULT_STATUS = 'Test';
const STATUSES = ['Actual', 'Exercise', 'System', 'Draft', DEFAULT_STATUS];

/* types */
const DEFAULT_TYPE = 'Ask';
const TYPES = ['Alert', 'Update', 'Cancel', 'Error', DEFAULT_TYPE];

/* scopes */
const DEFAULT_SCOPE = 'Private';
const SCOPES = ['Public', 'Restricted', DEFAULT_SCOPE];

/* categories */
const DEFAULT_CATEGORY = 'Other';
const CATEGORIES = [
  'Geo',
  'Met',
  'Safety',
  'Security',
  'Rescue',
  'Fire',
  'Health',
  'Env',
  'Transport',
  'Infra',
  'CBRNE',
  DEFAULT_CATEGORY,
];

/* responses*/
const DEFAULT_RESPONSE = 'None';
const RESPONSES = [
  'Shelter',
  'Evacuate',
  'Prepare',
  'Execute',
  'Avoid',
  'Monitor',
  'Assess',
  'AllClear',
  DEFAULT_RESPONSE,
];

/* urgencies */
const DEFAULT_URGENCY = 'Unknown';
const URGENCIES = ['Immediate', 'Expected', 'Future', 'Past', DEFAULT_URGENCY];

/* severities */
const DEFAULT_SEVERITY = 'Unknown';
const SEVERITIES = ['Extreme', 'Severe', 'Moderate', 'Minor', DEFAULT_SEVERITY];

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
  COLOR_EXTREME,
};

/* certainties */
const DEFAULT_CERTAINTY = 'Unknown';
const CERTAINTIES = [
  'Observed',
  'Likely',
  'Possible',
  'Unlikely',
  DEFAULT_CERTAINTY,
];

/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = getString('ALERT_MODEL_NAME', 'Alert');
const COLLECTION_NAME = getString('ALERT_COLLECTION_NAME', 'alerts');
const OPTION_AUTOPOPULATE = {
  maxDepth: POPULATION_MAX_DEPTH,
};

/**
 * @name AlertSchema
 * @type {Schema}
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const AlertSchema = new Schema(
  {
    /**
     * @name agency
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
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * World Meteorological Organization
     */
    agency: {
      type: ObjectId,
      ref: Source.MODEL_NAME,
      index: true,
      exists: { refresh: true, select: { name: 1 } },
      // taggable: true,
      autopopulate: {
        maxDepth: 1,
      },
    },

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
     * @property {boolean} taggable - allow field use for tagging
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
      // required: true,
      startcase: true,
      index: true,
      searchable: true,
      taggable: true,
      exportable: {
        header: 'Source',
        order: 1,
      },
      fake: {
        generator: 'company',
        type: 'companyName',
      },
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      fake: {
        generator: 'random',
        type: 'uuid',
      },
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Status',
        order: 2,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Category',
        order: 3,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Event',
        order: 4,
      },
      fake: {
        generator: 'lorem',
        type: 'sentence',
      },
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Response',
        order: 5,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Urgency',
        order: 6,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Severity',
        order: 7,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Certainty',
        order: 8,
      },
      fake: true,
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Headline',
        order: 9,
      },
      fake: {
        generator: 'lorem',
        type: 'sentence',
      },
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
      exportable: {
        header: 'Description',
        order: 10,
      },
      fake: {
        generator: 'lorem',
        type: 'paragraph',
      },
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
      exportable: {
        header: 'Instruction',
        order: 11,
      },
      fake: {
        generator: 'lorem',
        type: 'paragraph',
      },
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
        type: 'url',
      },
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      exportable: {
        header: 'Area',
        order: 12,
      },
      fake: {
        generator: 'address',
        type: 'county',
      },
    },

    /**
     * @name locations
     * @description Geo-features affected by alert.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} index - ensure database index
     *
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * Dar es salaam, Dodoma
     */
    locations: {
      type: [ObjectId],
      ref: Feature.MODEL_NAME,
      index: true,
      exists: { refresh: true, select: { name: 1 } },
      // taggable: true,
      autopopulate: {
        maxDepth: 1,
      },
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
      exportable: {
        header: 'Reported',
        order: 4,
        format: val => (val ? formatDate(val, DEFAULT_DATE_FORMAT) : val),
      },
      fake: {
        generator: 'date',
        type: 'past',
      },
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
      exportable: {
        header: 'Expected',
        order: 4,
        format: val => (val ? formatDate(val, DEFAULT_DATE_FORMAT) : val),
      },
      fake: {
        generator: 'date',
        type: 'recent',
      },
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
      exportable: {
        header: 'Expires',
        order: 4,
        format: val => (val ? formatDate(val, DEFAULT_DATE_FORMAT) : val),
      },
      fake: {
        generator: 'date',
        type: 'future',
      },
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
     * @property {boolean} taggable - allow field use for tagging
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
      taggable: true,
      fake: true,
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
      fake: true,
    },
  },
  SCHEMA_OPTIONS
);

/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */

AlertSchema.pre('validate', function(next) {
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

  //ensure alert headline
  if (_.isEmpty(this.headline) && _.isEmpty(this.event)) {
    this.headline = this.event;
  }

  // ensure centroid of Polygon
  if (this.geometry && !_.isEmpty(this.geometry.coordinates)) {
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

  // TODO ensue refs are populated

  // ensure sources
  if (this.agency && this.agency.name) {
    this.source = this.agency.name;
  }

  // ensure areas
  if (!_.isEmpty(this.locations)) {
    this.areas = _.compact(_.map(this.locations, 'name')).join(', ');
  }

  // return
  return done();
};

/**
 * @name afterPost
 * @function afterPost
 * @description alert schema after post hook logic
 * @param {Function} done callback to invoke on success or error
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
AlertSchema.methods.afterPost = function afterPost(done) {
  //ref
  const alert = this;

  // prepare notification
  // TODO use template
  const subject = alert.headline || alert.event || FORM_ALERT;
  const body = [alert.description, alert.instruction].join('\n');
  const notification = {
    form: FORM_ALERT,
    title: subject,
    subject: subject,
    message: body,
    criteria: {},
  };

  //send notification
  new Campaign(notification).queue(function(/* error , results*/) {
    // TODO handle swallowed error
    done(null, alert);
  });
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
 * @name prepareSeedCriteria
 * @function prepareSeedCriteria
 * @description prepare alert seeding upsert criteria
 * @param {Object} seed plain object alert seed
 * @return {Object} criteria used to upsert alert source
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.5.0
 * @version 0.1.0
 * @public
 */
AlertSchema.statics.prepareSeedCriteria = seed => {
  // prepare alert upsert criteria by _id or fields
  let criteria = copyInstance(seed);
  /* jshint ignore:start */
  criteria = criteria._id
    ? _.pick(criteria, '_id')
    : _.pick(criteria, 'source', 'number', 'category', 'event');
  /* jshint ignore:end */
  // return alert source upsert criteria
  return criteria;
};

/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */

/* plug mongoose rest actions*/
AlertSchema.plugin(actions);
AlertSchema.plugin(exportable);

/* export alert model */
exports = module.exports = model(MODEL_NAME, AlertSchema);
