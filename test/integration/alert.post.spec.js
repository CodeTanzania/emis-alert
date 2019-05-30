'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');

describe('Alert Static Post', () => {
  before(done => clear(done));

  let alert = Alert.fake();

  it('should be able to post', done => {
    Alert.post(alert, (error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(alert._id);
      expect(created.event).to.eql(alert.event);
      done(error, created);
    });
  });

  after(done => clear(done));
});

describe('Alert Instance Post', () => {
  before(done => clear(done));

  let alert = Alert.fake();

  it('should be able to post', done => {
    alert.post((error, created) => {
      expect(error).to.not.exist;
      expect(created).to.exist;
      expect(created._id).to.eql(alert._id);
      expect(created.event).to.eql(alert.event);
      done(error, created);
    });
  });

  after(done => clear(done));
});
