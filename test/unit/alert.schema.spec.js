'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));
const { DIRECTIONS } = Alert;

describe('Alert Schema', () => {

  it('should have source field', () => {
    const source = Alert.path('source');

    expect(source).to.exist;
    expect(source.schema).to.be.instanceof(Schema);
  });

  it('should have event field', () => {
    const event = Alert.path('event');

    expect(event).to.exist;
    expect(event.schema).to.be.instanceof(Schema);
  });

  it('should have message field', () => {
    const message = Alert.path('message');

    expect(message).to.exist;
    expect(message.schema).to.be.instanceof(Schema);
  });

  it('should have area field', () => {
    const area = Alert.path('area');

    expect(area).to.exist;
    expect(area.schema).to.be.instanceof(Schema);
  });

  it('should have resources field', () => {
    const resources = Alert.path('resources');

    expect(resources).to.exist;
    expect(resources.schema).to.be.instanceof(Schema);
  });

  it('should have reportedAt field', () => {
    const reportedAt = Alert.path('reportedAt');

    expect(reportedAt).to.exist;
    expect(reportedAt).to.be.instanceof(Schema.Types.Date);
    expect(reportedAt.options.alias).to.be.equal('sent');
    expect(reportedAt.options.required).to.be.true;
    expect(reportedAt.options.index).to.be.true;
    expect(reportedAt.options.fake).to.exist;
  });

  it('should have expectedAt field', () => {
    const expectedAt = Alert.path('expectedAt');

    expect(expectedAt).to.exist;
    expect(expectedAt).to.be.instanceof(Schema.Types.Date);
    expect(expectedAt.options.required).to.be.true;
    expect(expectedAt.options.index).to.be.true;
    expect(expectedAt.options.fake).to.exist;
  });

  it('should have expiredAt field', () => {
    const expiredAt = Alert.path('expiredAt');

    expect(expiredAt).to.exist;
    expect(expiredAt).to.be.instanceof(Schema.Types.Date);
    expect(expiredAt.options.alias).to.be.equal('expires');
    expect(expiredAt.options.required).to.be.true;
    expect(expiredAt.options.index).to.be.true;
    expect(expiredAt.options.fake).to.exist;
  });

  it('should have occuredAt field', () => {
    const occuredAt = Alert.path('occuredAt');

    expect(occuredAt).to.exist;
    expect(occuredAt).to.be.instanceof(Schema.Types.Date);
    expect(occuredAt.options.alias).to.be.equal('effective');
    expect(occuredAt.options.index).to.be.true;
    expect(occuredAt.options.fake).to.exist;
  });

  it('should have endedAt field', () => {
    const endedAt = Alert.path('endedAt');

    expect(endedAt).to.exist;
    expect(endedAt).to.be.instanceof(Schema.Types.Date);
    expect(endedAt.options.index).to.be.true;
    expect(endedAt.options.fake).to.exist;
  });

  it('should have direction field', () => {
    const direction = Alert.path('direction');

    expect(direction).to.exist;
    expect(direction).to.be.instanceof(Schema.Types.String);
    expect(direction.options.trim).to.be.true;
    expect(direction.options.required).to.be.true;
    expect(direction.options.enum).to.exist;
    expect(direction.options.enum).to.be.eql(DIRECTIONS);
    expect(direction.options.index).to.be.true;
    expect(direction.options.searchable).to.be.true;
    expect(direction.options.fake).to.exist;
  });

});
