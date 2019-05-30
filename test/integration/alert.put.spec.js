'use strict';


/* dependencies */
const _ = require('lodash');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');


describe('Alert Static Put', () => {

  before((done) => clear(done));

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to put', (done) => {
    alert = alert.fakeOnly('event');
    Alert.put(alert._id, alert, (error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      expect(updated.event).to.eql(alert.event);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    const fake = Alert.fake().toObject();
    Alert.put(fake._id, _.omit(fake, '_id'), (error, updated) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(updated).to.not.exist;
      done();
    });
  });

  after((done) => clear(done));

});


describe('Alert Instance Put', () => {

  before((done) => clear(done));

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to put', (done) => {
    alert = alert.fakeOnly('event');
    alert.put((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      expect(updated.event).to.eql(alert.event);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    alert.put((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      done();
    });
  });

  after((done) => clear(done));

});
