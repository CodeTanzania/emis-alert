'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Alert', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  describe('static post', () => {

    let alert;

    it('should be able to post', (done) => {
      alert = Alert.fake();
      Alert.post(alert, (error, created) => {
        expect(error).to.not.exist;
        expect(created).to.exist;
        expect(created._id).to.eql(alert._id);
        expect(created.title).to.equal(alert.title);
        done(error, created);
      });
    });

  });

  describe('instance post', () => {

    let alert;

    it('should be able to post', (done) => {
      alert = Alert.fake();
      alert.post((error, created) => {
        expect(error).to.not.exist;
        expect(created).to.exist;
        expect(created._id).to.eql(alert._id);
        expect(created.title).to.equal(alert.title);
        done(error, created);
      });
    });

  });

  after((done) => {
    Alert.deleteMany(done);
  });

});
