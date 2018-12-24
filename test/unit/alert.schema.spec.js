'use strict';


/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Schema } = require('mongoose');
const { Alert } = include(__dirname, '..', '..');
const {
  STATUSES,
  DEFAULT_STATUS,
  TYPES,
  DEFAULT_TYPE,
  SCOPES,
  DEFAULT_SCOPE,
  CATEGORIES,
  DEFAULT_CATEGORY,
  RESPONSES,
  DEFAULT_RESPONSE,
  URGENCIES,
  DEFAULT_URGENCY,
  SEVERITIES,
  DEFAULT_SEVERITY,
  CERTAINTIES,
  DEFAULT_CERTAINTY,
  DIRECTIONS,
  DEFAULT_DIRECTION
} = Alert;

describe('Alert Schema', () => {

  it('should have source field', () => {
    const source = Alert.path('source');

    expect(source).to.exist;
    expect(source).to.be.an.instanceof(Schema.Types.String);
    expect(source.options).to.exist;
    expect(source.options).to.be.an('object');
    expect(source.options.type).to.exist;
    expect(source.options.trim).to.be.true;
    expect(source.options.required).to.be.true;
    expect(source.options.startcase).to.be.true;
    expect(source.options.index).to.be.true;
    expect(source.options.searchable).to.be.true;
    expect(source.options.fake).to.exist;
    expect(source.options.fake).to.be.an('object');
  });

  it('should have number field', () => {
    const number = Alert.path('number');

    expect(number).to.exist;
    expect(number).to.be.an.instanceof(Schema.Types.String);
    expect(number.options).to.exist;
    expect(number.options).to.be.an('object');
    expect(number.options.type).to.exist;
    expect(number.options.trim).to.be.true;
    expect(number.options.required).to.be.true;
    expect(number.options.uppercase).to.be.true;
    expect(number.options.index).to.be.true;
    expect(number.options.searchable).to.be.true;
    expect(number.options.fake).to.exist;
    expect(number.options.fake).to.be.an('object');
  });

  it('should have status field', () => {
    const status = Alert.path('status');

    expect(status).to.exist;
    expect(status).to.be.instanceof(Schema.Types.String);
    expect(status.options).to.exist;
    expect(status.options).to.be.an('object');
    expect(status.options.type).to.exist;
    expect(status.options.trim).to.be.true;
    expect(status.options.default).to.be.exist;
    expect(status.options.default).to.be.eql(DEFAULT_STATUS);
    expect(status.options.enum).to.exist;
    expect(status.options.enum).to.be.eql(STATUSES);
    expect(status.options.index).to.be.true;
    expect(status.options.searchable).to.be.true;
    expect(status.options.fake).to.exist;
    expect(status.options.fake).to.be.true;
  });

  it('should have type field', () => {
    const type = Alert.path('type');

    expect(type).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(type.options).to.exist;
    expect(type.options).to.be.an('object');
    expect(type.options.type).to.exist;
    expect(type.options.trim).to.be.true;
    expect(type.options.default).to.be.exist;
    expect(type.options.default).to.be.eql(DEFAULT_TYPE);
    expect(type.options.enum).to.exist;
    expect(type.options.enum).to.be.eql(TYPES);
    expect(type.options.index).to.be.true;
    expect(type.options.searchable).to.be.true;
    expect(type.options.fake).to.exist;
    expect(type.options.fake).to.be.true;
  });

  it('should have scope field', () => {
    const scope = Alert.path('scope');

    expect(scope).to.exist;
    expect(scope).to.be.instanceof(Schema.Types.String);
    expect(scope.options).to.exist;
    expect(scope.options).to.be.an('object');
    expect(scope.options.type).to.exist;
    expect(scope.options.trim).to.be.true;
    expect(scope.options.default).to.be.exist;
    expect(scope.options.default).to.be.eql(DEFAULT_SCOPE);
    expect(scope.options.enum).to.exist;
    expect(scope.options.enum).to.be.eql(SCOPES);
    expect(scope.options.index).to.be.true;
    expect(scope.options.searchable).to.be.true;
    expect(scope.options.fake).to.exist;
    expect(scope.options.fake).to.be.true;
  });

  it('should have category field', () => {
    const category = Alert.path('category');

    expect(category).to.exist;
    expect(category).to.be.instanceof(Schema.Types.String);
    expect(category.options).to.exist;
    expect(category.options).to.be.an('object');
    expect(category.options.type).to.exist;
    expect(category.options.trim).to.be.true;
    expect(category.options.default).to.be.exist;
    expect(category.options.default).to.be.eql(DEFAULT_CATEGORY);
    expect(category.options.enum).to.exist;
    expect(category.options.enum).to.be.eql(CATEGORIES);
    expect(category.options.index).to.be.true;
    expect(category.options.searchable).to.be.true;
    expect(category.options.fake).to.exist;
    expect(category.options.fake).to.be.true;
  });

  it('should have event field', () => {
    const event = Alert.path('event');

    expect(event).to.exist;
    expect(event).to.be.an.instanceof(Schema.Types.String);
    expect(event.options).to.exist;
    expect(event.options).to.be.an('object');
    expect(event.options.type).to.exist;
    expect(event.options.trim).to.be.true;
    expect(event.options.required).to.be.true;
    expect(event.options.index).to.be.true;
    expect(event.options.searchable).to.be.true;
    expect(event.options.fake).to.exist;
    expect(event.options.fake).to.be.an('object');
  });

  it('should have response field', () => {
    const response = Alert.path('response');

    expect(response).to.exist;
    expect(response).to.be.instanceof(Schema.Types.String);
    expect(response.options).to.exist;
    expect(response.options).to.be.an('object');
    expect(response.options.type).to.exist;
    expect(response.options.trim).to.be.true;
    expect(response.options.default).to.be.exist;
    expect(response.options.default).to.be.eql(DEFAULT_RESPONSE);
    expect(response.options.enum).to.exist;
    expect(response.options.enum).to.be.eql(RESPONSES);
    expect(response.options.index).to.be.true;
    expect(response.options.searchable).to.be.true;
    expect(response.options.fake).to.exist;
    expect(response.options.fake).to.be.true;
  });

  it('should have urgency field', () => {
    const urgency = Alert.path('urgency');

    expect(urgency).to.exist;
    expect(urgency).to.be.instanceof(Schema.Types.String);
    expect(urgency.options).to.exist;
    expect(urgency.options).to.be.an('object');
    expect(urgency.options.type).to.exist;
    expect(urgency.options.trim).to.be.true;
    expect(urgency.options.default).to.be.exist;
    expect(urgency.options.default).to.be.eql(DEFAULT_URGENCY);
    expect(urgency.options.enum).to.exist;
    expect(urgency.options.enum).to.be.eql(URGENCIES);
    expect(urgency.options.index).to.be.true;
    expect(urgency.options.searchable).to.be.true;
    expect(urgency.options.fake).to.exist;
    expect(urgency.options.fake).to.be.true;
  });

  it('should have severity field', () => {
    const severity = Alert.path('severity');

    expect(severity).to.exist;
    expect(severity).to.be.instanceof(Schema.Types.String);
    expect(severity.options).to.exist;
    expect(severity.options).to.be.an('object');
    expect(severity.options.type).to.exist;
    expect(severity.options.trim).to.be.true;
    expect(severity.options.default).to.be.exist;
    expect(severity.options.default).to.be.eql(DEFAULT_SEVERITY);
    expect(severity.options.enum).to.exist;
    expect(severity.options.enum).to.be.eql(SEVERITIES);
    expect(severity.options.index).to.be.true;
    expect(severity.options.searchable).to.be.true;
    expect(severity.options.fake).to.exist;
    expect(severity.options.fake).to.be.true;
  });

  it('should have certainty field', () => {
    const certainty = Alert.path('certainty');

    expect(certainty).to.exist;
    expect(certainty).to.be.instanceof(Schema.Types.String);
    expect(certainty.options).to.exist;
    expect(certainty.options).to.be.an('object');
    expect(certainty.options.type).to.exist;
    expect(certainty.options.trim).to.be.true;
    expect(certainty.options.default).to.be.exist;
    expect(certainty.options.default).to.be.eql(DEFAULT_CERTAINTY);
    expect(certainty.options.enum).to.exist;
    expect(certainty.options.enum).to.be.eql(CERTAINTIES);
    expect(certainty.options.index).to.be.true;
    expect(certainty.options.searchable).to.be.true;
    expect(certainty.options.fake).to.exist;
    expect(certainty.options.fake).to.be.true;
  });

  it('should have headline field', () => {
    const headline = Alert.path('headline');

    expect(headline).to.exist;
    expect(headline).to.be.an.instanceof(Schema.Types.String);
    expect(headline.options).to.exist;
    expect(headline.options).to.be.an('object');
    expect(headline.options.type).to.exist;
    expect(headline.options.trim).to.be.true;
    expect(headline.options.index).to.be.true;
    expect(headline.options.searchable).to.be.true;
    expect(headline.options.fake).to.exist;
    expect(headline.options.fake).to.be.an('object');
  });

  it('should have description field', () => {
    const description = Alert.path('description');

    expect(description).to.exist;
    expect(description).to.be.an.instanceof(Schema.Types.String);
    expect(description.options).to.exist;
    expect(description.options).to.be.an('object');
    expect(description.options.type).to.exist;
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
    expect(description.options.fake).to.be.an('object');
  });

  it('should have instruction field', () => {
    const instruction = Alert.path('instruction');

    expect(instruction).to.exist;
    expect(instruction).to.be.an.instanceof(Schema.Types.String);
    expect(instruction.options).to.exist;
    expect(instruction.options).to.be.an('object');
    expect(instruction.options.type).to.exist;
    expect(instruction.options.trim).to.be.true;
    expect(instruction.options.index).to.be.true;
    expect(instruction.options.searchable).to.be.true;
    expect(instruction.options.fake).to.exist;
    expect(instruction.options.fake).to.be.an('object');
  });

  it('should have url field', () => {
    const url = Alert.path('url');

    expect(url).to.exist;
    expect(url).to.be.an.instanceof(Schema.Types.String);
    expect(url.options).to.exist;
    expect(url.options).to.be.an('object');
    expect(url.options.type).to.exist;
    expect(url.options.trim).to.be.true;
    expect(url.options.index).to.be.true;
    expect(url.options.searchable).to.be.true;
    expect(url.options.fake).to.exist;
    expect(url.options.fake).to.be.an('object');
  });

  it('should have area field', () => {
    const area = Alert.path('area');

    expect(area).to.exist;
    expect(area).to.be.an.instanceof(Schema.Types.String);
    expect(area.options).to.exist;
    expect(area.options).to.be.an('object');
    expect(area.options.type).to.exist;
    expect(area.options.trim).to.be.true;
    expect(area.options.required).to.be.true;
    expect(area.options.index).to.be.true;
    expect(area.options.searchable).to.be.true;
    expect(area.options.fake).to.exist;
    expect(area.options.fake).to.be.an('object');
  });

  it('should have reportedAt field', () => {
    const reportedAt = Alert.path('reportedAt');

    expect(reportedAt).to.exist;
    expect(reportedAt).to.be.instanceof(Schema.Types.Date);
    expect(reportedAt.options.required).to.be.true;
    expect(reportedAt.options.index).to.be.true;
    expect(reportedAt.options.fake).to.exist;
    expect(reportedAt.options.fake).to.be.an('object');
  });

  it('should have expectedAt field', () => {
    const expectedAt = Alert.path('expectedAt');

    expect(expectedAt).to.exist;
    expect(expectedAt).to.be.instanceof(Schema.Types.Date);
    expect(expectedAt.options.index).to.be.true;
    expect(expectedAt.options.fake).to.exist;
    expect(expectedAt.options.fake).to.be.an('object');
  });

  it('should have expiredAt field', () => {
    const expiredAt = Alert.path('expiredAt');

    expect(expiredAt).to.exist;
    expect(expiredAt).to.be.instanceof(Schema.Types.Date);
    expect(expiredAt.options.index).to.be.true;
    expect(expiredAt.options.fake).to.exist;
    expect(expiredAt.options.fake).to.be.an('object');
  });

  it('should have direction field', () => {
    const direction = Alert.path('direction');

    expect(direction).to.exist;
    expect(direction).to.be.instanceof(Schema.Types.String);
    expect(direction.options).to.exist;
    expect(direction.options).to.be.an('object');
    expect(direction.options.type).to.exist;
    expect(direction.options.trim).to.be.true;
    expect(direction.options.default).to.be.exist;
    expect(direction.options.default).to.be.eql(DEFAULT_DIRECTION);
    expect(direction.options.enum).to.exist;
    expect(direction.options.enum).to.be.eql(DIRECTIONS);
    expect(direction.options.index).to.be.true;
    expect(direction.options.searchable).to.be.true;
    expect(direction.options.fake).to.exist;
    expect(direction.options.fake).to.be.true;
  });

});
