'use strict';


/* alert categories */
const CATEGORY_GEO = 'Geo';
const CATEGORY_MET = 'Met';
const CATEGORY_SAFETY = 'Safety';
const CATEGORY_SECURITY = 'Security';
const CATEGORY_RESCUE = 'Rescue';
const CATEGORY_FIRE = 'Fire';
const CATEGORY_HEALTH = 'Health';
const CATEGORY_ENV = 'Env';
const CATEGORY_TRANSPORT = 'Transport';
const CATEGORY_INFRA = 'Infra';
const CATEGORY_CBRNE = 'CBRNE';
const CATEGORY_OTHER = 'Other';
const CATEGORIES = [
  CATEGORY_GEO, CATEGORY_MET,
  CATEGORY_SAFETY, CATEGORY_SECURITY,
  CATEGORY_RESCUE, CATEGORY_FIRE,
  CATEGORY_HEALTH, CATEGORY_ENV,
  CATEGORY_TRANSPORT, CATEGORY_INFRA,
  CATEGORY_CBRNE, CATEGORY_OTHER
];


/* alert response types*/
const RESPONSE_TYPE_SHELTER = 'Shelter';
const RESPONSE_TYPE_EVACUATE = 'Evacuate';
const RESPONSE_TYPE_PREPARE = 'Prepare';
const RESPONSE_TYPE_EXECUTE = 'Execute';
const RESPONSE_TYPE_AVOID = 'Avoid';
const RESPONSE_TYPE_MONITOR = 'Monitor';
const RESPONSE_TYPE_ASSESS = 'Assess';
const RESPONSE_TYPE_ALL_CLEAR = 'AllClear';
const RESPONSE_TYPE_NONE = 'None';
const RESPONSE_TYPES = [
  RESPONSE_TYPE_SHELTER, RESPONSE_TYPE_EVACUATE,
  RESPONSE_TYPE_PREPARE, RESPONSE_TYPE_EXECUTE,
  RESPONSE_TYPE_AVOID, RESPONSE_TYPE_MONITOR,
  RESPONSE_TYPE_ASSESS, RESPONSE_TYPE_ALL_CLEAR,
  RESPONSE_TYPE_NONE
];


/* alert urgencies */
const URGENCY_IMMEDIATE = 'Immediate';
const URGENCY_EXPECTED = 'Expected';
const URGENCY_FUTURE = 'Future';
const URGENCY_PAST = 'Past';
const URGENCY_UNKNOWN = 'Unknown';
const URGENCIES = [
  URGENCY_IMMEDIATE, URGENCY_EXPECTED,
  URGENCY_FUTURE, URGENCY_PAST,
  URGENCY_UNKNOWN
];


/* alert severities */
const SEVERITY_EXTREME = 'Extreme';
const SEVERITY_SEVERE = 'Severe';
const SEVERITY_MODERATE = 'Moderate';
const SEVERITY_MINOR = 'Minor';
const SEVERITY_UNKNOWN = 'Unknown';
const SEVERITIES = [
  SEVERITY_EXTREME, SEVERITY_SEVERE,
  SEVERITY_MODERATE, SEVERITY_MINOR,
  SEVERITY_UNKNOWN
];


/* alert certainties */
const CERTAINTY_OBSERVED = 'Observed';
const CERTAINTY_LIKELY = 'Likely';
const CERTAINTY_POSSIBLE = 'Possible';
const CERTAINTY_UNLIKELY = 'Unlikely';
const CERTAINTY_UNKNOWN = 'Unknown';
const CERTAINTIES = [
  CERTAINTY_OBSERVED, CERTAINTY_LIKELY,
  CERTAINTY_POSSIBLE, CERTAINTY_UNLIKELY,
  CERTAINTY_UNKNOWN
];


