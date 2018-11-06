'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Alert Static Delete', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    Alert.del(alert._id, (error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    Alert.del(alert._id, (error, deleted) => {
      expect(error).to.exist;
      expect(error.status).to.exist;
      expect(error.message).to.be.equal('Not Found');
      expect(deleted).to.not.exist;
      done();
    });
  });

  after((done) => {
    Alert.deleteMany(done);
  });

});

describe('Alert Instance Delete', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  let alert = Alert.fake();

  before((done) => {
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    alert.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    alert.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(alert._id);
      done();
    });
  });

  after((done) => {
    Alert.deleteMany(done);
  });

});
