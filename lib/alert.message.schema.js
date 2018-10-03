'use strict';


/* dependencies */
const path = require('path');
const mongoose = require('mongoose');
const constants = require(path.join(__dirname, 'alert.constants'));
const { Schema } = mongoose;


/* constants */
const SUB_DOC_SCHEMA_OPTIONS = ({ _id: false, id: false, emitIndexErrors: true });
const {
  STATUSES,
  TYPES,
  SCOPES
} = constants;


/**
 * @name MessageSchema
 * @description Denoting message of the alert.
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const MessageSchema = new Schema({
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
   * @name scope
   * @description Human readable code denoting the intended distribution
   * of the alert message e.g Public etc.
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
    trim: true,
    lowercase: true,
    // required: true,
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
   * the alert message e.g Red, Blue etc.
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
    // required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'commerce',
      type: 'color'
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
    // required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
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
    // required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
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
   * @name website
   * @alias web
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
  website: {
    alias: 'web',
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'url'
    }
  }


}, SUB_DOC_SCHEMA_OPTIONS);


/* exports alert event schema */
exports = module.exports = MessageSchema;
