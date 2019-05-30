'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');

describe('Alert Static Delete', () => {
  before(done => clear(done));

  let alert = Alert.fake();

  before(done => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to delete', done => {
    Alert.del(alert._id, (error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', done => {
    Alert.del(alert._id, (error, deleted) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(deleted).to.not.exist;
      done();
    });
  });

  after(done => clear(done));
});

describe('Alert Instance Delete', () => {
  before(done => clear(done));

  let alert = Alert.fake();

  before(done => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to delete', done => {
    alert.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', done => {
    alert.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done();
    });
  });

  after(done => clear(done));
});
