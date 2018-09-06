'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Alert', function () {

  before((done) => {
    Alert.deleteMany(done);
  });

  describe('static patch', function () {

    let alert;

    before((done) => {
      alert = Alert.fake();
      alert.post(function (error, created) {
        alert = created;
        done(error, created);
      });
    });

    it('should be able to patch', (done) => {
      alert = alert.fakeOnly('title');
      Alert
        .patch(alert._id, alert, (error, updated) => {
          expect(error).to.not.exist;
          expect(updated).to.exist;
          expect(updated._id).to.eql(alert._id);
          expect(updated.title).to.equal(alert.title);
          done(error, updated);
        });

    });

    it('should throw if not exists', (done) => {

      const fake = Alert.fake();

      Alert
        .patch(fake._id, fake, (error, updated) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(updated).to.not.exist;
          done();
        });

    });

  });

  describe('instance patch', function () {
    let alert;

    before((done) => {
      alert = Alert.fake();
      alert.post((error, created) => {
        alert = created;
        done(error, created);
      });
    });

    it('should be able to patch', (done) => {
      alert = alert.fakeOnly('title');
      alert.patch((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(alert._id);
        expect(updated.title).to.equal(alert.title);
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

  });

  after((done) => {
    Alert.deleteMany(done);
  });

});
