'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Source Schema', () => {

  it('should have name field', () => {
    const name = Alert.path('source.name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options.alias).to.be.equal('source');
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
  });

  it('should have phone field', () => {
    const phone = Alert.path('source.phone');

    expect(phone).to.exist;
    expect(phone).to.be.instanceof(Schema.Types.String);
    expect(phone.options.trim).to.be.true;
    expect(phone.options.required).to.be.true;
    expect(phone.options.index).to.be.true;
    expect(phone.options.searchable).to.be.true;
    expect(phone.options.fake).to.exist;
  });

  it('should have email field', () => {
    const email = Alert.path('source.email');

    expect(email).to.exist;
    expect(email).to.be.instanceof(Schema.Types.String);
    expect(email.options.trim).to.be.true;
    expect(email.options.lowercase).to.be.true;
    expect(email.options.required).to.be.true;
    expect(email.options.email).to.be.true;
    expect(email.options.index).to.be.true;
    expect(email.options.searchable).to.be.true;
    expect(email.options.fake).to.exist;
  });

  it('should have website field', () => {
    const website = Alert.path('source.website');

    expect(website).to.exist;
    expect(website).to.be.instanceof(Schema.Types.String);
    expect(website.options.alias).to.be.equal('sender');
    expect(website.options.trim).to.be.true;
    expect(website.options.index).to.be.true;
    expect(website.options.searchable).to.be.true;
    expect(website.options.fake).to.exist;
  });

});
