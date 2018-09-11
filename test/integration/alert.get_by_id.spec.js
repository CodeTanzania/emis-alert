'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Alert', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  describe('get by id', () => {

    let alert;

    before((done) => {
      alert = Alert.fake();
      alert.post((error, created) => {
        alert = created;
        done(error, created);
      });
    });

    it('should be able to get an instance', (done) => {
      Alert
        .getById(alert._id, (error, found) => {
          expect(error).to.not.exist;
          expect(found).to.exist;
          expect(found._id).to.eql(alert._id);
          done(error, found);
        });
    });

    it('should be able to get with options', (done) => {

      const options = {
        _id: alert._id,
        select: 'event'
      };

      Alert
        .getById(options, (error, found) => {
          expect(error).to.not.exist;
          expect(found).to.exist;
          expect(found._id).to.eql(alert._id);
          expect(found.event).to.exist;

          //...assert selection
          const fields = _.keys(found.toObject());
          expect(fields).to.have.length(2);
          _.map([
            'createdAt',
            'updatedAt'
          ], function (field) {
            expect(fields).to.not.include(field);
          });


          done(error, found);
        });

    });

    it('should throw if not exists', (done) => {
      const alert = Alert.fake();
      Alert
        .getById(alert._id, (error, found) => {
          expect(error).to.exist;
          expect(error.status).to.exist;
          expect(error.message).to.be.equal('Not Found');
          expect(found).to.not.exist;
          done();
        });
    });

  });

  after((done) => {
    Alert.deleteMany(done);
  });

});
