'use strict';


/* dependencies */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* @todo describe resource usage */
/* @todo fetch resource(s) from uri and embed them as base64 */

/* constants */
const SUB_DOC_SCHEMA_OPTIONS = ({ _id: false, id: false, emitIndexErrors: true });

/**
 * @name ResourceSchema
 * @description Additional file with supplemental information related to alert
 * message e.g. an image or audio file.
 *
 * @type {Schema}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 1.0.0
 * @private
 */
const ResourceSchema = new Schema({
  /**
   * @name description
   * @description Human readable text describing the type and content,
   * such as map, video, audio or photo, of the resource file.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  description: {
    alias: 'resourceDesc',
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
   * @name mime
   * @alias mimeType
   * @description Content type describing the resource file.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  mime: {
    alias: 'mimeType',
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'system',
      type: 'mimeType'
    }
  },


  /**
   * @name uri
   * @name derefUri
   * @description A full absolute URI, typically a Uniform Resource Locator
   * that can be used to retrieve the resource over the Internet.
   *
   * It may be base64 encoded data used instead of the uri element in
   * messages transmitted over one-way (e.g., broadcast) data links
   * where retrieval of a resource via a URI is not feasible.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  uri: {
    alias: 'derefUri',
    type: String,
    trim: true,
    fake: {
      generator: 'image',
      type: 'avatar'
    }
  }
}, SUB_DOC_SCHEMA_OPTIONS);


/* exports resource schema */
exports = module.exports = ResourceSchema;
