'use strict';


/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');


describe('Alert Static Patch', () => {

  before((done) => clear(done));

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to patch', (done) => {
    alert = alert.fakeOnly('event');
    Alert.patch(alert._id, alert, (error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      expect(updated.event).to.eql(alert.event);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    const fake = Alert.fake();
    Alert.patch(fake._id, fake, (error, updated) => {
      expect(error).to.exist;
      expect(error.status).to.exist;
      expect(error.message).to.be.equal('Not Found');
      expect(updated).to.not.exist;
      done();
    });
  });

  after((done) => clear(done));

});


describe('Alert Instance Patch', () => {

  before((done) => clear(done));

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to patch', (done) => {
    alert = alert.fakeOnly('event');
    alert.patch((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      expect(updated.event).to.eql(alert.event);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    alert.patch((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(alert._id);
      done();
    });
  });

  after((done) => clear(done));

});
