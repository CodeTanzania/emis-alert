'use strict';

/* dependencies */
const faker = require('@benmaruchu/faker');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');

describe('Alert Upsert', () => {
  before(done => clear(done));

  let alert;

  beforeEach(done => {
    alert = Alert.fakeExcept('description');
    alert.post((error, created) => {
      alert = created;
      done(error, created);
    });
  });

  it('should be able upsert non existing', done => {
    Alert.upsert(alert, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(alert._id);
      expect(upserted.event).to.be.eql(alert.event);
      expect(alert.updatedAt).to.not.be.eql(upserted.updatedAt);

      //set
      alert = upserted;

      done(error, upserted);
    });
  });

  it('should be able upsert existing by _id', done => {
    const updates = {
      _id: alert._id,
      description: faker.lorem.sentence(),
    };
    Alert.upsert(updates, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(alert._id);
      expect(upserted.event).to.be.eql(alert.event);
      expect(upserted.description).to.not.be.eql(alert.description);
      expect(upserted.description).to.be.eql(updates.description);
      expect(upserted.createdAt).to.be.eql(alert.createdAt);
      expect(alert.updatedAt).to.not.be.eql(upserted.updatedAt);

      //set
      alert = upserted;

      done(error, upserted);
    });
  });

  it('should be able upsert existing by fields', done => {
    const updates = {
      source: alert.source,
      number: alert.number,
      category: alert.category,
      event: alert.event,
      description: faker.lorem.sentence(),
    };
    Alert.upsert(updates, (error, upserted) => {
      expect(error).to.not.exist;
      expect(upserted).to.exist;
      expect(upserted._id).to.be.eql(alert._id);
      expect(upserted.event).to.be.eql(alert.event);
      expect(upserted.description).to.not.be.eql(alert.description);
      expect(upserted.description).to.be.eql(updates.description);
      expect(upserted.createdAt).to.be.eql(alert.createdAt);
      expect(alert.updatedAt).to.not.be.eql(upserted.updatedAt);

      //set
      alert = upserted;

      done(error, upserted);
    });
  });

  after(done => clear(done));
});
