'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));


describe('Alert Static Post', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  let alert = Alert.fake();

  it('should be able to post', (done) => {
    Alert.post(alert, (error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(alert._id);
      expect(created.event).to.eql(alert.event);
      done(error, created);
    });
  });

  after((done) => {
    Alert.deleteMany(done);
  });

});

describe('Alert Instance Post', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  let alert = Alert.fake();

  it('should be able to post', (done) => {
    alert.post((error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(alert._id);
      expect(created.event).to.eql(alert.event);
      done(error, created);
    });
  });

  after((done) => {
    Alert.deleteMany(done);
  });

});
