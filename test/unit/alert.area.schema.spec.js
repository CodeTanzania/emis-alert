'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Area Schema', () => {

  it('should have description field', () => {
    const description = Alert.path('area.description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options.alias).to.be.equal('areaDesc');
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
  });

  it('should have geometry field', () => {
    const geometry = Alert.path('area.geometry');
    const type = Alert.path('area.geometry.type');
    const coordinates = Alert.path('area.geometry.coordinates');

    expect(geometry).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(coordinates).to.be.instanceof(Schema.Types.Array);
  });

  it('should have altitude field', () => {
    const altitude = Alert.path('area.altitude');

    expect(altitude).to.exist;
    expect(altitude).to.be.instanceof(Schema.Types.Number);
    expect(altitude.options.index).to.be.true;
    expect(altitude.options.fake).to.exist;
  });

  it('should have ceiling field', () => {
    const ceiling = Alert.path('area.ceiling');

    expect(ceiling).to.exist;
    expect(ceiling).to.be.instanceof(Schema.Types.Number);
    expect(ceiling.options.index).to.be.true;
    expect(ceiling.options.fake).to.exist;
  });

});
