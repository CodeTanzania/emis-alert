'use strict';

/* dependencies */
const path = require('path');
const request = require('supertest');
const { expect } = require('chai');
const {
  Alert,
  apiVersion,
  app
} = require(path.join(__dirname, '..', '..'));


describe('Incident Type', () => {

  describe('Rest API', () => {

    let alert;

    before((done) => {
      Alert.deleteMany(done);
    });

    it('should handle HTTP POST on /alerts', (done) => {
      alert = Alert.fake();
      request(app)
        .post(`/v${apiVersion}/alerts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(alert)
        .expect(201)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const created = response.body;

          expect(created._id).to.exist;
          expect(created.event).to.exist;

          done(error, response);
        });
    });

    it('should handle HTTP GET on /alerts', (done) => {
      request(app)
        .get(`/v${apiVersion}/alerts`)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          //assert payload
          const result = response.body;
          expect(result.data).to.exist;
          expect(result.total).to.exist;
          expect(result.limit).to.exist;
          expect(result.skip).to.exist;
          expect(result.page).to.exist;
          expect(result.pages).to.exist;
          expect(result.lastModified).to.exist;
          done(error, response);
        });
    });

    it('should handle HTTP GET on /alerts/id:', (done) => {
      request(app)
        .get(`/v${apiVersion}/alerts/${alert._id}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const found = response.body;
          expect(found._id).to.exist;
          expect(found._id).to.be.equal(alert._id.toString());
          expect(found.event.name).to.be.equal(alert.event.name);

          done(error, response);

        });
    });

    it('should handle HTTP PATCH on /alerts/id:', (done) => {
      const patch = alert.fakeOnly('name');
      request(app)
        .patch(`/v${apiVersion}/alerts/${alert._id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(patch)
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const patched = response.body;
          expect(patched._id).to.exist;
          expect(patched._id).to.be.equal(alert._id.toString());
          expect(patched.event.name).to.be.equal(alert.event.name);
          done(error, response);
        });
    });

    it('should handle HTTP PUT on /alerts/id:', (done) => {
      const put = alert.fakeOnly('name');
      request(app)
        .put(`/v${apiVersion}/alerts/${alert._id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(put)
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const updated = response.body;
          expect(updated._id).to.exist;
          expect(updated._id).to.be.equal(alert._id.toString());
          expect(updated.event.name).to.be.equal(alert.event.name);
          done(error, response);
        });
    });

    it('should handle HTTP DELETE on /alerts/:id', (done) => {
      request(app)
        .delete(`/v${apiVersion}/alerts/${alert._id}`)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (error, response) {
          expect(error).to.not.exist;
          expect(response).to.exist;

          const deleted = response.body;
          expect(deleted._id).to.exist;
          expect(deleted._id).to.be.equal(alert._id.toString());
          expect(deleted.event.name).to.be.equal(alert.event.name);
          done(error, response);
        });
    });

    after((done) => {
      Alert.deleteMany(done);
    });

  });

});
