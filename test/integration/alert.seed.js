'use strict';

/* dependencies */
const path = require('path');
const _ = require('lodash');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert } = include(__dirname, '..', '..');

describe('Alert Seed', () => {
  const SEEDS_PATH = process.env.SEEDS_PATH;
  let alerts = [];

  before(done => clear(done));

  before(() => {
    process.env.SEEDS_PATH = path.join(__dirname, '..', 'fixtures');
  });

  it('should seed provided', done => {
    const seed = Alert.fake();
    Alert.seed(seed, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { event: seed.event })).to.exist;

      // collect
      alerts = alerts.concat(seeded);

      done(error, seeded);
    });
  });

  it('should seed provided', done => {
    const seed = [Alert.fake(), Alert.fake()];
    Alert.seed(seed, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { event: seed[0].event })).to.exist;
      expect(_.find(seeded, { event: seed[1].event })).to.exist;

      // collect
      alerts = alerts.concat(seeded);

      done(error, seeded);
    });
  });

  it.skip('should not throw if provided exist', done => {
    Alert.seed(alerts, (error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      expect(_.find(seeded, { event: alerts[0].event })).to.exist;
      expect(_.find(seeded, { event: alerts[1].event })).to.exist;
      done(error, seeded);
    });
  });

  it('should be able to seed from environment', done => {
    Alert.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      alerts = seeded;
      done(error, seeded);
    });
  });

  it('should not throw if seed from environment exist', done => {
    Alert.seed((error, seeded) => {
      expect(error).to.not.exist;
      expect(seeded).to.exist;
      expect(seeded).to.length.at.least(1);
      done(error, seeded);
    });
  });

  after(done => clear(done));

  after(() => {
    process.env.SEEDS_PATH = SEEDS_PATH;
  });
});
