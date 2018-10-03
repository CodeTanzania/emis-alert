'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));
const {
  CATEGORIES,
  URGENCIES,
  SEVERITIES,
  CERTAINTIES,
  RESPONSE_TYPES
} = Alert;


describe('Event Schema', () => {

  it('should have code field', () => {
    const code = Alert.path('event.code');

    expect(code).to.exist;
    expect(code).to.be.instanceof(Schema.Types.String);
    expect(code.options.alias).to.be.equal('eventCode');
    expect(code.options.trim).to.be.true;
    // expect(code.options.required).to.be.true;
    expect(code.options.index).to.be.true;
    expect(code.options.searchable).to.be.true;
    expect(code.options.fake).to.exist;
  });

  it('should have name field', () => {
    const name = Alert.path('event.name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options.alias).to.be.equal('event');
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
  });

  it('should have category field', () => {
    const category = Alert.path('event.category');

    expect(category).to.exist;
    expect(category).to.be.instanceof(Schema.Types.String);
    expect(category.options.trim).to.be.true;
    expect(category.options.required).to.be.true;
    expect(category.options.enum).to.exist;
    expect(category.options.enum).to.be.eql(CATEGORIES);
    expect(category.options.index).to.be.true;
    expect(category.options.searchable).to.be.true;
    expect(category.options.fake).to.exist;
  });

  it('should have description field', () => {
    const description = Alert.path('event.description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
  });

  it('should have urgency field', () => {
    const urgency = Alert.path('event.urgency');

    expect(urgency).to.exist;
    expect(urgency).to.be.instanceof(Schema.Types.String);
    expect(urgency.options.trim).to.be.true;
    expect(urgency.options.required).to.be.true;
    expect(urgency.options.enum).to.exist;
    expect(urgency.options.enum).to.be.eql(URGENCIES);
    expect(urgency.options.index).to.be.true;
    expect(urgency.options.searchable).to.be.true;
    expect(urgency.options.fake).to.exist;
  });

  it('should have severity field', () => {
    const severity = Alert.path('event.severity');

    expect(severity).to.exist;
    expect(severity).to.be.instanceof(Schema.Types.String);
    expect(severity.options.trim).to.be.true;
    expect(severity.options.required).to.be.true;
    expect(severity.options.enum).to.exist;
    expect(severity.options.enum).to.be.eql(SEVERITIES);
    expect(severity.options.index).to.be.true;
    expect(severity.options.searchable).to.be.true;
    expect(severity.options.fake).to.exist;
  });

  it('should have certainty field', () => {
    const certainty = Alert.path('event.certainty');

    expect(certainty).to.exist;
    expect(certainty).to.be.instanceof(Schema.Types.String);
    expect(certainty.options.trim).to.be.true;
    expect(certainty.options.required).to.be.true;
    expect(certainty.options.enum).to.exist;
    expect(certainty.options.enum).to.be.eql(CERTAINTIES);
    expect(certainty.options.index).to.be.true;
    expect(certainty.options.searchable).to.be.true;
    expect(certainty.options.fake).to.exist;
  });

  it('should have response field', () => {
    const response = Alert.path('event.response');

    expect(response).to.exist;
    expect(response).to.be.instanceof(Schema.Types.String);
    expect(response.options.trim).to.be.true;
    expect(response.options.required).to.be.true;
    expect(response.options.enum).to.exist;
    expect(response.options.enum).to.be.eql(RESPONSE_TYPES);
    expect(response.options.index).to.be.true;
    expect(response.options.searchable).to.be.true;
    expect(response.options.fake).to.exist;
  });

});
