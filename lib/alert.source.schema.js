'use strict';


/* dependencies */
const mongoose = require('mongoose');
const { Schema } = mongoose;


/* constants */
const SUB_DOC_SCHEMA_OPTIONS = ({ _id: false, id: false, emitIndexErrors: true });


/**
 * @name SourceSchema
 * @description A party(or source or authority etc) issuing alert(or warning
 * or notification)
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const SourceSchema = new Schema({
  /**
   * @name name
   * @alias source
   * @alias senderName
   * @description Human readable name of party(agency, authority etc)
   * issuing(or generating) alert message e.g TMA etc.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  name: {
    alias: 'source',
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
   * @name phone
   * @description Primary mobile phone number used to contact alert source.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   * @example
   * 255765222333
   */
  phone: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'phone',
      type: 'phoneNumber'
    }
  },


  /**
   * @name email
   * @description Primary email address used to contact a alert source.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} lowercase - force lower-casing
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   * @example
   * john.juma@acme.com
   */
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    email: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'email'
    }
  },


  /**
   * @name website
   * @alias sender
   * @description Primary website url(or link) of alert source.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} lowercase - force lower-casing
   * @property {boolean} searchable - allow for searching
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   * @example
   * https://www.acme.com
   */
  website: {
    alias: 'sender',
    type: String,
    trim: true,
    lowercase: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'internet',
      type: 'url'
    }
  }

}, SUB_DOC_SCHEMA_OPTIONS);


/* exports alert source schema */
exports = module.exports = SourceSchema;