const properties = {
  /**
   * @name language
   * @description Language of the alert message.
   * e.g en, en-US, sw etc.
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
  language: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'locale'
    }
  },


  /**
   * @name category
   * @description Human readable code denoting the category of the
   * subject event of the alert message. e.g Met, Fire etc.
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
  category: {
    type: String,
    trim: true,
    required: true,
    enum: CATEGORIES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name event
   * @description Human readable text denoting the type of the subject event
   * of the alert message.
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
   * @name responseType
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
  responseType: {
    type: String,
    trim: true,
    enum: RESPONSE_TYPES,
    index: true,
    searchable: true,
    fake: true
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
   * @name audience
   * @description Human readable text describing the intended audience of
   * the alert message.
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
  audience: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'sentence'
    }
  },


  /**
   * @name code
   * @alias eventCode
   * @description Human readable, system specific code identifying the event
   * type of the alert message e.g 2018090001, 20180001 etc
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} uppercase - force value to uppercase
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  code: {
    alias: 'eventCode',
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'alphaNumeric'
    }
  },


  /**
   * @name effective
   * @description The effective time of the information of the alert message
   * e.g e.g 2018-02-01T15:19:00
   *
   * If not set, the effective time SHALL be assumed to be the same as
   * in <sent>.
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
  effective: {
    type: Date,
    index: true,
    fake: {
      generator: 'date',
      type: 'past'
    }
  },


  /**
   * @name onset
   * @description The expected time of the beginning of the subject event of
   * the alert message e.g 2018-02-01T16:49:00
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
  onset: {
    type: Date,
    required: true,
    index: true,
    fake: {
      generator: 'date',
      type: 'recent'
    }
  },


  /**
   * @name expires
   * @description The  expiry time of the information of the alert message
   * e.g 2018-03-03T11:19:00
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
  expires: {
    type: Date,
    required: true,
    index: true,
    fake: {
      generator: 'date',
      type: 'future'
    }
  },


  /**
   * @name senderName
   * @description The human-readable name of the agency or authority
   * issuing alert message.
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
  senderName: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'company',
      type: 'companyName'
    }
  },


  /**
   * @name headline
   * @description A brief human-readable headline(title) of the alert.
   * e.g Flood Warning issued April 11 by TMA Dar es salaam etc.
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
  headline: {
    type: String,
    trim: true,
    // maxlength: 140,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name description
   * @description An extended human readable description of the hazard or
   * event that occasioned alert message.
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
   * @name instruction
   * @description Human readable text describing the recommended action to
   * be taken by recipients of the alert message
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
   * @name web
   * @description A full, absolute URI for an HTML page or other text resource
   * with additional or reference information regarding this alert.
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
  web: {
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
   * @name contact
   * @description The text describing the contact for follow-up and
   * confirmation of the alert message.
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
  contact: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'email'
    }
  },

  //TODO mixed parameters

};


/* exports */
exports = module.exports = {
  properties,
  CATEGORY_GEO,
  CATEGORY_MET,
  CATEGORY_SAFETY,
  CATEGORY_SECURITY,
  CATEGORY_RESCUE,
  CATEGORY_FIRE,
  CATEGORY_HEALTH,
  CATEGORY_ENV,
  CATEGORY_TRANSPORT,
  CATEGORY_INFRA,
  CATEGORY_CBRNE,
  CATEGORY_OTHER,
  CATEGORIES,
  RESPONSE_TYPE_SHELTER,
  RESPONSE_TYPE_EVACUATE,
  RESPONSE_TYPE_PREPARE,
  RESPONSE_TYPE_AVOID,
  RESPONSE_TYPE_MONITOR,
  RESPONSE_TYPE_ASSESS,
  RESPONSE_TYPE_ALL_CLEAR,
  RESPONSE_TYPE_NONE,
  RESPONSE_TYPES,
  URGENCY_IMMEDIATE,
  URGENCY_EXPECTED,
  URGENCY_FUTURE,
  URGENCY_PAST,
  URGENCY_UNKNOWN,
  URGENCIES,
  SEVERITY_EXTREME,
  SEVERITY_SEVERE,
  SEVERITY_MODERATE,
  SEVERITY_MINOR,
  SEVERITY_UNKNOWN,
  SEVERITIES,
  CERTAINTY_OBSERVED,
  CERTAINTY_LIKELY,
  CERTAINTY_POSSIBLE,
  CERTAINTY_UNLIKELY,
  CERTAINTY_UNKNOWN,
  CERTAINTIES
};
