'use strict';


/* dependencies */
const request = require('supertest');
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { clear } = require('@lykmapipo/mongoose-test-helpers');
const { Alert, apiVersion, app } = include(__dirname, '..', '..');


describe('Alert Rest API', function () {

  before((done) => clear(done));

  let alert = Alert.fake();

  it('should handle HTTP POST on /alerts', (done) => {
    request(app)
      .post(`/${apiVersion}/alerts`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(alert)
      .expect(201)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const created = new Alert(response.body);

        expect(created._id).to.exist;
        expect(created._id).to.be.eql(alert._id);
        expect(created.event).to.exist;

        //set
        alert = created;

        done(error, response);
      });
  });

  it('should handle HTTP GET on /alerts', (done) => {
    request(app)
      .get(`/${apiVersion}/alerts`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
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
      .get(`/${apiVersion}/alerts/${alert._id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const found = new Alert(response.body);

        expect(found._id).to.exist;
        expect(found._id).to.be.eql(alert._id);
        expect(found.event).to.be.equal(alert.event);

        done(error, response);
      });
  });

  it('should handle HTTP PATCH on /alerts/id:', (done) => {
    const { name } = alert.fakeOnly('name');
    request(app)
      .patch(`/${apiVersion}/alerts/${alert._id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ name })
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const patched = new Alert(response.body);

        expect(patched._id).to.exist;
        expect(patched._id).to.be.eql(alert._id);
        expect(patched.event).to.be.equal(alert.event);

        //set
        alert = patched;

        done(error, response);
      });
  });

  it('should handle HTTP PUT on /alerts/id:', (done) => {
    const { name } = alert.fakeOnly('name');
    request(app)
      .put(`/${apiVersion}/alerts/${alert._id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ name })
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const updated = new Alert(response.body);

        expect(updated._id).to.exist;
        expect(updated._id).to.be.eql(alert._id);
        expect(updated.event).to.be.equal(alert.event);

        //set
        alert = updated;

        done(error, response);
      });
  });

  it('should handle HTTP DELETE on /alerts/:id', (done) => {
    request(app)
      .delete(`/${apiVersion}/alerts/${alert._id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end((error, response) => {
        expect(error).to.not.exist;
        expect(response).to.exist;

        const deleted = new Alert(response.body);

        expect(deleted._id).to.exist;
        expect(deleted._id).to.be.eql(alert._id);
        expect(deleted.event).to.be.equal(alert.event);
        done(error, response);
      });
  });

  after((done) => clear(done));

});
