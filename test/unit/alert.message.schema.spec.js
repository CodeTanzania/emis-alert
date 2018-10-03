'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));
const {
  STATUSES,
  TYPES,
  SCOPES
} = Alert;


describe('Message Schema', () => {

  it('should have status field', () => {
    const status = Alert.path('message.status');

    expect(status).to.exist;
    expect(status).to.be.instanceof(Schema.Types.String);
    expect(status.options.trim).to.be.true;
    expect(status.options.required).to.be.true;
    expect(status.options.enum).to.exist;
    expect(status.options.enum).to.be.eql(STATUSES);
    expect(status.options.index).to.be.true;
    expect(status.options.searchable).to.be.true;
    expect(status.options.fake).to.exist;
  });

  it('should have type field', () => {
    const type = Alert.path('message.type');

    expect(type).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(type.options.trim).to.be.true;
    expect(type.options.required).to.be.true;
    expect(type.options.enum).to.be.exist;
    expect(type.options.enum).to.be.eql(TYPES);
    expect(type.options.index).to.be.true;
    expect(type.options.searchable).to.be.true;
    expect(type.options.fake).to.exist;
  });

  it('should have scope field', () => {
    const scope = Alert.path('message.scope');

    expect(scope).to.exist;
    expect(scope).to.be.instanceof(Schema.Types.String);
    expect(scope.options.trim).to.be.true;
    expect(scope.options.required).to.be.true;
    expect(scope.options.enum).to.exist;
    expect(scope.options.enum).to.be.eql(SCOPES);
    expect(scope.options.index).to.be.true;
    expect(scope.options.searchable).to.be.true;
    expect(scope.options.fake).to.exist;
  });

  it('should have restriction field', () => {
    const restriction = Alert.path('message.restriction');

    expect(restriction).to.exist;
    expect(restriction).to.be.instanceof(Schema.Types.String);
    expect(restriction.options.trim).to.be.true;
    expect(restriction.options.index).to.be.true;
    expect(restriction.options.searchable).to.be.true;
    expect(restriction.options.fake).to.exist;
  });

  it('should have addresses field', () => {
    const addresses = Alert.path('message.addresses');

    expect(addresses).to.exist;
    expect(addresses).to.be.instanceof(Schema.Types.Array);
    expect(addresses.options.trim).to.be.true;
    expect(addresses.options.lowercase).to.be.true;
    // expect(addresses.options.required).to.be.true;
    expect(addresses.options.index).to.be.true;
    expect(addresses.options.searchable).to.be.true;
    expect(addresses.options.fake).to.exist;
  });

  it('should have code field', () => {
    const code = Alert.path('message.code');

    expect(code).to.exist;
    expect(code).to.be.instanceof(Schema.Types.String);
    expect(code.options.trim).to.be.true;
    // expect(code.options.required).to.be.true;
    expect(code.options.index).to.be.true;
    expect(code.options.searchable).to.be.true;
    expect(code.options.fake).to.exist;
  });

  it('should have note field', () => {
    const note = Alert.path('message.note');

    expect(note).to.exist;
    expect(note).to.be.instanceof(Schema.Types.String);
    expect(note.options.trim).to.be.true;
    // expect(note.options.required).to.be.true;
    expect(note.options.index).to.be.true;
    expect(note.options.searchable).to.be.true;
    expect(note.options.fake).to.exist;
  });

  it('should have audience field', () => {
    const audience = Alert.path('message.audience');

    expect(audience).to.exist;
    expect(audience).to.be.instanceof(Schema.Types.String);
    expect(audience.options.trim).to.be.true;
    expect(audience.options.index).to.be.true;
    expect(audience.options.searchable).to.be.true;
    expect(audience.options.fake).to.exist;
  });

  it('should have headline field', () => {
    const headline = Alert.path('message.headline');

    expect(headline).to.exist;
    expect(headline).to.be.instanceof(Schema.Types.String);
    expect(headline.options.trim).to.be.true;
    // expect(headline.options.required).to.be.true;
    expect(headline.options.index).to.be.true;
    expect(headline.options.searchable).to.be.true;
    expect(headline.options.fake).to.exist;
  });

  it('should have instruction field', () => {
    const instruction = Alert.path('message.instruction');

    expect(instruction).to.exist;
    expect(instruction).to.be.instanceof(Schema.Types.String);
    expect(instruction.options.trim).to.be.true;
    expect(instruction.options.index).to.be.true;
    expect(instruction.options.searchable).to.be.true;
    expect(instruction.options.fake).to.exist;
  });

  it('should have website field', () => {
    const website = Alert.path('message.website');

    expect(website).to.exist;
    expect(website).to.be.instanceof(Schema.Types.String);
    expect(website.options.alias).to.be.equal('web');
    expect(website.options.trim).to.be.true;
    expect(website.options.index).to.be.true;
    expect(website.options.searchable).to.be.true;
    expect(website.options.fake).to.exist;
  });

});
