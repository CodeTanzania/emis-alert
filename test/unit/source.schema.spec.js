'use strict';


/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Schema } = require('mongoose');
const { AlertSource } = include(__dirname, '..', '..');

describe('AlertSource Schema', () => {

  it('should have name field', () => {
    const name = AlertSource.path('name');

    expect(name).to.exist;
    expect(name).to.be.an.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.startcase).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
    expect(name.options.fake).to.be.an('object');
  });

  it('should have mobile field', () => {
    const mobile = AlertSource.path('mobile');

    expect(mobile).to.exist;
    expect(mobile).to.be.an.instanceof(Schema.Types.String);
    expect(mobile.options).to.exist;
    expect(mobile.options).to.be.an('object');
    expect(mobile.options.type).to.exist;
    expect(mobile.options.trim).to.be.true;
    expect(mobile.options.required).to.be.true;
    expect(mobile.options.phone).to.be.true;
    expect(mobile.options.index).to.be.true;
    expect(mobile.options.unique).to.be.true;
    expect(mobile.options.searchable).to.be.true;
    expect(mobile.options.fake).to.exist;
    expect(mobile.options.fake).to.be.an('object');
  });

  it('should have email field', () => {
    const email = AlertSource.path('email');

    expect(email).to.exist;
    expect(email).to.be.an.instanceof(Schema.Types.String);
    expect(email.options).to.exist;
    expect(email.options).to.be.an('object');
    expect(email.options.type).to.exist;
    expect(email.options.trim).to.be.true;
    expect(email.options.required).to.be.true;
    expect(email.options.lowercase).to.be.true;
    expect(email.options.email).to.be.true;
    expect(email.options.index).to.be.true;
    expect(email.options.unique).to.be.true;
    expect(email.options.searchable).to.be.true;
    expect(email.options.fake).to.exist;
    expect(email.options.fake).to.be.an('object');
  });

  it('should have url field', () => {
    const url = AlertSource.path('url');

    expect(url).to.exist;
    expect(url).to.be.an.instanceof(Schema.Types.String);
    expect(url.options).to.exist;
    expect(url.options).to.be.an('object');
    expect(url.options.type).to.exist;
    expect(url.options.trim).to.be.true;
    expect(url.options.required).to.be.true;
    expect(url.options.lowercase).to.be.true;
    expect(url.options.index).to.be.true;
    expect(url.options.searchable).to.be.true;
    expect(url.options.fake).to.exist;
    expect(url.options.fake).to.be.an('object');
  });

  it('should have website field', () => {
    const website = AlertSource.path('website');

    expect(website).to.exist;
    expect(website).to.be.an.instanceof(Schema.Types.String);
    expect(website.options).to.exist;
    expect(website.options).to.be.an('object');
    expect(website.options.type).to.exist;
    expect(website.options.trim).to.be.true;
    expect(website.options.required).to.be.true;
    expect(website.options.lowercase).to.be.true;
    expect(website.options.index).to.be.true;
    expect(website.options.searchable).to.be.true;
    expect(website.options.fake).to.exist;
    expect(website.options.fake).to.be.an('object');
  });

});
