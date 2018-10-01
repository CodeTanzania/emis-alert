'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Resource Schema', () => {

  const Resource = Alert.path('resources').schema;

  it('should have description field', () => {
    const description = Resource.path('description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options.alias).to.be.equal('resourceDesc');
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
  });

  it('should have mime field', () => {
    const mime = Resource.path('mime');

    expect(mime).to.exist;
    expect(mime).to.be.instanceof(Schema.Types.String);
    expect(mime.options.alias).to.be.equal('mimeType');
    expect(mime.options.trim).to.be.true;
    expect(mime.options.index).to.be.true;
    expect(mime.options.searchable).to.be.true;
    expect(mime.options.fake).to.exist;
  });

  it('should have uri field', () => {
    const uri = Resource.path('uri');

    expect(uri).to.exist;
    expect(uri).to.be.instanceof(Schema.Types.String);
    expect(uri.options.alias).to.be.equal('derefUri');
    expect(uri.options.trim).to.be.true;
    expect(uri.options.fake).to.exist;
  });

});
