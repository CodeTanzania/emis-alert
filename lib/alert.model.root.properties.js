'use strict';


/* alert direction */
const DIRECTION_INBOUND = 'Inbound';
const DIRECTION_OUTBOUND = 'Outbound';
const DIRECTIONS = [DIRECTION_INBOUND, DIRECTION_OUTBOUND];


/* alert statuses */
const STATUS_ACTUAL = 'Actual';
const STATUS_EXERCISE = 'Exercise';
const STATUS_SYSTEM = 'System';
const STATUS_TEST = 'Test';
const STATUS_DRAFT = 'Draft';
const STATUSES = [
  STATUS_ACTUAL, STATUS_EXERCISE,
  STATUS_SYSTEM, STATUS_TEST,
  STATUS_DRAFT
];


/* alert types */
const TYPE_ALERT = 'Alert';
const TYPE_UPDATE = 'Update';
const TYPE_CANCEL = 'Cancel';
const TYPE_ASK = 'Ask';
const TYPE_ERROR = 'Error';
const TYPES = [
  TYPE_ALERT, TYPE_UPDATE,
  TYPE_CANCEL, TYPE_ASK,
  TYPE_ERROR
];


/* alert scopes */
const SCOPE_PUBLIC = 'Public';
const SCOPE_RESTRICTED = 'Restricted';
const SCOPE_PRIVATE = 'Private';
const SCOPES = [
  SCOPE_PUBLIC, SCOPE_RESTRICTED,
  SCOPE_PRIVATE
];


const properties = {
  /**
   * @name sender
   * @description Human readable identifier of the sender of the alert message
   * e.g john.juma@example.com etc.
   *
   * Identifies the originator of this alert. Guaranteed by assigner to
   * be unique globally; e.g., may be based on an Internet domain name.
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
  sender: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'email'
    }
  },


  /**
   * @name issuedAt
   * @alias sent
   * @description Date and time the alert was issued(or generated) by the alert
   * source(or generator) e.g 2018-07-28 23:53:19 etc.
   *
   * @type {object}
   * @property {string} alias - alternative name
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  issuedAt: {
    alias: 'sent',
    type: Date,
    required: true,
    index: true,
    fake: {
      generator: 'date',
      type: 'recent'
    }
  },


  /**
   * @name status
   * @description Human readable code denoting the appropriate handling of
   * the alert message e.g Test etc.
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
  status: {
    type: String,
    trim: true,
    required: true,
    enum: STATUSES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name type
   * @alias msgType
   * @description Human readable code denoting the nature of the alert message
   * e.g Test etc.
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
  type: {
    alias: 'msgType',
    type: String,
    trim: true,
    required: true,
    enum: TYPES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name source
   * @description Human readable name of authority(or party)
   * issuing(or generating) the alert
   * e.g TMA etc.
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
  source: {
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
   * @name scope
   * @description Human readable code denoting the intended
   * distribution of the alert message e.g Public etc.
   *
   * Values:
   * 1. Public - For general dissemination to unrestricted audiences
   * 2. Restricted - For dissemination only to users with a known operational
   * requirement (see <restriction>, below)
   * 3. Private - For dissemination only to specified addresses
   * (see <addresses>,below)
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
  scope: {
    type: String,
    trim: true,
    required: true,
    enum: SCOPES,
    index: true,
    searchable: true,
    fake: true
  },


  /**
   * @name restriction
   * @description Human readable text describing the rule for
   * limiting distribution of the restricted alert message.
   *
   * It used when scope value is "Restricted".
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
  restriction: {
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
   * @name addresses
   * @description List of human readable addresses(or groups or roles) of
   * intended recipients of the alert message.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  addresses: {
    type: [String],
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'email'
    }
  },


  /**
   * @name code
   * @description Human readable code denoting the special handling of
   * the alert message.
   *
   * Its any user-defined flag or special code used to flag the alert
   * message for special handling.
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
  code: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'finance',
      type: 'account'
    }
  },


  /**
   * @name note
   * @description Human readable text describing the purpose or significance
   * of the alert message.
   *
   * Its primarily intended for use with status - Exercise and
   * type(or msgType) - Error.
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
  note: {
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
   * @name references
   * @description List of group identifying earlier message(s)
   * referenced by the alert message.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  references: {
    type: [String],
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'uuid'
    }
  },


  /**
   * @name incidents
   * @description List of referent incident(s) of the alert message.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  incidents: {
    type: [String],
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'random',
      type: 'uuid'
    }
  },


  /**
   * @name direction
   * @description Human readable direction(received or given) of the alert
   * i.e Inbound or Outbound.
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
  direction: {
    type: String,
    trim: true,
    required: true,
    enum: DIRECTIONS,
    default: DIRECTION_INBOUND,
    index: true,
    searchable: true,
    fake: true
  }

};


/* exports */
exports = module.exports = {
  properties,
  DIRECTION_INBOUND,
  DIRECTION_OUTBOUND,
  DIRECTIONS,
  STATUS_ACTUAL,
  STATUS_EXERCISE,
  STATUS_SYSTEM,
  STATUS_TEST,
  STATUS_DRAFT,
  STATUSES,
  TYPE_ALERT,
  TYPE_UPDATE,
  TYPE_CANCEL,
  TYPE_ASK,
  TYPE_ERROR,
  TYPES,
  SCOPE_PUBLIC,
  SCOPE_RESTRICTED,
  SCOPE_PRIVATE,
  SCOPES
};
